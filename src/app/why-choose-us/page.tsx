"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingDown, Network, Clock, Handshake, HeartHandshake } from "lucide-react";

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "High Quality Products",
      description: "We enforce stringent quality control measures at every stage of the supply chain, ensuring that only the finest products reach our international clients."
    },
    {
      icon: TrendingDown,
      title: "Competitive Pricing",
      description: "Our strategic location and strong relationships with manufacturers allow us to offer highly competitive pricing without compromising on quality."
    },
    {
      icon: Network,
      title: "Strong Supplier Network",
      description: "Leveraging years of industry experience, we have cultivated a robust and reliable network of trusted suppliers across India."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand that time is money. Our efficient logistics team ensures that your consignments are dispatched and delivered strictly on schedule."
    },
    {
      icon: Handshake,
      title: "Transparent Business Dealings",
      description: "Integrity is at our core. We maintain 100% transparency in all our transactions, documentation, and communications."
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      description: "Our dedicated support team works around the clock to address your requirements, ensuring a seamless and satisfying import experience."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Why Choose <span className="shiny-gold-text">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Discover the distinct advantages that make Dinesh Global Exim the preferred export partner for businesses worldwide.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-panel p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card Background Glow effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[#bf953f] dark:text-[#fcf6ba] mb-6 shadow-inner relative z-10">
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-panel p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-500/10 z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to experience the difference?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with us today and let us simplify your import process with our expert export services.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full shiny-gold-bg text-white font-medium hover:opacity-90 transition-colors shadow-lg shadow-amber-500/30"
            >
              Get in Touch <Handshake size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
