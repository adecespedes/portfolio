import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center text-white px-4 relative z-10"
    >
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hola, soy <span className="text-blue-400">Alejandro</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Desarrollador de Software",
            2000,
            "Especialista en Frontend",
            2000,
            "Apasionado por la Web",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-blue-300 mb-6 block"
        />

        <p className="text-base md:text-lg mb-4 text-gray-300">
          Stack: Vue.js · React.js · React Native · PostgreSQL
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="/cv.pdf"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full text-white transition"
            download
          >
            Descargar CV
          </a>
          <a
            href="#proyectos"
            className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Ver Proyectos
          </a>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/adecespedes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/adecespedes90"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
