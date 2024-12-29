import "./App.css";
import SudokuPuzzle from "./components/SudokuPuzzle/SudokuPuzzle";
import "./output.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="bg-sky-900 text-3xl font-bold underline">
        5 Hello world!
      </h1>

      <SudokuPuzzle />
    </>
  );
}

export default App;
