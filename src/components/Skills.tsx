import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaServer, FaPlug, FaKey, FaGitAlt, FaGithub, FaAws, FaFigma, FaAndroid, FaUbuntu, FaShieldAlt, FaPaperPlane } from "react-icons/fa";
import { SiMongodb, SiMysql, SiEthereum } from "react-icons/si";

const skillItems = [
  { icon: FaJava, label: "Java" },
  { icon: FaPython, label: "Python" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3, label: "CSS3" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaReact, label: "React.js" },
  { icon: FaNode, label: "Node.js" },
  { icon: FaServer, label: "Express.js" },
  { icon: FaPlug, label: "REST APIs" },
  { icon: FaKey, label: "JWT" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: FaShieldAlt, label: "Vulnerability Scanning" },
  { icon: FaShieldAlt, label: "Ethical Hacking (Basics)" },
  { icon: SiEthereum, label: "Smart Contracts" },
  { icon: FaGitAlt, label: "Git" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaPaperPlane, label: "Postman" },
  { icon: FaAws, label: "AWS" },
  { icon: FaFigma, label: "Figma" },
  { icon: FaAndroid, label: "Android Studio" },
  { icon: FaUbuntu, label: "Ubuntu" },
  { icon: FaShieldAlt, label: "Kali Linux" },
];

export function Skills() {
  return (
    <section className="py-20 border-t border-neutral-800" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold" data-aos="fade-up">Skills</h2>
        <p className="mt-2 muted" data-aos="fade-up" data-aos-delay="100">Technologies and tools I use regularly.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card" data-aos="zoom-in">
            <div className="flex items-center gap-3">
              <span className="text-blue-500">›</span>
              <h3 className="font-semibold">Programming</h3>
            </div>
            <p className="mt-2 muted">Java, Python</p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="flex items-center gap-3"><span className="text-blue-500">›</span><h3 className="font-semibold">Frontend</h3></div>
            <p className="mt-2 muted">HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="flex items-center gap-3"><span className="text-blue-500">›</span><h3 className="font-semibold">Backend</h3></div>
            <p className="mt-2 muted">Node.js, Express.js, REST APIs, JWT</p>
          </div>
        </div>

        <h3 className="mt-12 text-xl font-semibold" data-aos="fade-up">Tech Stack</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
          {skillItems.map(({ icon: Icon, label }) => (
            <div key={label} className="skill-item">
              <Icon className="text-blue-500 text-xl" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}