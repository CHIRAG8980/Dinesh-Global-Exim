"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Package, Factory, Leaf, Link as LinkIcon, Box } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#020817] -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-amber-500/30 text-amber-700 dark:text-amber-300 text-sm font-medium">
                <Globe size={16} />
                <span>Premier Export House in India</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Connecting <span className="shiny-gold-text">Global Markets</span> with Premium Quality
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Dinesh Global Exim is your trusted partner for high-quality Cotton Fabric, Readymade Garments, Agricultural Products, and Metals. We deliver excellence across the globe.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 rounded-full shiny-gold-bg hover:opacity-90 text-white font-medium transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  Inquire Now
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/products" 
                  className="px-8 py-4 rounded-full glass hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-white font-medium transition-all flex items-center gap-2"
                >
                  View Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visuals */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="glass-panel p-2 aspect-square relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 z-20 group-hover:opacity-0 transition-opacity duration-500" />
                <Image 
                  src="/images/hero_logistics.png" 
                  alt="Global Export Logistics" 
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 glass-panel p-6 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-[#bf953f] dark:text-amber-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Certified</p>
                    <p className="text-slate-900 dark:text-white font-bold">100% Quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Trusted Indian Exporter", desc: "Years of excellence and reliability in the global export market." },
              { icon: Globe, title: "Worldwide Shipping", desc: "Efficient logistics ensuring timely delivery across all continents." },
              { icon: Package, title: "Quality Assurance", desc: "Rigorous quality checks to guarantee premium standards." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 glass rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-[#bf953f] dark:text-amber-400 mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Premium Products</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We source and export a diverse range of high-quality products to meet global demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Cotton Fabric", image: "/images/cotton_fabric.png" },
              { icon: Package, title: "Readymade Garments", image: "/images/readymade_garments.png" },
              { icon: Leaf, title: "Agricultural Products", image: "/images/agricultural_products.png" },
              { icon: LinkIcon, title: "Metals", image: "/images/metals.png" },
              { icon: Box, title: "Mixed Products", image: "/images/mixed_products.png" }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass-panel h-80 flex flex-col justify-end"
              >
                <div className="absolute inset-0">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
                      <product.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                  </div>
                  <Link href="/products" className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors text-sm font-medium mt-2">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets Slider (Marquee effect) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Export Markets</h2>
          <p className="text-slate-400">Serving clients across major global countries</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "UAE", code: "ae", desc: "Premium Fabrics & Metals" },
              { name: "Saudi Arabia", code: "sa", desc: "Garments & Agriculture" },
              { name: "United Kingdom", code: "gb", desc: "Textiles & Metals" },
              { name: "Germany", code: "de", desc: "Mixed Products" },
              { name: "United States", code: "us", desc: "Garments & Fabrics" },
              { name: "Australia", code: "au", desc: "Agricultural Products" },
              { name: "Malaysia", code: "my", desc: "Metals & Textiles" },
              { name: "South Africa", code: "za", desc: "Agriculture & Garments" }
            ].map((country, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 text-center hover:-translate-y-2 transition-all duration-300 border-white/10 bg-white/5"
              >
                <div className="flex justify-center mb-4 h-12">
                  <Image 
                    src={`https://flagcdn.com/${country.code}.svg`} 
                    alt={`${country.name} flag`} 
                    width={64}
                    height={42}
                    className="drop-shadow-md rounded-sm h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{country.name}</h3>
                <p className="text-slate-400 text-xs">{country.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50 dark:to-amber-900/10 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 relative z-10">
              Contact us today for business inquiries and experience the best export services in India.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full shiny-gold-bg hover:opacity-90 font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-yellow-500/20 relative z-10"
            >
              Contact Us Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
