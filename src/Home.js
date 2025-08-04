import React from 'react';
import './App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>Zhu Bo</h1>
          <h2>Senior Software Developer at Visa</h2>
          <p className="tagline">Building secure, scalable distributed systems</p>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +65 8410 3301</p>
            <p><i className="fas fa-envelope"></i> zhubo970202@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Singapore</p>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <section className="about card">
          <h2>Professional Summary</h2>
          <p>Senior Software Developer with expertise in distributed systems, cloud platforms, and security-focused development. Currently enhancing Visa's infrastructure through innovative solutions in caching, messaging, and AI integration.</p>
        </section>

        <section className="experience card">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Visa Worldwide</h3>
            <p className="role">Senior Software Developer | Jan 2021 - Present</p>
            <ul>
              <li>Led Hazelcast upgrade with automated pipelines, enhancing system performance</li>
              <li>Designed Visa Cloud's shared caching platform, reducing latency</li>
              <li>Built Kafka as a Service (KaaS) platform with Angular frontend and multi-tenancy</li>
              <li>Architected Generative AI chatbot for Visa middleware products</li>
              <li>Oversaw SSDLC process for KaaS development</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Singapore University of Technology and Design</h3>
            <p className="role">Student Assistant | Jan 2020 - Aug 2020</p>
            <ul>
              <li>Developed EPIC network simulator using OMNeT++ for industrial infrastructure security</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Creative Technology Ltd</h3>
            <p className="role">iOS Development Intern | Mar 2019 - Aug 2019</p>
            <ul>
              <li>Developed commercial iOS applications and CI platform (Jenkins + Fastlane)</li>
            </ul>
          </div>
        </section>

        <section className="education card">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Singapore University of Technology and Design</h3>
            <p className="degree">Master of Computing (Infocomm Security) | Jan 2023 - May 2025</p>
            <p className="degree">B.Eng (Information System Technology and Design), Honors | May 2017 - Sep 2020</p>
            <p>Security Track and Computer Engineering Track</p>
          </div>
        </section>

        <section className="projects card">
          <h2>Academic Projects</h2>
          <div className="project-item">
            <h3>Interactive Smart Classroom</h3>
            <p className="date">Sep 2018 - Dec 2018</p>
            <ul>
              <li>Led team developing facial recognition attendance system with Android app</li>
              <li>Selected as featured project for school events</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>UROP: AI + IoT for Elderly Care</h3>
            <p className="date">May 2018 - Sep 2018</p>
            <ul>
              <li>Developed fall prevention system using Android and Arduino</li>
            </ul>
          </div>
        </section>

        <section className="skills card">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>Golang</li>
                <li>Swift</li>
                <li>JavaScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>ExpressJS</li>
                <li>Spring Boot</li>
                <li>Flask</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <ul>
                <li>Distributed Systems</li>
                <li>Microservices</li>
                <li>Kafka</li>
                <li>Hazelcast</li>
                <li>Docker/Kubernetes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact card">
          <h2>Contact</h2>
          <div className="contact-methods">
            <a href="mailto:zhubo970202@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i> zhubo970202@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/bo-zhu-83ab5817b/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i> linkedin.com/in/bo-zhu
            </a>
            <a href="https://github.com/bobozhu" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github"></i> github.com/bobozhu
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
