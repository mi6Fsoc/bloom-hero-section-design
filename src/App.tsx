/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Download, Wand2, BookOpen, ArrowRight, Twitter, Linkedin, Instagram, Menu, Plus } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen w-full lg:flex-row flex-col p-4 lg:p-6 lg:gap-8">

        {/* Left Panel */}
        <div className="relative w-full lg:w-[52%] flex flex-col liquid-glass-strong rounded-[2rem] lg:rounded-3xl p-6 lg:p-12 min-h-[calc(100vh-2rem)] lg:min-h-0 lg:h-[calc(100vh-3rem)] backdrop-blur-[50px]">
          
          {/* Nav */}
          <header className="flex justify-between items-center w-full z-20 relative">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="font-semibold text-2xl tracking-tighter text-white">bloom</span>
            </div>
            <button className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
              <span className="text-sm font-medium">Menu</span>
              <Menu className="w-4 h-4 text-white/80" />
            </button>
          </header>

          {/* Hero Center */}
          <main className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto w-full relative z-20 gap-8 h-full py-12">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md shadow-xl border border-white/20">
               <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-medium tracking-[-0.05em] leading-[1.1] text-white">
              Innovating the <em className="font-serif italic font-normal text-white/80">spirit</em> of bloom AI
            </h1>

            <button className="liquid-glass-strong rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform mt-4 group">
              <span className="font-medium text-base text-white">Explore Now</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <Download className="w-4 h-4 text-white" />
              </div>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="liquid-glass px-4 py-2 rounded-full text-xs font-medium text-white/80">Artistic Gallery</span>
              <span className="liquid-glass px-4 py-2 rounded-full text-xs font-medium text-white/80">AI Generation</span>
              <span className="liquid-glass px-4 py-2 rounded-full text-xs font-medium text-white/80">3D Structures</span>
            </div>
          </main>

          {/* Bottom Quote */}
          <footer className="w-full flex flex-col items-center text-center gap-4 z-20 relative pt-10">
            <span className="text-[10px] sm:text-xs tracking-widest text-white/50 uppercase font-bold">Visionary Design</span>
            <p className="text-lg lg:text-xl font-medium max-w-md mx-auto text-white">
              We <span className="font-serif italic font-normal text-white/80">imagined</span> a realm <span className="font-serif italic font-normal text-white/80">with no ending.</span>
            </p>
            <div className="flex items-center justify-center gap-4 w-full max-w-xs mt-2">
              <div className="h-[1px] flex-1 bg-white/20"></div>
              <span className="text-[10px] tracking-widest text-white/70 uppercase">Marcus Aurelio</span>
              <div className="h-[1px] flex-1 bg-white/20"></div>
            </div>
          </footer>
        </div>

        {/* Right Panel (Desktop Only) */}
        <div className="hidden lg:flex w-[48%] flex-col h-[calc(100vh-3rem)] justify-between">
          
          {/* Top Bar & Community Card */}
          <div className="w-full flex-col flex items-end gap-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-5">
                <a href="#" className="flex hover:scale-110 active:scale-95 transition-transform"><Twitter className="w-4 h-4 text-white hover:text-white/80 transition-colors" /></a>
                <a href="#" className="flex hover:scale-110 active:scale-95 transition-transform"><Linkedin className="w-4 h-4 text-white hover:text-white/80 transition-colors" /></a>
                <a href="#" className="flex hover:scale-110 active:scale-95 transition-transform"><Instagram className="w-4 h-4 text-white hover:text-white/80 transition-colors" /></a>
                <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
                <button className="flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white/80 hover:text-white transition-colors" />
                </button>
              </div>
              <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>

            <div className="liquid-glass w-56 rounded-[1.5rem] p-5 flex flex-col gap-3">
              <div className="flex items-center relative pl-2 h-8">
                <img src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar 1" className="w-8 h-8 rounded-full border border-white/20 object-cover absolute left-0 z-30" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar 2" className="w-8 h-8 rounded-full border border-white/20 object-cover absolute left-5 z-20" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar 3" className="w-8 h-8 rounded-full border border-white/20 object-cover absolute left-10 z-10" />
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-md text-[10px] font-medium absolute left-15 z-0">
                  +9
                </div>
              </div>
              <div className="mt-1">
                <h3 className="font-medium text-sm text-white">Enter our ecosystem</h3>
                <p className="text-[11px] text-white/50 mt-0.5">Join 24k+ creators worldwide</p>
              </div>
            </div>
          </div>

          {/* Bottom Feature Section */}
          <div className="w-full liquid-glass rounded-[2.5rem] p-4 flex flex-col gap-4 mt-auto border border-white/5">
            
            <div className="flex gap-4 w-full">
               <div className="liquid-glass flex-1 rounded-3xl p-5 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <Wand2 className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-medium mb-1 text-sm">Processing</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed">Generate structures via AI</p>
               </div>
               
               <div className="liquid-glass flex-1 rounded-3xl p-5 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-medium mb-1 text-sm">Growth Archive</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed">Access your historical designs</p>
               </div>
            </div>

            <div className="liquid-glass rounded-3xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1541814674665-684611599308?auto=format&fit=crop&q=80&w=200&h=150" alt="Plant Sculpting" className="w-24 h-16 rounded-2xl object-cover border border-white/10" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-sm text-white group-hover:text-white/90 transition-colors">Advanced Plant Sculpting</h3>
                  <p className="text-xs text-white/60">Learn to manipulate digital flora</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center hover:scale-110 active:scale-95 transition-transform flex-shrink-0 mr-1 group-hover:bg-white/10">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
