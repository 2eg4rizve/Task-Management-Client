import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TaskManagement from './pages/TaskManagement/TaskManagement';
import CreateNewTasks from './pages/CreateNewTasks/CreateNewTasks';
import SeePreviousTasks from './pages/SeePreviousTasks/SeePreviousTasks';
import ToDoList from './pages/ToDoList/ToDoList';
import OngoingList from './pages/OngoingList/OngoingList';
import CompletedList from './pages/CompletedList/CompletedList';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TaskUpdate from './pages/TaskUpdate/TaskUpdate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
  {
    path: 'taskManagement',
    element: <TaskManagement></TaskManagement>,
    children: [
      {
        path: 'newTask',
        element: <CreateNewTasks></CreateNewTasks>
      },
      {
        path: 'previousTask',
        element: <SeePreviousTasks></SeePreviousTasks>
      },
      {
        path: "toDoList",
        element: <ToDoList></ToDoList>
      },
      {
        path: "ongoingList",
        element: <OngoingList></OngoingList>
      },
      {
        path: "completeList",
        element: <CompletedList></CompletedList>
      },
      {
        path: "taskUpdate/:id",
        element: <TaskUpdate></TaskUpdate>
      }
    ]



  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
