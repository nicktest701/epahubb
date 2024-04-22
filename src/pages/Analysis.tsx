import AnalysisCard from "../components/AnalysisCard";
import AnalysisMiddleCard from "../components/AnalysisMiddleCard";
import Profile from "../components/Profile";
import wave from "../assets/svg/linegraph.svg";
import like from "../assets/svg/like.svg";
import bar_chart from "../assets/svg/bar.svg";
import lady from "../assets/svg/lady.svg";
import { ANALYSIS_MIDDLE } from "../constants";
import Calendar from "../components/Calendar";
import TableWithPagination from "../components/TableWithPagination";

function Analysis() {
  return (
    // profile
    <section className="py-8 space-y-10 lg:max-w-screen-lg">
      <Profile />

      {/* top cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalysisCard>
          <div className="space-y-8">
            <div className="p-8 text-gray-300">
              <p>
                <span className="text-lg  absolute pt-1"> $</span>
                <span className="text-3xl font-semibold pl-3 text-slate-500">
                  810.49
                </span>
              </p>
              <p>Net Cummulative P&L</p>
            </div>
            <div>
              <img src={wave} alt="line_graph" className="w-full" />
            </div>
          </div>
        </AnalysisCard>
        <AnalysisCard>
          <div className="space-y-8">
            <div className="p-8 text-gray-300">
              <p>
                <span className="text-lg  absolute pt-1"> $</span>
                <span className="text-3xl font-semibold pl-3 text-slate-500">
                  810.49
                </span>
              </p>
              <p>Net Cummulative P&L</p>
            </div>
            <div>
              <img src={wave} alt="line_graph" className="w-full" />
            </div>
          </div>
        </AnalysisCard>
        <AnalysisCard>
          <div className="space-y-8 p-8">
            <div className=" text-gray-300">
              <p>
                <span className="text-3xl font-semibold text-slate-500">
                  21%
                </span>
              </p>
              <p>Trade Win,%</p>
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center">
                <p className="text-base text-primary500">10 wins</p>
                <p className="text-base text-red-700">36 Losses </p>
              </div>
            </div>
          </div>
        </AnalysisCard>
        <AnalysisCard>
          <div className="space-y-8 p-8">
            <div className=" text-gray-300">
              <p>
                <span className="text-lg  absolute pt-1"> $</span>
                <span className="text-3xl font-semibold pl-3 text-slate-500">
                  810.49
                </span>
              </p>
              <p>Net Cummulative P&L</p>
            </div>
            <div>
              <div className="h-[5px] w-full bg-primary500 rounded-full overflow-hidden my-4">
                <div className="h-[5px] w-1/3 bg-[#FF0000]"></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-base text-primary500">$18.37</p>
                <p className="text-base text-red-700">$216.52</p>
              </div>
            </div>
          </div>
        </AnalysisCard>
      </div>

      {/* middle cards  */}
      <div className="flex items-center flex-wrap justify-between  gap-4 py-20 ">
        {/* top */}
        <AnalysisCard>
          <div className="p-4">
            <div className="flex justify-between items-center py-4">
              <p>status</p>
              <p className="bg-primary400 rounded-md py-1 px-2">Active</p>
              <img src="" alt="" />
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-4 pb-4">
              <div className="flex items-start gap-2 p-3 border border-gray-100 border-dashed border-opacity-20 rounded-md">
                <div>
                  <p className="text-[20px] font-semibold tracking-wide">
                    $86.75
                  </p>
                  <p className="text-[14px] text-gray-400">Best Trade</p>
                </div>
                <img src={like} alt="" />
              </div>
              <div className="flex items-start gap-2 p-3 border border-gray-100 border-dashed border-opacity-20 rounded-md">
                <div>
                  <p className="text-[20px] font-semibold tracking-wide">
                    $86.75
                  </p>
                  <p className="text-[14px] text-gray-400">Best Trade</p>
                </div>
                <img src={like} alt="" />
              </div>
              <div className="flex items-start gap-2 p-3 border border-gray-100 border-dashed border-opacity-20 rounded-md">
                <div>
                  <p className="text-[20px] font-semibold tracking-wide">
                    $86.75
                  </p>
                  <p className="text-[14px] text-gray-400">Best Trade</p>
                </div>
                <img src={like} alt="" />
              </div>
              <div className="flex items-start gap-2 p-3 border border-gray-100 border-dashed border-opacity-20 rounded-md">
                <div>
                  <p className="text-[20px] font-semibold tracking-wide">
                    $86.75
                  </p>
                  <p className="text-[14px] text-gray-400">Best Trade</p>
                </div>
                <img src={like} alt="" />
              </div>
            </div>

            <div>
              <img src={bar_chart} alt="bar_chart" />
            </div>
          </div>
        </AnalysisCard>
        {/* middle  */}
        <div className="flex-grow  grid grid-cols-2 md:grid-cols-3 gap-4  h-full">
          {ANALYSIS_MIDDLE.map(({ icon, title, value }) => (
            <AnalysisMiddleCard icon={icon} value={value} title={title} />
          ))}
        </div>

        {/* person */}
        <div className="hidden lg:flex items-center justify-center ">
          <img src={lady} alt="lady" />
        </div>
      </div>

      <Calendar />

      <TableWithPagination />
    </section>
  );
}

export default Analysis;
