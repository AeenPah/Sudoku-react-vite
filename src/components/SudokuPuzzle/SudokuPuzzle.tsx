import { useEffect, useState } from "react";
import { TCellStatusList } from "./SudokuPuzzle.type";
import {
  answer,
  initialCellStatus,
  validationRules,
} from "./SudokuPuzzle.const";

function SudokuPuzzle(): JSX.Element {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [cellStatus, setCellStatus] =
    useState<TCellStatusList>(initialCellStatus);

  /* -------------------------------------------------------------------------- */
  /*                                   Effect                                   */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    setCellStatus((prev) => {
      const updatedCellStatus = structuredClone(prev); // Deep copy
      answer.forEach(([row, col, cell, value]) => {
        updatedCellStatus[row][col][cell] = {
          status: true,
          changeable: true,
          value: value,
        };
      });

      return updatedCellStatus;
    });
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function updateCellStatus(
    row: number,
    column: number,
    innerCell: number,
    hasError: boolean,
  ): void {
    setCellStatus((prev) => {
      const newStatus = structuredClone(prev); // Deep copy
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
          .filter((cell) => cell.isError),
      ),
    );

    errorCells.forEach(({ rowIndex, columnIndex, innerCellIndex }) => {
      validateAndUpdateCell(
        rowIndex,
        columnIndex,
        innerCellIndex,
        cellStatus[rowIndex][columnIndex][innerCellIndex].value,
        false,
      );
    });
  }

  function checkForDuplicates(
    row: number,
    column: number,
    cell: number,
    inputValue: string,
  ): boolean {
    const updatedGrid: TCellStatusList = structuredClone(cellStatus); // Deep copy
    const errorCells: {
      rowIndex: number;
      columnIndex: number;
      cellIndex: number;
    }[] = [];

    if (inputValue) {
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
                ce.value === inputValue
              ) {
                errorCells.push({ rowIndex, columnIndex, cellIndex });
              }
            }),
          ),
        );
      });
    }

    errorCells.forEach(({ rowIndex, columnIndex, cellIndex }) =>
      updateCellStatus(rowIndex, columnIndex, cellIndex, true),
    );

    return errorCells.length > 0;
  }

  async function validateAndUpdateCell(
    row: number,
    column: number,
    cell: number,
    value: string,
    clearErrors: boolean,
  ): Promise<void> {
    if (!RegExp(/^[1-9]*$/).test(value)) return;

    const hasError = checkForDuplicates(row, column, cell, value);

    // set value to the right place at the state.
    await setCellStatus((prev) => {
      prev[row][column][cell] = {
        ...prev[row][column][cell],
        value,
      };

      return [...prev];
    });

    updateCellStatus(row, column, cell, hasError);
    if (clearErrors) refreshInvalidCells();
  }

  return (
    <div className="mx-auto flex w-full max-w-[586px] flex-col gap-2">
      <button
        className="w-fit rounded bg-sky-700 px-4 py-2 font-bold text-white hover:bg-sky-900"
        onClick={() => setCellStatus(initialCellStatus)}
      >
        Reset
      </button>
      <table className="w-full table-fixed border-collapse">
        <tbody>
          {cellStatus.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map((column, indexColumn) => (
                <td
                  key={`${indexRow}-${indexColumn}`}
                  className="border-[3px] border-sky-900 p-0"
                >
                  <div className="grid grid-cols-3 gap-0">
                    {column.map((innerCell, indexInnerCell) => (
                      <input
                        key={`${indexRow}-${indexColumn}-${indexInnerCell}`}
                        disabled={innerCell.changeable}
                        type="tel"
                        value={innerCell.value}
                        maxLength={1}
                        onChange={(event) => {
                          validateAndUpdateCell(
                            indexRow,
                            indexColumn,
                            indexInnerCell,
                            event.target.value,
                            true,
                          );
                        }}
                        className={`aspect-square border border-sky-300 text-center text-3xl ${
                          innerCell.changeable && "font-bold"
                        } ${
                          innerCell.status
                            ? "disabled:bg-sky-100"
                            : innerCell.changeable
                              ? "bg-red-300"
                              : "bg-red-400"
                        }`}
                      />
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SudokuPuzzle;
