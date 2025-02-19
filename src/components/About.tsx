import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Innovation Hub",
      description: "A space where cutting-edge technology meets creative minds, fostering innovation and breakthrough solutions.",
      icon: "💡"
    },
    {
      title: "Networking",
      description: "Connect with like-minded individuals, industry leaders, and potential collaborators.",
      icon: "🤝"
    },
    {
      title: "Competition",
      description: "Showcase your skills and compete with the best talents in various technical challenges.",
      icon: "🏆"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white font-geist">About</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-geist-mono">
            A premier technical symposium that brings together innovative minds, cutting-edge technology, and endless possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white font-geist">{feature.title}</h3>
              <p className="text-gray-300 font-geist-mono">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}