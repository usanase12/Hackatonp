import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Styling from './pages/Styling'
import State from './pages/State'
import MasterReactRouter from './pages/MasterReactRouter'
import Layout from './pages/Layout'
import ImageHandling from './pages/ImageHandling'
import Forms from './pages/forms'
import DataSelection from './pages/DataSelection'
import DataManipulation from './pages/DataManipulation'
import DataDisplay from './pages/DataDisplay'
import CRUD from './pages/CRUD'
import BasicReactHook from './pages/BasicReactHook'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<Layout />}>
          <Route path="/layout/styling" element={<Styling />} />
          <Route path="/layout/state" element={<State />} />
          <Route path="/layout/master-react-router" element={<MasterReactRouter />} />
          <Route path="/layout/image-handling" element={<ImageHandling />} />
          <Route path="/layout/forms" element={<Forms />} />
          <Route path="/layout/data-selection" element={<DataSelection />} />
          <Route path="/layout/data-manipuration" element={<DataManipulation />} />
          <Route path="/layout/data-display" element={<DataDisplay />} />
          <Route path="/layout/CRUD" element={<CRUD />} />
          <Route path="/layout/basic-router-hook" element={<BasicReactHook />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App