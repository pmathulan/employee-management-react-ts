import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Button } from "antd";
import EmployeesList from "./pages/EmployeeListPage";

// Ant Design Layout components to structure the UI
const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ padding: "0 20px" }}>
          <div className="logo" style={{ color: "#fff", fontSize: "20px" }}>
            Employee Management System
          </div>
        </Header>
        <Content
          style={{
            padding: "20px",
            minHeight: "80vh",
            backgroundColor: "#f0f2f5",
          }}
        >
          {/* Button to navigate to Add Employee Page */}
          <Button type="primary" href="/add-employee" style={{ marginBottom: "20px" }}>
            Add Employee
          </Button>

          {/* Routing to respective pages for Employee List and Add Employee */}
          <Routes>
            <Route path="/" element={<EmployeesList />} />
            {/* <Route path="/add-employee" element={<AddEmployee />} /> */}
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
