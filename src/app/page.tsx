"use client";
import { useState, useEffect } from "react";

const icons = {
  github: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5c4037" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
  ),
  linkedin: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5c4037" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
  ),
  email: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5c4037" d="M12 13.065 2 6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5l-10 6.565Zm10-8.065H2a2 2 0 0 0-2 2v.217l12 7.882 12-7.882V7a2 2 0 0 0-2-2Z"/></svg>
  ),
  frog: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#4ade80"/>
      <circle cx="9" cy="10" r="1.5" fill="#166534"/>
      <circle cx="15" cy="10" r="1.5" fill="#166534"/>
      <circle cx="9" cy="10" r="0.5" fill="white"/>
      <circle cx="15" cy="10" r="0.5" fill="white"/>
      <ellipse cx="12" cy="14" rx="2" ry="1" fill="#166534"/>
      <ellipse cx="12" cy="13" rx="1.5" ry="0.5" fill="#dcfce7"/>
      <path d="M8 8 Q12 6 16 8" stroke="#166534" strokeWidth="1" fill="none"/>
      <path d="M7 16 Q12 18 17 16" stroke="#166534" strokeWidth="1" fill="none"/>
    </svg>
  ),
  cat: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#fbbf24"/>
      <ellipse cx="12" cy="14" rx="3" ry="2" fill="#92400e"/>
      <circle cx="10" cy="11" r="1" fill="#92400e"/>
      <circle cx="14" cy="11" r="1" fill="#92400e"/>
      <circle cx="10" cy="11" r="0.3" fill="white"/>
      <circle cx="14" cy="11" r="0.3" fill="white"/>
      <ellipse cx="12" cy="13" rx="1" ry="0.5" fill="#92400e"/>
      <path d="M8 8 L10 6 L12 8" fill="#92400e"/>
      <path d="M16 8 L14 6 L12 8" fill="#92400e"/>
      <path d="M9 9 Q12 7 15 9" stroke="#92400e" strokeWidth="0.5" fill="none"/>
      <path d="M9 16 Q12 18 15 16" stroke="#92400e" strokeWidth="0.5" fill="none"/>
    </svg>
  ),
  dog: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#f59e0b"/>
      <ellipse cx="12" cy="14" rx="3" ry="2" fill="#78350f"/>
      <circle cx="10" cy="11" r="1" fill="#78350f"/>
      <circle cx="14" cy="11" r="1" fill="#78350f"/>
      <circle cx="10" cy="11" r="0.3" fill="white"/>
      <circle cx="14" cy="11" r="0.3" fill="white"/>
      <ellipse cx="12" cy="13" rx="1" ry="0.5" fill="#78350f"/>
      <ellipse cx="8" cy="9" rx="1.5" ry="2" fill="#f59e0b"/>
      <ellipse cx="16" cy="9" rx="1.5" ry="2" fill="#f59e0b"/>
      <path d="M9 9 Q12 7 15 9" stroke="#78350f" strokeWidth="0.5" fill="none"/>
      <path d="M9 16 Q12 18 15 16" stroke="#78350f" strokeWidth="0.5" fill="none"/>
    </svg>
  ),
  coffee: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="8" width="12" height="8" rx="2" fill="#8b5a2b"/>
      <rect x="7" y="9" width="10" height="6" rx="1" fill="#d2691e"/>
      <ellipse cx="12" cy="12" rx="4" ry="2" fill="#654321"/>
      <ellipse cx="12" cy="11" rx="3" ry="1" fill="#8b4513"/>
      <rect x="8" y="16" width="8" height="2" fill="#8b5a2b"/>
      <rect x="9" y="17" width="6" height="1" fill="#654321"/>
      <path d="M6 10 Q4 8 6 6" stroke="#8b5a2b" strokeWidth="1" fill="none"/>
      <path d="M18 10 Q20 8 18 6" stroke="#8b5a2b" strokeWidth="1" fill="none"/>
    </svg>
  ),
};

const socialLinks = [
  { href: "mailto:abbyarce0118@gmail.com", label: "Email", icon: icons.email },
  { href: "https://github.com/abbya18", label: "GitHub", icon: icons.github },
  { href: "https://www.linkedin.com/in/abby-arce/", label: "LinkedIn", icon: icons.linkedin },
];

