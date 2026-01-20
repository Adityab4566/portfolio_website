export function Projects() {
  const badges = (items: string[]) => (
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      {items.map((b) => (
        <span key={b} className="badge">{b}</span>
      ))}
    </div>
  );
  return (
    <section className="py-20 border-t border-neutral-800" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold" data-aos="fade-up">Projects</h2>
        <p className="mt-2 muted" data-aos="fade-up" data-aos-delay="100">Selected work with tech stacks and links.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="card" data-aos="fade-up">
            <h3 className="font-semibold">Hall Mate – Hall Booking Management System</h3>
            <p className="mt-2 muted">Platform for managing hall bookings with authentication, role-based access, and calendar integration.</p>
            {badges(["React", "Node", "Express", "MongoDB"])}
            <div className="mt-4 flex gap-3">
              <a className="btn btn-secondary" href="https://github.com/Adityab4566/Hall-Mate" target="_blank" rel="noopener">GitHub</a>
            </div>
          </article>

          <article className="card" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold">NFT Marketplace (Solidity-based)</h3>
            <p className="mt-2 muted">Smart contract-driven marketplace supporting minting, listing, and purchasing NFTs with secure transaction flow.</p>
            {badges(["Solidity", "Hardhat", "React", "IPFS"])}
            <div className="mt-4 flex gap-3">
              <a className="btn btn-secondary" href="https://github.com/Adityab4566/NFT-MARKETPLACE" target="_blank" rel="noopener">GitHub</a>
            </div>
          </article>

          <article className="card" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold">Exam Crafter – AI Question Paper Generator</h3>
            <p className="mt-2 muted">Automates generation of balanced question papers using topic weights, difficulty levels, and blueprint rules.</p>
            {badges(["React", "Node", "Express", "MongoDB"])}
            <div className="mt-4 flex gap-3">
              <a className="btn btn-secondary" href="https://github.com/Adityab4566/Exam-Crafter" target="_blank" rel="noopener">GitHub</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}