import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Mission‑Based Dog Adventures</h1>
          <p>Jacksonville’s only tactical K9 outings — GPS‑tracked, psychology‑driven, mission‑focused.</p>
          <Link to="/mission-briefs" className="cta-button">Deploy a Mission</Link>
        </div>
      </div>
      <section className="home-intro">
        <h2>About TrekSnout</h2>
        <p>TrekSnout provides mission‑based adventures for high‑drive dogs who need more than a typical walk. We train humans first, and dogs follow through calm surrender and sensory‑based learning. Our 100‑acre facility and mobile operations offer unique experiences tailored to working breeds.</p>

        <h2>Mission Categories</h2>
        <ul>
          <li><strong>High‑Drive Ops:</strong> Obstacle courses, deep‑water decompression, backpack runs, scent work.</li>
          <li><strong>Hunt &amp; Track:</strong> Scent games and tracking missions across varied terrain.</li>
          <li><strong>Recon Walks:</strong> Purposeful urban outings building focus and calm amidst distractions.</li>
          <li><strong>Gentle Patrols:</strong> Low‑impact explorations for seniors and low‑drive dogs needing enrichment.</li>
        </ul>

        <h2>Rescue &amp; Adoption Programs</h2>
        <ul>
          <li><strong>New Pack Mission:</strong> 10 free missions for newly adopted rescue dogs.</li>
          <li><strong>Foster Support:</strong> One free mission per week for fosters.</li>
          <li><strong>Guardians Missions:</strong> Behavioral decompression and training support for long‑term fosters.</li>
        </ul>

        <p>We serve Jacksonville, Ponte Vedra, St.&nbsp;Johns, and surrounding areas. Ready to give your dog a mission? <Link to="/contact">Contact us</Link> to schedule your assessment.</p>
      </section>
    </>
  )
}

