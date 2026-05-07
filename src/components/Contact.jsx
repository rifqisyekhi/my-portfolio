// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      {/* Judul Section */}
      <div className="section-title-pink neo-box">Get In Touch</div>

      {/* Grid 2 Kolom */}
      <div className="contact-grid">
        
        {/* --- KOLOM KIRI: Informasi --- */}
        <div className="contact-info-column">
          <div className="info-card neo-box">
            <p className="intro-text">Let's work together!</p>
            <p className="desc-text">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            {/* Baris Daftar Kontak */}
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-cyan">✉</div>
                <span>rifqisyekhi@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-yellow">📞</div>
                <span>+6289656460216</span>
              </div>
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-pink">📍</div>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Banner Ketersediaan */}
          <div className="availability-banner neo-box">
            💡 <strong>Currently available</strong> for freelance work and full-time opportunities!
          </div>
        </div>

        {/* --- KOLOM KANAN: Formulir --- */}
        <div className="contact-form-card neo-box">
          <form className="form-elements">
            
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" className="neo-input" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="your.email@example.com" className="neo-input" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." className="neo-input textarea" rows="4"></textarea>
            </div>

            <button type="submit" className="btn-submit neo-box">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}