import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import NAV from './navbar.jsx'
import './index.css'
import Hero from './hero.jsx'
import About from './about.jsx'
import Footer from './footer.jsx'
import Gallery from './gallery.jsx'
import Contact from './contact.jsx'

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <NAV setPage={setPage} />
      <div className="flex-grow pt-16 w-full flex flex-col items-center">
        {page === "home" && <Hero />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "gallery" && <Gallery />}
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)