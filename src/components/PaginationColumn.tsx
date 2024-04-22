import React from "react";

type PaginationColumnProps = {
  page: number | string;
  setColumn: React.Dispatch<React.SetStateAction<number>>;
};

function PaginationColumn({ page, setColumn }: PaginationColumnProps) {
  return (
    <select
      title="Columns"
      defaultValue={page}
      onChange={(e) => setColumn(Number(e.target.value))}
      className="bg-secondary900 text-white py-2 px-4 rounded-md w-[100px]"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
  );
}

export default PaginationColumn;
