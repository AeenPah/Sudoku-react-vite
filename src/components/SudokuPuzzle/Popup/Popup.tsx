import { useState } from "react";
import { preFilledSudokuLevels, TLevels } from "../Store/Store";

function Popup({
  initialPuzzle,
}: {
  initialPuzzle: (level: TLevels) => void;
}): JSX.Element | null {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [isShow, setIsShow] = useState<boolean>(true);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleClick(level: TLevels) {
    initialPuzzle(level);
    setIsShow(false);
  }

  if (!isShow) return null;
  return (
    <div className="absolute bottom-0 right-0">
      <div
        role="dialog"
        className="inset-0 flex h-screen w-screen items-center justify-center bg-slate-700 bg-opacity-80"
      >
        <div className="flex flex-col items-baseline rounded-xl bg-white p-[20px]">
          <h2 className="text-2xl font-bold leading-snug tracking-normal text-slate-800">
            How professional are you?
          </h2>
          <h2 className="text-xl leading-snug tracking-normal text-slate-800">
            Choose difficulty
          </h2>

          <div className="mt-[10px] flex flex-col items-center gap-[10px] self-center">
            {(Object.keys(preFilledSudokuLevels) as TLevels[]).map((key) => (
              <button
                className="rounded-md border border-transparent bg-gradient-to-tr from-slate-800 to-slate-700 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none"
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
    </div>
  );
}

export default Popup;
