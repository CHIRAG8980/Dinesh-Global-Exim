"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: "cotton-fabric",
      title: "Cotton Fabric",
      description: "High-grade Indian cotton fabric suitable for a wide range of textile applications. Available in various thread counts and weaves.",
      image: "/images/cotton_fabric.png"
    },
    {
      id: "readymade-garments",
      title: "Readymade Garments",
      description: "Premium quality readymade apparel for men, women, and children. Designed for global fashion trends with superior stitching.",
      image: "/images/readymade_garments.png"
    },
    {
      id: "agricultural-products",
      title: "Agricultural Products",
      description: "Fresh and organic agricultural produce including spices, grains, and pulses sourced directly from Indian farms.",
      image: "/images/agricultural_products.png"
    },
    {
      id: "metals",
      title: "Metals",
      description: "Industrial grade metals and alloys exported with strict compliance to international quality and safety standards.",
      image: "/images/metals.png"
    },
    {
      id: "mixed-products",
      title: "Mixed Products",
      description: "Customized export consignments featuring a mix of highly demanded Indian goods tailored to client specifications.",
      image: "/images/mixed_products.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] -z-10" />
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Our Product <span className="shiny-gold-text">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Explore our diverse range of premium export products sourced and manufactured with unparalleled quality standards.
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={cardVariants}
              className="glass-panel group overflow-hidden flex flex-col h-full"
            >
              {/* Product Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full h-1 shiny-gold-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                
                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Link 
                    href={`/contact?product=${product.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-5 py-2.5 rounded-xl hover:shiny-gold-bg dark:hover:bg-amber-500 hover:text-white transition-all shadow-md"
                  >
                    <MessageSquare size={16} />
                    Inquire Now
                  </Link>
                  <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
