"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-amber-50 dark:bg-[#020817] -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            About <span className="shiny-gold-text">Dinesh Global Exim</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            A premier export house based in India, dedicated to supplying high-quality products across the globe with integrity and excellence.
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-panel p-2 overflow-hidden relative group">
                <img 
                  src="/images/corporate_office.png" 
                  alt="Corporate Office" 
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Dinesh Global Exim was established with a singular focus: to bridge the gap between premium Indian manufacturing and global market demands. Over the years, we have built a robust supply chain network, allowing us to export everything from Cotton Fabric and Garments to Agricultural Products and Metals.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Located in Ahmedabad, Gujarat, we operate from the heart of India&apos;s commercial hub. Our strategic location empowers us to offer competitive pricing, timely delivery, and uncompromised quality assurance to our international clientele.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 text-amber-500/10">
                <Target size={150} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-[#bf953f] dark:text-amber-400 mb-6 relative z-10">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                To consistently provide world-class products to our global partners while maintaining the highest standards of ethics, quality, and customer satisfaction. We strive to create long-term value for all our stakeholders.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-10 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 text-yellow-500/10">
                <Lightbulb size={150} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center text-yellow-600 dark:text-[#fcf6ba] mb-6 relative z-10">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                To be universally recognized as the most trusted and innovative export house from India, pioneering sustainable trade practices and setting global benchmarks in the export-import industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Clients Trust Us</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our commitment to excellence forms the foundation of our long-standing relationships with international clients.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control processes." },
              { icon: Globe, title: "Global Reach", desc: "Extensive network across 4 continents." },
              { icon: Users, title: "Client Centric", desc: "Dedicated support and clear communication." },
              { icon: Award, title: "Industry Experts", desc: "Years of specialized export experience." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#bf953f] dark:text-amber-400 mb-4">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
