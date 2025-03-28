function PopupResult({
  result,
  onClose: onClick,
}: {
  result: string;
  onClose: () => void;
}): JSX.Element {
  let src = "default-image";

  console.log(result);
  switch (result) {
    case "OpenEyes":
      src = "open-eyes";
      break;
    case "FilmingFighting":
      src = "filming-fighting";
      break;
    case "FinallyDid":
      src = "finally-did";
      break;
    case "SolvedEasyMode":
      src = "solved-easy-mode";
      break;
    case "DidButNotSoHard":
      src = "did-but-not-so-hard";
      break;
    case "Impossible":
      src = "impossible";
      break;
    case "NotSoHard":
      src = "not-so-hard";
      break;
    default:
      console.error("not-found-result");
      break;
  }

  return (
    <div
      role="dialog"
      className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-slate-700 bg-opacity-80"
      onClick={() => onClick()}
    >
      <div
        className="flex flex-col items-baseline rounded-xl bg-white p-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={`/${src}.jpg`} alt={src || "default-image"} />
      </div>
    </div>
  );
}

export default PopupResult;
