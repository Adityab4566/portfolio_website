export function About() {
  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 muted">I’m a B.Tech student in Cyber Security & Blockchain (2022–2026) with a passion for building secure systems and modern web applications. My work blends full stack development with robust security practices. I’ve actively participated in hackathons and won awards for innovative, real-world solutions.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 muted">
            <li className="flex items-center gap-2">B.Tech (Cyber Security & Blockchain)</li>
            <li className="flex items-center gap-2">Full Stack Web Developer</li>
            <li className="flex items-center gap-2">Security-focused engineering</li>
          </ul>
        </div>
        <div className="md:col-span-5" data-aos="zoom-in">
          <div className="glass p-6 rounded-xl">
            <p className="text-sm muted">Core Focus</p>
            <p className="mt-2">Web Development • Cyber Security • Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
}