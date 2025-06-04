import { motion } from "framer-motion";
import perfilImg from "../assets/perfil.jpg"; // Asegúrate de colocar la imagen en /src/assets/

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen de perfil */}
        <motion.div
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={perfilImg}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Texto y tecnologías */}
        <div className="text-left flex-1">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre mí
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ingeniero de Software especializado en Desarrollo Web, con sólidas
            competencias en múltiples lenguajes de programación, administración
            de bases de datos y manejo de diversos sistemas operativos.
            Experiencia en el diseño e implementación de soluciones web
            escalables y eficientes, combinando habilidades técnicas con buenas
            prácticas de desarrollo y enfoque en resultados.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {["React", "Vue.js", "React Native", "PostgreSQL"].map((tech) => (
              <div
                key={tech}
                className="bg-gray-800 rounded-xl py-3 px-4 text-center hover:bg-blue-500 transition"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
