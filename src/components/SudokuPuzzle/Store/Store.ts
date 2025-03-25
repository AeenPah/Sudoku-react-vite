export type TLevels =
  | "Easy Peasy Lemon Squeezy"
  | "Meh Not So Hard"
  | "Okay This Is Tough";
// | "Fucking Impossible";

// | "EasyPeasyLemonSqueezy"
// | "MehNotSoHard"
// | "OkayThisIsTough"
// | "WhyDidIDoThis"
// | "RageQuitIncoming"
// | "SendHelp"
// | "IRegretEverything"
// | "ThisIsNotPossible"
// | "DeveloperHatesYou"
// | "DarkSoulsOfPuzzles";

type TPreFilled = [number, number, number, string][];
type TPreFilledSudokuLevels = {
  [key in TLevels]: TPreFilled;
};

const preFilledExtreme: TPreFilled = [
  [0, 0, 0, "6"],
  [0, 0, 5, "2"],
  [0, 0, 7, "3"],
  [0, 1, 3, "1"],
  [0, 1, 7, "2"],
  [0, 2, 2, "9"],
  [0, 2, 4, "5"],
  [0, 2, 5, "7"],
  [1, 0, 5, "5"],
  [1, 0, 7, "8"],
  [1, 1, 0, "6"],
  [1, 1, 8, "7"],
  [1, 2, 0, "3"],
  [1, 2, 3, "9"],
  [1, 2, 7, "6"],
  [1, 2, 8, "5"],
  [2, 0, 2, "3"],
  [2, 0, 3, "4"],
  [2, 1, 0, "7"],
  [2, 1, 5, "8"],
  [2, 2, 1, "1"],
  [2, 2, 2, "2"],
  [2, 2, 6, "6"],
];
const preFilledHard: TPreFilled = [
  [0, 0, 0, "1"],
  [0, 0, 2, "5"],
  [0, 0, 3, "6"],
  [0, 0, 4, "7"],
  [0, 1, 4, "2"],
  [0, 1, 5, "9"],
  [0, 1, 8, "1"],
  [0, 2, 3, "8"],
  [0, 2, 5, "1"],
  [0, 2, 6, "7"],
  [0, 2, 7, "4"],
  [1, 0, 1, "6"],
  [1, 0, 3, "3"],
  [1, 0, 4, "8"],
  [1, 0, 5, "1"],
  [1, 0, 7, "5"],
  [1, 0, 8, "9"],
  [1, 1, 4, "5"],
  [1, 1, 7, "1"],
  [1, 2, 0, "3"],
  [1, 2, 5, "6"],
  [1, 2, 7, "7"],
  [2, 0, 2, "7"],
  [2, 0, 3, "9"],
  [2, 0, 8, "4"],
  [2, 1, 1, "3"],
  [2, 1, 2, "2"],
  [2, 2, 3, "1"],
  [2, 2, 6, "5"],
  [2, 2, 7, "7"],
];

const preFilledEasy: TPreFilled = [
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

export const preFilledSudokuLevels: TPreFilledSudokuLevels = {
  "Easy Peasy Lemon Squeezy": preFilledEasy,
  "Meh Not So Hard": preFilledHard,
  "Okay This Is Tough": preFilledExtreme,
  // "Fucking Impossible": [],
};
