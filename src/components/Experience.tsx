export function Experience() {
  return (
    <section className="py-20 border-t border-neutral-800" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold" data-aos="fade-up">Experience</h2>
        <p className="mt-2 muted" data-aos="fade-up" data-aos-delay="100">Internships and hands-on work.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card" data-aos="fade-up">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Cybersecurity & Ethical Hacking Intern</h3>
                <p className="text-sm muted">Innovate Intern • 6 Weeks</p>
              </div>
              <span className="badge">Security</span>
            </div>
            <p className="mt-3 muted">Developed ‘SentinelShield’, a proactive cyber defense framework. Gained hands-on experience in vulnerability analysis and ethical hacking techniques.</p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Web Development Intern</h3>
                <p className="text-sm muted">Innobyte Service • 1 Month</p>
              </div>
              <span className="badge">Web</span>
            </div>
            <p className="mt-3 muted">Worked on responsive web application development using front-end and back-end technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}