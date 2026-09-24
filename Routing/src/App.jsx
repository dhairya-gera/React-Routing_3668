import { Link, Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home.jsx'
import About from './assets/components/About.jsx'
import Profile from './assets/components/Profile.jsx'
import ProjectDetails from './assets/components/ProjectDetails.jsx'

function App() {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/profile'}>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={ <Home />} />

        <Route path='/profile/:projectId' element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App