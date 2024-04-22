import clock from "../assets/svg/clock.svg";
import {
  firstRow,
  generateNumbers,
  london,
  londonPostions,
  newYork,
  newYorkPostions,
  selectedColumn,
  sidney,
  sidneyPostions,
  tokyo,
  tokyoPostions,
} from "../constants";
import { cn } from "../utils/cn";
import SpellCheck from "./SpellCheck";

function Market() {
  return (
    <section className="py-12 md:py-8">
      <div className="flex justify-start items-center gap-4">
        <img src={clock} alt="clock" className="size-10 md:16" />
        <p className="text-xl md:text-3xl font-semibold ">Forex Market Hours</p>
      </div>
      <p className="text-5xl md:text-7xl font-bold tracking-wide py-4">
        {new Date().toLocaleTimeString()}
      </p>
      <p>GMT+0000 (Greenwich Mean Time)</p>

      <div className="bg-[#105D5D] py-8 px-6 mt-16 ">
        <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-[repeat(24,1fr)]">
          {generateNumbers().map((_, index) => (
            <div
              className={cn(
                "min-h-10 bg-[#031F34] border border-white border-opacity-20 flex justify-center items-center cursor-pointer",
                "hover:bg-teal-600",
                firstRow[index] !== undefined ? "bg-[#105D5D]" : null,
                selectedColumn.includes(index)
                  ? "border-yellow-400 border-opacity-90"
                  : null
              )}
            >
              {firstRow[index]}
              {index === 72 && (
                <div className="size-7 rounded-full bg-[#3EAD92]"></div>
              )}
              {[96, 97, 98].includes(index) && (
                <div className="size-7 rounded-full bg-[#FC5000]"></div>
              )}
              <SpellCheck
                index={index}
                positions={londonPostions}
                city={london}
                bgcolor="bg-[#FF9B21]"
              />
              <SpellCheck
                index={index}
                positions={newYorkPostions}
                city={newYork}
                bgcolor="bg-[#513799]"
              />
              <SpellCheck
                index={index}
                positions={sidneyPostions}
                city={sidney}
                bgcolor="bg-[#3EAD92]"
              />
              <SpellCheck
                index={index}
                positions={tokyoPostions}
                city={tokyo}
                bgcolor="bg-[#FC5000]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Market;
