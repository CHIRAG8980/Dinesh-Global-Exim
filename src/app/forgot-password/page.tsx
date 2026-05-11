"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, KeyRound, Send } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/20 blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-8 sm:p-10 relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto shiny-gold-bg rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-yellow-500/30">
              <KeyRound size={32} />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Reset Password
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white shiny-gold-bg   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all shadow-amber-500/25"
            >
              Send Reset Link
              <Send size={16} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50 text-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#bf953f] dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
