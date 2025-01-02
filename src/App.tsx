import "./App.css";
import SudokuPuzzle from "./components/SudokuPuzzle/SudokuPuzzle";

function App(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold">Sudoku</h1>

      <SudokuPuzzle />
    </div>
  );
}

export default App;
