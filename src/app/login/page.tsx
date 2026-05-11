"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, User } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/20 blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-8 sm:p-10 relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto shiny-gold-bg rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-amber-500/30">
              <User size={32} />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Welcome Back
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Sign in to your Dinesh Global Exim account
            </p>
          </div>

          <form className="space-y-5">
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

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all dark:text-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex justify-end mt-2">
                <Link href="/forgot-password" className="text-sm font-medium text-[#bf953f] dark:text-amber-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white shiny-gold-bg   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all shadow-amber-500/25"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?
            </p>
            <Link
              href="/register"
              className="mt-3 inline-flex items-center justify-center w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl shadow-sm bg-white/50 dark:bg-slate-800/50 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
