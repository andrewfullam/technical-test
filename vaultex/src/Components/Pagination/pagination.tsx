import React from "react";
import { useMemo } from "react";

const Pagination = ({
  updatePageNumber,
  updatePageSize,
  numberOfPages,
}: IPaginationProps) => {
  const pageButtons = useMemo(() => {
    const buttons = [];

    for (var i = 1; i <= numberOfPages; i++) {
      buttons.push(i);
    }

    return buttons;
  }, [numberOfPages]);

  return (
    <div>
      Pages:
      {pageButtons.map((b) => (
        <button key={`button${b}`} onClick={() => updatePageNumber(b)}>
          {b}
        </button>
      ))}
      Page Size: <button onClick={() => updatePageSize(10)}>10</button>
      <button onClick={() => updatePageSize(20)}>20</button>
      <button onClick={() => updatePageSize(30)}>30</button>
    </div>
  );
};

export default Pagination;

interface IPaginationProps {
  updatePageNumber: (value: number) => void;
  updatePageSize: (value: number) => void;
  numberOfPages: number;
}
