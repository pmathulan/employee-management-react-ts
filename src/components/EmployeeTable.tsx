import React from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

// Define the props type for the EmployeeTable component
interface EmployeeTableProps {
  employees: any[];
  onDelete: (email: string) => void;
}

/**
 * EmployeeTable component renders a table of employees.
 * It includes columns for employee details and actions (Edit/Delete).
 * @param {Array} employees - The list of employees to display
 * @param {Function} onDelete - The function to delete an employee
 */
const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onDelete }) => {
  const navigate = useNavigate();

  const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
    { title: 'Joined Date', dataIndex: 'joinedDate', key: 'joinedDate' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <span>
          {/* Edit button navigates to edit page for this employee */}
          <Button onClick={() => navigate(`/employee/edit/${record.email}`)} style={{ marginRight: 10 }}>Edit</Button>
          {/* Delete button calls the onDelete function */}
          <Button onClick={() => onDelete(record.email)} danger>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      dataSource={employees}
      columns={columns}
      rowKey="email"
      pagination={false}
    />
  );
};

export default EmployeeTable;
