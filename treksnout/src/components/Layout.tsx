import { NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

export function Layout() {
  useEffect(() => {
    document.title = 'TrekSnout | Mission‑Based Dog Adventures'
  }, [])
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header>
        <nav>
          <div className="logo">TrekSnout</div>
          <ul className="nav-links" role="menubar" aria-label="Primary">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/mission-briefs" className={({ isActive }) => isActive ? 'active-link' : undefined}>Mission Briefs</NavLink>
            </li>
            <li>
              <NavLink to="/mission-types" className={({ isActive }) => isActive ? 'active-link' : undefined}>Mission Types</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : undefined}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div style={{ height: 60 }} />
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer>
        <p>© 2025 TrekSnout. All rights reserved.</p>
      </footer>
    </>
  )
}

