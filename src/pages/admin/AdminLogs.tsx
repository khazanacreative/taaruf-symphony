
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/components/layout/AppLayout';
import LogTable from '@/components/admin/LogTable';
import LogControls, { SearchBar } from '@/components/admin/LogControls';
import Pagination from '@/components/admin/Pagination';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { mockLogs } from '@/data/mockLogs';

const AdminLogs = () => {
  const { isAuthenticated, isAdmin, isLoading } = useAdminAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Redirect to dashboard if not admin
  if (!isAdmin) {
    return <Navigate to="/dashboard" />;
  }
  
  // Mock functions that would normally interact with backend
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };
  
  const handleFilter = () => {
    console.log('Filter clicked');
  };
  
  const handleExport = () => {
    console.log('Export clicked');
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <LogControls 
          onFilter={handleFilter}
          onExport={handleExport}
        />
        
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Log Aktivitas Terbaru</CardTitle>
              <SearchBar onSearch={handleSearch} />
            </div>
          </CardHeader>
          <CardContent>
            <LogTable logs={mockLogs} />
            
            <Pagination 
              currentPage={currentPage}
              totalItems={120}
              itemsPerPage={10}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AdminLogs;
