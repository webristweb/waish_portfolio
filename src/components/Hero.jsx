import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-badge">AVAILABLE FOR WORK</div>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm<span className="name-highlight">Ankit</span>
          <span className="name-highlight">Nayak</span>
        </h1>
        <div className="hero-subtitle">
          <span className="typing-text">Full Stack Developer</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-description">
          Passionate B.Tech Computer Engineering graduate building modern web applications
          with Python, Django & cutting-edge frontend technologies.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Hire Me 🚀</a>
          <a href="#projects" className="btn btn-secondary">View Projects →</a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/Waish786" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/waish-alam-2a6288335?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="https://www.instagram.com/waish0035?igsh=MWV0YjZ3ZDRobmpucg==" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
          <a href="mailto:ankitanup9999@gmail.com">✉️ Email</a>
        </div>
        <div className="hero-tech">
          <span>🐍 Python</span>
          <span>⚡ Django</span>
        </div>
      </div>
      <div className="scroll-indicator">SCROLL ABOUT ME</div>
    </section>
  )
}

export default Hero
