import React from "react";
import  TasksCard from "./TasksCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="mt-3">Dashboard</h2>
      <div className="row mt-5">
        <div className="col-12">
          <TasksCard />
        </div>
      </div>
    </div>
  );
}
