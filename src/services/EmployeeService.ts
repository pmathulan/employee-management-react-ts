// Key for storing employee data in localStorage
const EMPLOYEE_STORAGE_KEY = 'employees';

/**
 * Fetch the list of employees from localStorage.
 * If no data is found, return an empty array.
 * @returns {Array} List of employees
 */
export const getEmployees = () => {
    // Retrieve employee data from localStorage
    const employees = localStorage.getItem(EMPLOYEE_STORAGE_KEY);
    return employees ? JSON.parse(employees) : [];
};

/**
 * Save the list of employees to localStorage.
 * @param {Array} employees - List of employees to be saved
 */
export const saveEmployees = (employees: any[]) => {
    // Save the updated list of employees to localStorage
    localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(employees));
};

/**
 * Add a new employee to the list.
 * @param {Object} employee - New employee data
 */
export const addEmployee = (employee: any) => {
    const employees = getEmployees();
    employees.push(employee);
    saveEmployees(employees); // Save the updated list
};

/**
 * Delete an employee by their email.
 * @param {string} email - The email of the employee to be deleted
 */
export const deleteEmployee = (email: string) => {
    let employees = getEmployees();
    // Filter out the employee with the matching email
    employees = employees.filter((emp: any) => emp.email !== email);
    saveEmployees(employees); // Save the updated list
};

/**
 * Edit an existing employee's details.
 * @param {string} email - The email of the employee to be edited
 * @param {Object} updatedEmployee - The updated employee data
 */
export const editEmployee = (email: string, updatedEmployee: any) => {
    const employees = getEmployees();
    // Find the index of the employee to be updated
    const index = employees.findIndex((emp: any) => emp.email === email);
    if (index !== -1) {
        // Update the employee details
        employees[index] = { ...employees[index], ...updatedEmployee };
        saveEmployees(employees); // Save the updated list
    }
};
