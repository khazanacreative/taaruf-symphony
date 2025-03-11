
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Download, Search } from 'lucide-react';

interface LogControlsProps {
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  onExport?: () => void;
}

const LogControls = ({ onSearch, onFilter, onExport }: LogControlsProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Log Aktivitas Sistem</h1>
        <p className="text-muted-foreground">
          Pantau aktivitas dan peristiwa sistem
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onFilter}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onExport}
        >
          <Download className="h-4 w-4 mr-2" />
          Ekspor Log
        </Button>
      </div>
    </div>
  );
};

export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Cari log..." }: SearchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-sm flex items-center relative">
      <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
      <Input 
        placeholder={placeholder} 
        className="pl-9"
        onChange={handleSearch}
      />
    </div>
  );
};

export default LogControls;
