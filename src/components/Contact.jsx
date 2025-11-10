import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_x0eempg', 'template_qmwdgpd', form.current, 'kLFZcloQFidmlVFQb'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email envoyé avec succès !");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
  <Toaster />
  <div className="md:container px-5 py-14">
    <h2 className="title !text-white" data-aos="fade-down">
      {Contact.title}
    </h2>
    <h4 className="subtitle" data-aos="fade-down">
      {Contact.subtitle}
    </h4>
    <br />
    <div className="flex gap-10 md:flex-row flex-col">
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-up"
        className="flex-1 flex flex-col gap-5"
      >
        {/* Nom de l'expéditeur */}
        <input
          type="text"
          name="from_name"
          placeholder="Votre nom"
          required
          className="border border-slate-600 p-3 rounded"
        />

        {/* Email de l'expéditeur */}
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          className="border border-slate-600 p-3 rounded"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Votre message"
          className="border border-slate-600 p-3 rounded h-44"
          required
        />

        {/* Destinataire fixe */}
        <input type="hidden" name="to_email" value="semougrace@gmail.com" />

        <button className="btn self-start bg-white text-dark_primary">
          Envoyer
        </button>
      </form>

      {/* Section réseaux sociaux */}
      <div className="flex-1 flex flex-col gap-5">
        {Contact.social_media.map((content, i) => (
          <div
            key={i}
            data-aos="fade-down"
            data-aos-delay={i * 430}
            className="flex items-center gap-2"
          >
            <h4 className="text-white">{createElement(content.icon)}</h4>
            <a className="font-Poppins" href={content.link} target="_blank">
              {content.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
