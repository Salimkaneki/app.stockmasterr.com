"use client";

import React from "react";
import Sidebar from "../../components/layout/Sidebar";

export default function TestPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2>Test Page</h2>
        <p>This is a test page for testing purposes.</p>
      </div>
    </div>
  );
}