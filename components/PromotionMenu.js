import Image from "next/image";

export default function PromotionMenu({
  style,
  queenFunc,
  rookFunc,
  bishopFunc,
  knightFunc,
}) {
  return (
    <div style={style} className="menu">
      <Image
        onClick={queenFunc}
        className="menu-img"
        alt="white queen"
        width={41}
        height={41}
        src="/white_queen.svg"
      />
      <Image
        onClick={rookFunc}
        className="menu-img"
        alt="white rook"
        width={41}
        height={41}
        src="/white_rook.svg"
      />
      <Image
        onClick={bishopFunc}
        className="menu-img"
        alt="white bishop"
        width={41}
        height={41}
        src="/white_bishop.svg"
      />
      <Image
        onClick={knightFunc}
        className="menu-img"
        alt="white knight"
        width={41}
        height={41}
        src="/white_knight.svg"
      />
    </div>
  );
}
