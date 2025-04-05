import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../hooks/useEmployees';
import EmployeeTable from '../components/EmployeeTable';

/**
 * EmployeeListPage component renders a list of employees and provides an option to add a new employee.
 * @returns {JSX.Element}
 */
const EmployeeListPage: React.FC = () => {
  const navigate = useNavigate();
  const { employees, handleDeleteEmployee } = useEmployees();

  return (
    <div>
      <Button
        type="primary"
        onClick={() => navigate('/employee/add')}
        style={{ marginBottom: 20 }}
      >
        Add Employee
      </Button>
      {/* Render the EmployeeTable with delete functionality */}
      <EmployeeTable employees={employees} onDelete={handleDeleteEmployee} />
    </div>
  );
};

export default EmployeeListPage;
