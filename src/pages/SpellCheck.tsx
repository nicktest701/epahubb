import { cn } from "../utils/cn";

type SpellCheckProps = {
  index: number;
  city: string[];
  positions: number[];
  bgcolor: string;
};

function SpellCheck({ index, positions, city, bgcolor }: SpellCheckProps) {
  return positions?.includes(index) ? (
    <div
      className={cn(
        "size-7 rounded-full flex items-center justify-center",
        bgcolor
      )}
    >
      {city[positions.indexOf(index)]}
    </div>
  ) : null;
}

export default SpellCheck;
