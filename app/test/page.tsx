import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import DashboardDetails from "../../components/DashboardDetails";


export default function TestPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2>Test Page</h2>
        <p>This is a test page for testing purposes.</p>
        <DashboardDetails />
      </div>
    </div>
  );
}