import { useEffect, useState } from "react";
import { TCellStatusList, TNumberGrid } from "./SudokuPuzzle.type";
import {
  answer,
  initialCellStatus,
  initialNumberGrid,
  validationRules,
} from "./SudokuPuzzle.const";
import restrictToSingleDigit from "../../utils/restrictToSingleDigit";

function SudokuPuzzle(): JSX.Element {
  /* -------------------------------------------------------------------------- */
  /*                                    States                                  */
  /* -------------------------------------------------------------------------- */

  // TODO: change this to a Ref or add to cell status
  const [numberGrid, setNumberGrid] = useState<TNumberGrid>(initialNumberGrid);
  const [cellStatus, setCellStatus] =
    useState<TCellStatusList>(initialCellStatus);

  /* -------------------------------------------------------------------------- */
  /*                                   Effect                                   */
  /* -------------------------------------------------------------------------- */

  // TODO: May change this by update states
  useEffect(() => {
    const tempCellStatus = cellStatus;
    answer.forEach((item) => {
      tempCellStatus[item[0]][item[1]][item[2]] = {
        status: true,
        changeable: true,
      };

      setNumberGrid((prev) => {
        prev[item[0]][item[1]][item[2]] = item[3];

        return [...prev];
      });
    });

    setCellStatus(tempCellStatus);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function updateCellStatus(
    row: number,
    column: number,
    innerCell: number,
    hasError: boolean
  ): void {
    setCellStatus((prev) => {
      const newStatus = JSON.parse(JSON.stringify(prev)); // Deep copy
      newStatus[row][column][innerCell] = {
        ...prev[row][column][innerCell],
        status: !hasError,
      };
      return newStatus;
    });
  }

  function refreshInvalidCells(): void {
    const errorCells = cellStatus.flatMap((row, rowIndex) =>
      row.flatMap((column, columnIndex) =>
        column
          .map((innerCell, innerCellIndex) => ({
            rowIndex,
            columnIndex,
            innerCellIndex,
            isError: !innerCell.status,
          }))
          .filter((cell) => cell.isError)
      )
    );

    errorCells.forEach(({ rowIndex, columnIndex, innerCellIndex }) => {
      validateAndUpdateCell(
        rowIndex,
        columnIndex,
        innerCellIndex,
        numberGrid[rowIndex][columnIndex][innerCellIndex],
        false
      );
    });
  }

  function checkForDuplicates(
    row: number,
    column: number,
    cell: number,
    inputValue: string
  ): boolean {
    const updatedGrid: TNumberGrid = JSON.parse(JSON.stringify(numberGrid));
    const errorCells: {
      rowIndex: number;
      columnIndex: number;
      cellIndex: number;
    }[] = [];

    validationRules.forEach(({ checkFn }) => {
      updatedGrid.forEach((r, rowIndex) =>
        r.forEach((c, columnIndex) =>
          c.forEach((ce, cellIndex) => {
            // avoid check cell with its own cell value
            if (
              row === rowIndex &&
              column === columnIndex &&
              cell === cellIndex
            )
              return;

            if (
              checkFn(row, column, cell, rowIndex, columnIndex, cellIndex) &&
              ce === inputValue
            ) {
              errorCells.push({ rowIndex, columnIndex, cellIndex });
            }
          })
        )
      );
    });

    errorCells.forEach(({ rowIndex, columnIndex, cellIndex }) =>
      updateCellStatus(rowIndex, columnIndex, cellIndex, true)
    );

    return errorCells.length > 0;
  }

  async function validateAndUpdateCell(
    row: number,
    column: number,
    cell: number,
    value: string,
    clearErrors: boolean
  ) {
    if (!value) return;

    const hasError = checkForDuplicates(row, column, cell, value);

    // set value to the right place at the state.
    await setNumberGrid((prev) => {
      prev[row][column][cell] = value;

      return [...prev];
    });

    updateCellStatus(row, column, cell, hasError);
    if (clearErrors) refreshInvalidCells();
  }

  return (
    <div className="flex flex-col bg-sky-200 w-[586px]">
      {cellStatus.map((row, indexRow) => (
        <div key={indexRow} className="flex flex-row">
          {row.map((column, indexColumn) => (
            <div
              key={`${indexRow}-${indexColumn}`}
              className="flex flex-wrap box-border border-2 border-black divide-x divide-y divide-gray-600"
            >
              {column.map((innerCell, indexInnerCell) => (
                <input
                  key={`${indexRow}-${indexColumn}-${indexInnerCell}`}
                  disabled={innerCell.changeable}
                  type="text"
                  value={numberGrid[indexRow][indexColumn][indexInnerCell]}
                  onChange={(event) => {
                    restrictToSingleDigit(event);
                    validateAndUpdateCell(
                      indexRow,
                      indexColumn,
                      indexInnerCell,
                      event.target.value,
                      true
                    );
                  }}
                  className={`h-16 w-16 text-center text-2xl ${
                    !innerCell.status && "bg-red-400"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SudokuPuzzle;
