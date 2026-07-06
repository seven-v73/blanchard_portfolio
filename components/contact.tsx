import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section className="section-shell contact" id="contact">
      <Reveal className="contact-card">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2>Une idée à rendre visible ? Parlons-en simplement.</h2>
          <div className="contact-lines">
            <a href="mailto:bkouassi735@gmail.com">
              <Mail size={18} /> bkouassi735@gmail.com
            </a>
            <a href="tel:+2250758451727">
              <Phone size={18} /> +225 07 58 45 17 27
            </a>
            <span>
              <MapPin size={18} /> Abidjan, Côte d&apos;Ivoire
            </span>
            <a
              href="https://www.facebook.com/amonzamejudeblanchard.kouassi.73"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a href="https://www.linkedin.com/in/blanchardkouassi/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Nom
            <input type="text" name="name" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="votre@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Parlez-moi de votre projet" rows={5} />
          </label>
          <button className="primary-button" type="submit">
            Envoyer le message
          </button>
        </form>
      </Reveal>
    </section>
  );
}
