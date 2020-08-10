import React from "react";

import { TaskListContextProvider } from "./TaskListContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./Containers/TaskList";

import "./App.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
