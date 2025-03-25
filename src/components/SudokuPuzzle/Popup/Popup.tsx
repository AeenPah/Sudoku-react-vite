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
          <h2 className="text-darkBlue text-2xl font-bold leading-snug tracking-normal">
            How professional are you?
          </h2>
          <h2 className="text-darkBlue text-xl leading-snug tracking-normal">
            Choose difficulty
          </h2>

          <div className="mt-[10px] flex flex-col items-center gap-[10px] self-center">
            {(Object.keys(preFilledSudokuLevels) as TLevels[]).map((key) => (
              <button
                className="bg-mainBlue hover:bg-darkBlue rounded px-4 py-2 font-bold text-white"
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
