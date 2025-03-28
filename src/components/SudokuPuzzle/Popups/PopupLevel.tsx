import { preFilledSudokuLevels, TLevels } from "../Store/Store";

function PopupLevel({
  initialPuzzle,
}: {
  initialPuzzle: (level: TLevels) => void;
}): JSX.Element | null {
  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleClick(level: TLevels) {
    initialPuzzle(level);
  }

  return (
    <div
      role="dialog"
      className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-slate-700 bg-opacity-80"
    >
      <div className="flex flex-col items-baseline rounded-xl bg-white p-[20px]">
        <h2 className="text-2xl font-bold leading-snug tracking-normal text-darkBlue">
          How professional are you?
        </h2>
        <h2 className="text-xl leading-snug tracking-normal text-darkBlue">
          Choose difficulty
        </h2>

        <div className="mt-[10px] flex flex-col items-center gap-[10px] self-center">
          {(Object.keys(preFilledSudokuLevels) as TLevels[]).map((key) => (
            <button
              className="rounded bg-mainBlue px-4 py-2 font-bold text-white hover:bg-darkBlue"
              type="button"
              key={key}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopupLevel;
