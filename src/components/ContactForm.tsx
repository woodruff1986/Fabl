import { useId, useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../data/contact";

type ContactFormVariant = "v1" | "v2";

type ContactFormProps = {
  variant?: ContactFormVariant;
};

type Status = "idle" | "sending" | "ok" | "error";

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function ContactForm({ variant = "v1" }: ContactFormProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const rootClass =
    variant === "v2" ? "contact-form contact-form--v2" : "contact-form";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _replyto: email,
          _subject: subject || "Contact Fabl — site",
          message,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus("ok");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      // Fallback : ouvre le client mail du prospect
      const mailto = new URL(`mailto:${CONTACT_EMAIL}`);
      mailto.searchParams.set("subject", subject || "Contact Fabl — site");
      mailto.searchParams.set(
        "body",
        `De : ${email}\n\n${message}`,
      );
      window.location.href = mailto.toString();
      setStatus("error");
    }
  }

  return (
    <form className={rootClass} onSubmit={onSubmit} noValidate={false}>
      <div className="contact-form__field">
        <label htmlFor={`${id}-email`}>Mail contact</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="vous@studio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${id}-subject`}>Objet</label>
        <input
          id={`${id}-subject`}
          name="subject"
          type="text"
          required
          placeholder="Votre projet / besoin"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={6}
          placeholder="Parlez-nous de votre jeu, du contexte, des délais…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="contact-form__footer">
        <button
          className={
            variant === "v2"
              ? "v2-btn v2-btn--pulse"
              : "btn btn--fill"
          }
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>
        <p className="contact-form__hint" role="status" aria-live="polite">
          {status === "sending"
            ? "Envoi en cours…"
            : status === "ok"
              ? "Message envoyé — merci, nous vous répondrons rapidement."
              : status === "error"
                ? "Si rien ne s’ouvre, écrivez-nous directement à l’adresse ci-dessus."
                : `Réponse à ${CONTACT_EMAIL}`}
        </p>
      </div>
    </form>
  );
}
