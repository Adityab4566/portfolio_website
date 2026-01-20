export function Achievements() {
  return (
    <section className="py-20 border-t border-neutral-800" id="achievements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold" data-aos="fade-up">Achievements</h2>
        <div className="mt-8 relative">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-neutral-800"></div>
          <div className="space-y-8">
            <div className="relative pl-10 sm:pl-12" data-aos="fade-up">
              <div className="timeline-dot"></div>
              <div className="card">
                <div className="flex items-center gap-3"><span className="text-2xl">🏆</span><h3 className="font-semibold">1st Place – I Love Hackathon (India Blockchain Month 2024)</h3></div>
              </div>
            </div>
            <div className="relative pl-10 sm:pl-12" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-dot"></div>
              <div className="card">
                <div className="flex items-center gap-3"><span className="text-2xl">🥈</span><h3 className="font-semibold">2nd Place – Avalanche 24-Hour Hackathon</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}