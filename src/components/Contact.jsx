import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctame
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-2 text-sm text-gray-300">Nombre</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Correo electrónico
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Mensaje</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
          >
            Enviar mensaje
          </button>

          {sent && (
            <p className="text-green-400 mt-4">
              Mensaje enviado correctamente ✅
            </p>
          )}
        </motion.form>

        {/* <div className="mt-10 text-center space-x-6 text-2xl">
          <a
            href="https://github.com/adecespedes"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/adecespedes90"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:adecespedes1990@gmail.com"
            className="text-gray-300 hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div> */}
      </div>
    </section>
  );
}
