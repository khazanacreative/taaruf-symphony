
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ 
  currentPage = 1, 
  totalItems, 
  itemsPerPage, 
  onPageChange 
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-muted-foreground">
        Menampilkan {startItem}-{endItem} dari {totalItems} log
      </div>
      <div className="flex gap-1">
        <Button 
          variant="outline" 
          size="sm" 
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Sebelumnya
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