const sections = [
  { id: "about", name: "About Me", icon: icons.coffee },
  { id: "experience", name: "Experience", icon: icons.dog },
  { id: "projects", name: "Projects", icon: icons.frog },
  { id: "skills", name: "Skills", icon: icons.cat },
  { id: "contact", name: "Contact", icon: icons.coffee },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "about");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--accent-green)]/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 animate-fadeInUp">
              <div className="animate-float">{icons.frog}</div>
              <span className="text-xl font-bold">Abby Arce</span>
              <div className="animate-float" style={{ animationDelay: "1s" }}>{icons.cat}</div>
            </div>
            
            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    activeSection === section.id 
                      ? "tab-active shadow-lg" 
                      : "hover:bg-[var(--accent-green)]/30"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-[var(--accent-green)]/30 transition-all">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-16 flex flex-col items-center gap-4 animate-fadeInUp">
        <h1 className="text-5xl sm:text-6xl font-bold flex items-center gap-4 text-center">
          <a 
            href="https://www.pranav-nair.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="animate-bounce hover:scale-110 transition-all duration-300 cursor-pointer"
            title="🐸 Easter egg!"
          >
            {icons.frog}
          </a>
          Hello! I&apos;m Abby Arce
          <div className="animate-bounce" style={{ animationDelay: "0.5s" }}>{icons.cat}</div>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium flex items-center gap-4 text-center">
          <div className="animate-float">{icons.dog}</div>
          Software Engineer Intern at Fidelity Investments
          <div className="animate-float" style={{ animationDelay: "1s" }}>{icons.coffee}</div>
        </h2>
        <div className="flex gap-6 mt-4">
          {socialLinks.map((link, index) => (
            <a 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.label} 
              className="hover:scale-110 transition-all duration-300 hover:rotate-12"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16 space-y-16">
        {/* About Me */}
        <section id="about" className="scroll-mt-20">
          <div className="rounded-2xl bg-[var(--accent-green)]/60 p-8 shadow-lg hover-lift transition-all duration-500 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-float">{icons.coffee}</div>
              <h3 className="text-3xl font-bold">About Me</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Hi! I&apos;m Abby, a Software Engineering student at The University of Texas at Dallas (expected graduation Dec 2025). 
              I love building tools that make life easier, and I&apos;m passionate about learning new technologies. 
              Fun fact: I have heterochromia (one eye is a different color from the other)! Pronouns: she/her.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <div className="rounded-2xl bg-[var(--accent-yellow)]/60 p-8 shadow-lg hover-lift transition-all duration-500 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-float">{icons.dog}</div>
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span><strong>Incoming Software Engineer Intern</strong> @ Fidelity Investments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span><strong>Technology Officer</strong> @ SHPE UTD</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <span><strong>Software Engineering Student</strong> @ The University of Texas at Dallas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Project Planning & Management, 
                  Artificial Intelligence, Database Systems, Software Engineering, Requirements Engineering, Computer Networks
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <div className="rounded-2xl bg-[var(--accent-blue)]/60 p-8 shadow-lg hover-lift transition-all duration-500 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-float">{icons.frog}</div>
              <h3 className="text-3xl font-bold">Projects</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/20 rounded-xl p-6 hover-lift transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">🐍 UTD e-Learning Assignment Scraper</h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Tech:</strong> Python, Node.js, Selenium, JavaScript, BeautifulSoup</p>
                <p>Automated assignment retrieval, Discord bot integration, 35% time saved for users.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 hover-lift transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">🎮 MIPS Tic-Tac-Toe Game</h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Tech:</strong> MIPS</p>
                <p>Simulated user vs. computer gameplay, led a team of 5, optimized memory and response time.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 hover-lift transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">💻 Unix Computer System</h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Tech:</strong> Java, Unix</p>
                <p>Simulated CPU/memory communication, concurrent process execution, reduced data transmission delays.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 hover-lift transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">💾 Disk Allocation Simulator</h4>
                <p className="text-sm text-gray-700 mb-2"><strong>Tech:</strong> C++</p>
                <p>Simulated disk allocation methods, supported up to 5TB disks, accurate read/write simulation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <div className="rounded-2xl bg-[var(--accent-pink)]/60 p-8 shadow-lg hover-lift transition-all duration-500 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-float">{icons.cat}</div>
              <h3 className="text-3xl font-bold">Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">💻 Languages</h4>
                  <p>C, C++, Java, Python, JavaScript, SQL, MIPS, Prolog</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">🗄️ Database</h4>
                  <p>MySQL, PostgreSQL, MongoDB</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">🤖 AI/ML</h4>
                  <p>Matplotlib, Pandas, scikit-learn</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">⚡ Frameworks</h4>
                  <p>Node.js, React.js</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">🛠️ Tools</h4>
                  <p>VS Code, Git, GitHub, Agile Methodology</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 hover-lift transition-all duration-300">
                  <h4 className="font-bold mb-2">🌟 Soft Skills</h4>
                  <p>Leadership, Teamwork, Problem-Solving, Self-driven, Presentation, Adaptability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <div className="rounded-2xl bg-[var(--accent-coffee)]/60 p-8 shadow-lg hover-lift transition-all duration-500 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-float">{icons.coffee}</div>
              <h3 className="text-3xl font-bold">Contact</h3>
            </div>
            <div className="flex gap-6 mb-8 justify-center">
              {socialLinks.map((link, index) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label} 
                  className="hover:scale-110 transition-all duration-300 hover:rotate-12"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            {/* Formspree Contact Form */}
            <form action="https://formspree.io/f/movwkbjg" method="POST" className="max-w-md mx-auto space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full rounded-lg p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition-all duration-300 relative z-10" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="w-full rounded-lg p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition-all duration-300 relative z-10" 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                rows={4}
                className="w-full rounded-lg p-3 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition-all duration-300 resize-none relative z-10" 
              />
              <button 
                type="submit" 
                className="w-full bg-[var(--accent-green)] text-[var(--foreground)] rounded-lg px-6 py-3 font-bold hover:bg-[var(--accent-blue)] transition-all duration-300 hover:scale-105 shadow-lg relative z-10"
              >
                Send Message ✨
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
