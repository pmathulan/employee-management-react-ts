import { useEffect, useState } from 'react';
import { deleteEmployee, getEmployees } from '../services/EmployeeService';

/**
 * Custom hook for managing employee data.
 * It fetches employees and provides a method to delete an employee.
 * @returns {Object} Employees list and the delete function
 */
export const useEmployees = () => {
    const [employees, setEmployees] = useState<any[]>([]);

    useEffect(() => {
        // Fetch employees when the component loads
        setEmployees(getEmployees());
    }, []);

    /**
     * Delete an employee by their email and refresh the list.
     * @param {string} email - The email of the employee to delete
     */
    const handleDeleteEmployee = (email: string) => {
        deleteEmployee(email);
        setEmployees(getEmployees()); // Refresh the employee list
    };

    return {
        employees,
        handleDeleteEmployee
    };
};
