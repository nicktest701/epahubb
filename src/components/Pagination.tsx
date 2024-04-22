import React from "react";
import { DOTS, usePagination } from "../hooks/usePagination";

import next from "../assets/svg/next.svg";
import previous from "../assets/svg/previous.svg";
import last from "../assets/svg/last.svg";
import first from "../assets/svg/first.svg";
import { cn } from "../utils/cn";

interface PaginationProps {
  onPageChange: (pageNumber: number | string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount = 0,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onFirst = () => {
    onPageChange(1);
  };

  const onLast = () => {
    onPageChange(paginationRange[paginationRange.length - 1]);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex items-center gap-x-4">
      <button
        onClick={onFirst}
        title="first Page"
        type="button"
        disabled={currentPage === 1}
        className={cn(
          "bg-secondary950 rounded-md p-2 flex items-center gap-1",
          "disabled:bg-gray-600 disabled:cursor-not-allowed",
          "hidden md:inline-flex",
        )}
      >
        <img src={first} alt="" className="min-w-2" />
      </button>

      <button
        title="Previous Page"
        onClick={onPrevious}
        type="button"
        disabled={currentPage === 1}
        className={cn(
          "bg-secondary950 rounded-md p-2 flex items-center gap-1",
          "disabled:bg-gray-600 disabled:cursor-not-allowed"
        )}
      >
        <img src={previous} alt="" className="min-w-2" />
      </button>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber}>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={cn(
              "cursor-pointer",
              pageNumber === currentPage &&
                "bg-primary500 rounded-md p-1 pr-6  flex items-center "
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <button
        title="next"
        onClick={onNext}
        type="button"
        disabled={currentPage === lastPage}
        className={cn(
          "bg-secondary950 rounded-md p-2 flex items-center gap-1",
          "disabled:bg-gray-600 disabled:cursor-not-allowed"
    
        )}
      >
        <img src={next} alt="" className="min-w-2" />
      </button>

      <button
        title="last"
        type="button"
        disabled={currentPage === lastPage}
        className={cn(
         
          "bg-secondary950 rounded-md p-2 flex items-center gap-1",
          "disabled:bg-gray-600 disabled:cursor-not-allowed",
          "hidden md:inline-flex",
        )}
        onClick={onLast}
      >
        <img src={last} alt="" className="min-w-2" />
      </button>
    </ul>
  );
};

export default Pagination;
