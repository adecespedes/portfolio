import { useState } from "react";
import { motion } from "framer-motion";
import ficha from "../assets/projects/ficha.png";
import movil from "../assets/projects/movil.jpg";
import shopping from "../assets/projects/shopping.png";
import buscador from "../assets/projects/buscador.png";
import users from "../assets/projects/users.png";
import { i } from "framer-motion/client";

const allProjects = [
  {
    title: "Fichas de costos",
    description: "Generador de fichas de costos en Excel.",
    tech: ["React", "Material-UI", "ExcelJS", "Electron"],
    link: "https://github.com/adecespedes/ficha-costo-excel.git",
    image: ficha,
  },
  {
    title: "TransferMóvil Contabilidad",
    description:
      "Aplicación móvil para la gestión contable a traves de mensajes de TransferMóvil.",
    tech: ["React Native", "Expo", "Expo SQLite"],
    link: "https://github.com/adecespedes/transfermovil-contabilidad.git",
    image: movil,
  },
  {
    title: "Shopping Cart",
    description:
      "Aplicación de carrito de compras con funcionalidades de agregar, eliminar y actualizar productos.",
    tech: ["React"],
    link: "https://github.com/adecespedes/shopping-cart.git",
    image: shopping,
  },
  {
    title: "Buscador de Películas",
    description:
      "Aplicación para buscar y filtrar películas utilizando una API.",
    tech: ["React"],
    link: "https://github.com/adecespedes/react-buscador-peliculas.git",
    image: buscador,
  },
  {
    title: "Registro de usuarios",
    description: "Gestión de usuarios con registro.",
    tech: ["Vue.js", "Axios"],
    link: "https://github.com/adecespedes/Users.git",
    image: users,
  },
  // Puedes seguir agregando más proyectos aquí...
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Ver proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              {showAll ? "Ver menos" : "Ver todos los proyectos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
