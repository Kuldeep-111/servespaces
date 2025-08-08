import { Route, Router, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProjectList from './pages/ProjectList'
import Microsite from './pages/Microsite'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectListDetails from './pages/ProjectListDetails'

function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="project-list" element={<ProjectList />} />
          <Route path="project-details" element={<ProjectListDetails />} />
          <Route path="microsite" element={<Microsite />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
