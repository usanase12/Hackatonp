import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
         <div className="flex justify-around bg-gray-200 p-4">
      <NavLink to="/layout/styling" className="nav-link">Styling</NavLink>
      <NavLink to="/layout/state" className="nav-link">State</NavLink>
      <NavLink to="/layout/Master-React-Router" className="nav-link">Master-react-router</NavLink>
      <NavLink to="/layout/Image-handling" className="nav-link">Image-handling</NavLink>
      <NavLink to="/layout/forms" className="nav-link">Forms</NavLink>
      <NavLink to="/layout/Data-Selection" className="nav-link">Data-selection</NavLink>
      <NavLink to="/layout/data-manipuration" className="nav-link">Data-manipuration</NavLink>
      <NavLink to="/layout/DataDisplay" className="nav-link">Data-display</NavLink>
      <NavLink to="/layout/CRUD" className="nav-link">CRUD</NavLink>
      <NavLink to="/layout/BasicReactRouter" className="nav-link">Basic-React-router</NavLink>
      <NavLink to="/layout/cards" className="nav-link">cards</NavLink>
    </div>
    <Outlet />
    </div>
    
  )
}

export default Layout