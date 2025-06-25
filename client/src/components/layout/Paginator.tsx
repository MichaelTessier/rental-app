import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/pagination"
import { useState } from "react";

// TODO
// support PaginationEllipsis

type Props ={
  totalItems?: number;
  initialPage?: number;
  limit?: number;
  onPageChange?: (page: number) => void;
}

function Paginator({ totalItems = 10, initialPage = 1, limit = 10, onPageChange }: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / limit);

  function handlePreviousPage()  {
    if(currentPage <= 1) return 
    const page = currentPage - 1;

    setCurrentPage(page);
    
    onPageChange?.(page);
  }

  function handleNextPage() {
    if(currentPage >= totalPages) return
    const page = currentPage + 1;

    setCurrentPage(page);

    onPageChange?.(page);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    onPageChange?.(page);
  }

  const canPrevious = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <>
      <Pagination>
        <PaginationContent>

      <PaginationItem>
        <PaginationPrevious
          isActive={canPrevious}
          aria-label="Previous"  
          onClick={() => handlePreviousPage()} className="cursor-pointer"
        />
      </PaginationItem>
      { Array.from({ length: totalPages }, (_, index) => {
        return (
          <PaginationItem className="cursor-pointer" key={index}>
            <PaginationLink 
              isActive={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}

            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        )
      })}

     
{/* 
      <PaginationItem >
        <PaginationEllipsis />
      </PaginationItem> */}

      {/* {currentPage} */}

      <PaginationItem>
        <PaginationNext
          isActive={canNext}
          aria-label="Next"
          onClick={() => handleNextPage()} className="cursor-pointer"
        />
      </PaginationItem>

    </PaginationContent>
  </Pagination>
</>
  )
}

export default Paginator