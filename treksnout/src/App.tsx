import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { MissionBriefs } from './pages/MissionBriefs'
import { MissionTypes } from './pages/MissionTypes'
import { Contact } from './pages/Contact'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mission-briefs" element={<MissionBriefs />} />
          <Route path="/mission-types" element={<MissionTypes />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
