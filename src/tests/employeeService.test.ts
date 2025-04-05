import { saveEmployees, getEmployees, addEmployee, deleteEmployee, editEmployee } from "../services/EmployeeService";

describe('Employee Service', () => {
    beforeEach(() => {
        // Clear any previous data in localStorage before each test
        localStorage.clear();
    });

    test('should fetch employees correctly', () => {
        saveEmployees([{ email: 'test@test.com', firstName: 'John', lastName: 'Doe' }]);
        const employees = getEmployees();
        expect(employees.length).toBe(1);
        expect(employees[0].email).toBe('test@test.com');
    });

    test('should add a new employee', () => {
        addEmployee({ email: 'new@test.com', firstName: 'Jane', lastName: 'Doe' });
        const employees = getEmployees();
        expect(employees.length).toBe(1);
        expect(employees[0].email).toBe('new@test.com');
    });

    test('should delete an employee', () => {
        saveEmployees([{ email: 'delete@test.com', firstName: 'Tom', lastName: 'Smith' }]);
        deleteEmployee('delete@test.com');
        const employees = getEmployees();
        expect(employees.length).toBe(0);
    });

    test('should edit an employee', () => {
        saveEmployees([{ email: 'edit@test.com', firstName: 'Tom', lastName: 'Smith' }]);
        editEmployee('edit@test.com', { firstName: 'Updated' });
        const employees = getEmployees();
        expect(employees[0].firstName).toBe('Updated');
    });
});
