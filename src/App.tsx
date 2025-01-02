import "./App.css";
import SudokuPuzzle from "./components/SudokuPuzzle/SudokuPuzzle";
import "./output.css";

function App(): JSX.Element {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-5xl font-bold">Sudoku</h1>

      <SudokuPuzzle />
    </div>
  );
}

export default App;
