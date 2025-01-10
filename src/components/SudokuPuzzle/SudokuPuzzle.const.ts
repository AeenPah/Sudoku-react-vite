import { TCellStatusList } from "./SudokuPuzzle.type";

/* -------------------------------------------------------------------------- */
/*                                  Initial                                   */
/* -------------------------------------------------------------------------- */

export const initialCellStatus: TCellStatusList = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill({ status: true, value: "" })),
  );

/* -------------------------------------------------------------------------- */
/*                                    Rules                                   */
/* -------------------------------------------------------------------------- */

const sameBox = (
  row: number,
  column: number,
  _cell: number,
  rowIndex: number,
  columnIndex: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _cellIndex: number,
) => row === rowIndex && column === columnIndex;
const sameColumn = (
  _row: number,
  column: number,
  cell: number,
  _rowIndex: number,
  columnIndex: number,
  cellIndex: number,
) => column === columnIndex && cell % 3 === cellIndex % 3;
const sameRow = (
  row: number,
  _column: number,
  cell: number,
  rowIndex: number,
  _columnIndex: number,
  cellIndex: number,
) =>
  row === rowIndex &&
  ((cell < 3 && cellIndex < 3) ||
    (cell >= 3 && cell < 6 && cellIndex >= 3 && cellIndex < 6) ||
    (cell >= 6 && cellIndex >= 6));

export const validationRules = [
  {
    checkFn: sameBox,
    name: "Box",
  },
  {
    checkFn: sameColumn,
    name: "Column",
  },
  {
    checkFn: sameRow,
    name: "Row",
  },
];

type TAnswer = [number, number, number, string][];
export const answer: TAnswer = [
  [0, 0, 0, "9"],
  [0, 0, 3, "6"],
  [0, 0, 7, "2"],
  [0, 1, 0, "3"],
  [0, 1, 1, "4"],
  [0, 1, 5, "7"],
  [0, 1, 6, "5"],
  [0, 2, 0, "6"],
  [0, 2, 5, "4"],
  [0, 2, 7, "1"],
  [0, 2, 8, "3"],
  [1, 0, 0, "7"],
  [1, 0, 5, "8"],
  [1, 0, 6, "1"],
  [1, 0, 7, "3"],
  [1, 1, 2, "9"],
  [1, 1, 3, "7"],
  [1, 1, 4, "3"],
  [1, 2, 0, "5"],
  [1, 2, 2, "8"],
  [1, 2, 4, "6"],
  [1, 2, 5, "2"],
  [1, 2, 6, "4"],
  [1, 2, 7, "7"],
  [2, 0, 0, "3"],
  [2, 0, 1, "4"],
  [2, 0, 5, "6"],
  [2, 0, 6, "8"],
  [2, 0, 7, "7"],
  [2, 0, 8, "1"],
  [2, 1, 1, "5"],
  [2, 1, 2, "1"],
  [2, 1, 7, "2"],
  [2, 2, 0, "7"],
  [2, 2, 3, "8"],
  [2, 2, 4, "9"],
  [2, 2, 5, "1"],
  [2, 2, 7, "4"],
];
