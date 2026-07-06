import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section className="section-shell contact" id="contact">
      <Reveal className="contact-card">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2>Une idée à rendre visible ? Parlons-en simplement.</h2>
          <div className="contact-lines">
            <a href="mailto:contact@blanchardkouassi.com">
              <Mail size={18} /> contact@blanchardkouassi.com
            </a>
            <a href="tel:+2250000000000">
              <Phone size={18} /> +225 00 00 00 00 00
            </a>
            <span>
              <MapPin size={18} /> Abidjan, Côte d&apos;Ivoire
            </span>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <Instagram size={18} /> Instagram
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
