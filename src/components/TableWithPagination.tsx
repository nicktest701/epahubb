import  { useState, useMemo } from "react";
import data from "../mocks//transactions.json";
import Pagination from "./Pagination";
import PaginationColumn from "./PaginationColumn";
import Search from "./Search";
import { cn } from "../utils/cn";

export default function TableWithPagination() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKey, setSearchKey] = useState("");

  const currentTableData = useMemo(() => {
    if (searchKey !== "") {
      const newData = data.filter((item) => {
        return (
          item.symbol.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.profit.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.action.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.close.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.closePrice.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.openPrice.toLowerCase().includes(searchKey.toLowerCase())
        );
      });

      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return newData.slice(firstPageIndex, lastPageIndex);
    } else {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, pageSize, searchKey]);

  return (
    <div className="space-y-8 shadow-md rounded-md p-8 bg-[#15171C]">
      <h3 className="text-3xl text-gray-400">Closed Trades</h3>
      <Search searchKey={searchKey} setSearchKey={setSearchKey} />
      <table className="w-full block border-collapse  overflow-x-auto ">
        <thead className="text-left border-b border-opacity-45 border-gray-500 sf">
          <tr className="text-left whitespace-nowrap">
            <th className="font-normal">Open Time</th>
            <th className="font-normal">Symbol</th>
            <th className="font-normal">Open Price</th>
            <th className="font-normal">Volume</th>
            <th className="font-normal">Action</th>
            <th className="font-normal">Close</th>
            <th className="font-normal">Close Price</th>
            <th className="font-normal">Status</th>
            <th className="font-normal">Profit</th>
          </tr>
        </thead>
        <tbody className="border-b border-opacity-45 border-gray-500 ">
          {currentTableData.length === 0 && (
            <tr>
              <td colSpan={9} className="text-center text-lg py-8">
                No Data Available !
              </td>
            </tr>
          )}
          {currentTableData.map((item) => {
            return (
              <tr
                key={item.volume}
                className="text-left border-b border-opacity-45 border-gray-500 whitespace-nowrap "
              >
                <td>{item.openTime}</td>
                <td>{item.symbol}</td>
                <td>{item.openPrice}</td>
                <td>{item.volume}</td>
                <td>
                  <span
                    className={cn(
                      "bg-primary500 rounded-lg py-1 px-5",
                      item.action === "Sell" && "bg-red-700"
                    )}
                  >
                    {item.action}
                  </span>
                </td>
                <td>{item.close}</td>
                <td>{item.closePrice}</td>
                <td>
                  <span
                    className={cn(
                      "bg-primary500 rounded-lg py-1 px-5",
                      item.status === "Loss" && "bg-red-700"
                    )}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  {" "}
                  <span
                    className={cn(
                      "text-primary500",
                      item.profit?.includes("-") && "text-red-700"
                    )}
                  >
                    {item.profit}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <Pagination
          currentPage={currentPage as number}
          totalCount={Number(data.length)}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page as number)}
        />
        <PaginationColumn page={pageSize} setColumn={setPageSize} />
      </div>
    </div>
  );
}
