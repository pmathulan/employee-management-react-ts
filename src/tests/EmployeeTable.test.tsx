import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeTable from '../components/EmployeeTable';
import '@testing-library/jest-dom';

// Mocking the necessary props
const employees = [
  { email: 'test@test.com', firstName: 'John', lastName: 'Doe' }
];
const onDelete = jest.fn();

describe('EmployeeTable', () => {
  test('renders employee data correctly', () => {
    render(<EmployeeTable employees={employees} onDelete={onDelete} />);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
  });

  test('calls onDelete when delete button is clicked', () => {
    render(<EmployeeTable employees={employees} onDelete={onDelete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(onDelete).toHaveBeenCalledWith('test@test.com');
  });
});
