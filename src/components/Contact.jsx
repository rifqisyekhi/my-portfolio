import { profile } from "../data/profile";

export default function Contact() {
  // Belum ada backend, jadi pesan dikirim lewat aplikasi email pengunjung
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = `Portfolio Contact from ${form.get("name")}`;
    const body = `${form.get("message")}\n\n---\nName: ${form.get("name")}\nEmail: ${form.get("email")}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-container" id="contact">
      <div className="section-title-pink neo-box">Get In Touch</div>
      <div className="contact-grid">
        <div className="contact-info-column">
          <div className="info-card neo-box">
            <p className="intro-text">Let's work together!</p>
            <p className="desc-text">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-cyan">✉</div>
                <a href={`mailto:${profile.email}`} className="contact-link" style={{ wordBreak: "break-all" }}>
                  {profile.email}
                </a>
              </div>
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-yellow">📞</div>
                <a href={`tel:${profile.phone}`} className="contact-link">{profile.phone}</a>
              </div>
              <div className="contact-item">
                <div className="icon-box-small neo-box bg-pink">📍</div>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
          <div className="availability-banner neo-box">
            💡 <strong>Currently available</strong> for freelance work and full-time opportunities!
          </div>
        </div>

        <div className="contact-form-card neo-box">
          <form className="form-elements" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" className="neo-input" required />
            </div>

            <div className="input-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="your.email@example.com" className="neo-input" required />
            </div>

            <div className="input-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                className="neo-input textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit neo-box">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
