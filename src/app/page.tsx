"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, Wand2, Zap, ArrowRight, Brain, Palette, Film } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/20 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VeoFlow Prompts
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How it Works</a>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Prompts
              </span>
              <br />
              for Google Veo 3 & Flow
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate perfect video prompts with AI assistance. Create stunning videos with optimized prompts for Google&apos;s latest video generation models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to create amazing video prompts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">AI-Powered Generation</h3>
              <p className="text-gray-300">
                Advanced AI understands your vision and generates optimized prompts for Veo 3 and Flow models
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Palette className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Style Templates</h3>
              <p className="text-gray-300">
                Pre-built templates for various video styles - cinematic, animated, documentary, and more
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Real-time Preview</h3>
              <p className="text-gray-300">
                See how your prompts will be interpreted with our real-time preview system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Film className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Scene Composition</h3>
              <p className="text-gray-300">
                Build complex scenes with multiple elements, camera movements, and transitions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Wand2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Prompt Optimization</h3>
              <p className="text-gray-300">
                Automatically optimize your prompts for better results with Veo 3 and Flow
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <Video className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Export & Share</h3>
              <p className="text-gray-300">
                Export your prompts in various formats and share them with your team
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Create amazing video prompts in three simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3">Describe Your Vision</h3>
              <p className="text-gray-300">
                Tell our AI what kind of video you want to create using natural language
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI Generates Prompts</h3>
              <p className="text-gray-300">
                Our AI creates optimized prompts specifically for Veo 3 and Flow models
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3">Generate Your Video</h3>
              <p className="text-gray-300">
                Use the generated prompts in Google Veo 3 or Flow to create stunning videos
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using AI to generate perfect video prompts
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center mx-auto">
              Get Started Free
              <Sparkles className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 VeoFlow Prompts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}