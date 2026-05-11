"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required"),
  companyName: z.string().optional(),
  phone: z.string().min(7, "Valid phone number is required"),
  productRequirement: z.string().min(2, "Please specify your requirement"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Contact <span className="shiny-gold-text">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Get in touch with us for product inquiries, bulk orders, or partnership opportunities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex-shrink-0 flex items-center justify-center text-[#bf953f] dark:text-amber-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Address</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      501, Desk No. 243, Shapath 1, Bodakdev, SG Highway,<br />
                      Ahmedabad, Gujarat, India – 380054
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex-shrink-0 flex items-center justify-center text-[#bf953f] dark:text-amber-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Email</p>
                    <a href="mailto:dineshglobalexim@gmail.com" className="text-[#bf953f] dark:text-amber-400 text-sm mt-1 hover:underline">
                      dineshglobalexim@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex-shrink-0 flex items-center justify-center text-[#bf953f] dark:text-amber-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Phone</p>
                    <a href="tel:+919428417032" className="text-[#bf953f] dark:text-amber-400 text-sm mt-1 hover:underline">
                      +91 9428417032
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <a 
                  href="https://wa.me/919428417032" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-medium transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="glass-panel p-2 overflow-hidden h-64 relative group">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5583569428987!2d72.52445831535187!3d23.039989984944415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cb2c48d287%3A0xc6c7647895f57fcb!2sShapath%201!5e0!3m2!1sen!2sin!4v1655555555555!5m2!1sen!2sin" 
                className="w-full h-full border-0 rounded-lg filter grayscale opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send an Inquiry</h3>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-green-800 dark:text-green-300">Message Sent Successfully!</h4>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">Thank you for contacting us. We will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-start gap-3">
                  <AlertCircle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-red-800 dark:text-red-300">Something went wrong</h4>
                    <p className="text-sm text-red-700 dark:text-red-400 mt-1">Please try again later or contact us directly via email.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                    <input 
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                    <input 
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number *</label>
                    <input 
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all`}
                      placeholder="+1 234 567 890"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Country *</label>
                    <input 
                      {...register("country")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.country ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all`}
                      placeholder="United States"
                    />
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                    <input 
                      {...register("companyName")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Product Requirement *</label>
                    <select 
                      {...register("productRequirement")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.productRequirement ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all`}
                    >
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="">Select a product</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Cotton Fabric">Cotton Fabric</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Readymade Garments">Readymade Garments</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Agricultural Products">Agricultural Products</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Metals">Metals</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Mixed Products">Mixed Products</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white" value="Other">Other</option>
                    </select>
                    {errors.productRequirement && <p className="text-red-500 text-xs mt-1">{errors.productRequirement.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none`}
                    placeholder="Tell us about your requirements, quantities, and specific needs..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl shiny-gold-bg   text-white font-bold transition-all shadow-lg shadow-amber-500/25 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Inquiry...</span>
                  ) : (
                    <>
                      Send Inquiry <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
