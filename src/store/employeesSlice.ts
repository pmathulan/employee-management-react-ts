import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../types/Employee";

interface EmployeesState {
    employees: Employee[];
}

const initialState: EmployeesState = {
    employees: [],
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload;
        },
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload);
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.map(emp =>
                emp.id === action.payload.id ? action.payload : emp
            );
        },
        deleteEmployee: (state, action: PayloadAction<string>) => {
            state.employees = state.employees.filter(emp => emp.id !== action.payload);
        },
    },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
