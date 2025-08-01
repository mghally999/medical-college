import React from "react";

interface PaginationTwoProps {
  pageNumber: number;
  setPageNumber: (page: number) => void;
  data: any[];
  pageCapacity: number;
}

const PaginationTwo: React.FC<PaginationTwoProps> = ({
  pageNumber,
  setPageNumber,
  data,
  pageCapacity,
}) => {
  const totalPages = Math.ceil(data.length / pageCapacity);

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <a
        key={1}
        onClick={(e) => {
          e.preventDefault();
          setPageNumber(1);
        }}
        className={pageNumber === 1 ? "-count-is-active" : ""}
        href="#"
      >
        1
      </a>
    );

    // Show second page if exists
    if (totalPages >= 2) {
      pages.push(
        <a
          key={2}
          onClick={(e) => {
            e.preventDefault();
            setPageNumber(2);
          }}
          className={pageNumber === 2 ? "-count-is-active" : ""}
          href="#"
        >
          2
        </a>
      );
    }

    // Show third page if exists
    if (totalPages >= 3) {
      pages.push(
        <a
          key={3}
          onClick={(e) => {
            e.preventDefault();
            setPageNumber(3);
          }}
          className={pageNumber === 3 ? "-count-is-active" : ""}
          href="#"
        >
          3
        </a>
      );
    }

    // Show ellipsis if needed
    if (totalPages > 4 && pageNumber !== 4) {
      pages.push(<span key="ellipsis-start">...</span>);
    }

    // Show current page if it's beyond page 3
    if (pageNumber > 3 && pageNumber !== totalPages) {
      pages.push(
        <a
          key={pageNumber}
          href="#"
          className="-count-is-active"
          onClick={(e) => {
            e.preventDefault();
            setPageNumber(pageNumber);
          }}
        >
          {pageNumber}
        </a>
      );
    }

    // Show second ellipsis if needed
    if (totalPages > 4 && pageNumber < totalPages - 1 && pageNumber > 3) {
      pages.push(<span key="ellipsis-end">...</span>);
    }

    // Show last page if different from current
    if (totalPages > 3 && pageNumber !== totalPages) {
      pages.push(
        <a
          key={totalPages}
          className={pageNumber === totalPages ? "-count-is-active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setPageNumber(totalPages);
          }}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="pagination -buttons">
      <button
        className="pagination__button -prev"
        onClick={handlePrevious}
        disabled={pageNumber === 1}
      >
        <i className="icon icon-chevron-left"></i>
      </button>

      <div className="pagination__count">{renderPageNumbers()}</div>

      <button
        className="pagination__button -next"
        onClick={handleNext}
        disabled={pageNumber === totalPages}
      >
        <i className="icon icon-chevron-right"></i>
      </button>
    </div>
  );
};

export default PaginationTwo;
