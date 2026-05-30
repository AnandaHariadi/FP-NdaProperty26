<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Modern luxury property"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-primary-950/80 to-primary-900/60"></div>
    </div>

    <!-- Blueprint Grid Overlay -->
    <div class="absolute inset-0 z-[1] opacity-20 blueprint-bg"></div>

    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      <!-- Circle -->
      <div class="absolute top-20 right-[15%] w-72 h-72 border border-primary-400/20 rounded-full animate-float-slow"></div>
      <!-- Square -->
      <div class="absolute bottom-32 left-[10%] w-20 h-20 border border-primary-300/15 rotate-45 animate-float"></div>
      <!-- Triangle lines -->
      <svg class="absolute top-1/3 right-[8%] w-32 h-32 animate-float-delayed opacity-10" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="none" stroke="#60a5fa" stroke-width="1"/>
      </svg>
      <!-- Dots -->
      <div class="absolute bottom-20 right-[25%] w-2 h-2 bg-primary-400/30 rounded-full animate-bounce-gentle"></div>
      <div class="absolute top-40 left-[30%] w-3 h-3 bg-primary-300/20 rounded-full animate-float"></div>
      <!-- Blueprint lines -->
      <svg class="absolute bottom-[15%] left-[5%] w-48 opacity-10" viewBox="0 0 200 100">
        <line x1="0" y1="50" x2="200" y2="50" stroke="#93c5fd" stroke-width="1" stroke-dasharray="8,4"/>
        <line x1="40" y1="20" x2="40" y2="80" stroke="#93c5fd" stroke-width="1" stroke-dasharray="4,4"/>
        <line x1="120" y1="20" x2="120" y2="80" stroke="#93c5fd" stroke-width="1" stroke-dasharray="4,4"/>
        <circle cx="40" cy="50" r="4" fill="none" stroke="#93c5fd" stroke-width="1"/>
        <circle cx="120" cy="50" r="4" fill="none" stroke="#93c5fd" stroke-width="1"/>
      </svg>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-40">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
            <span class="text-primary-200 text-sm font-medium">Partner Terpercaya Properti Anda</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] animate-fade-in-up">
            Bangun Properti
            <span class="block mt-2">
              <span class="relative">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-blue-300">Impian</span>
                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6c40-4 80-4 120-2s56 2 76-2" stroke="#60a5fa" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
                </svg>
              </span>
            </span>
            <span class="block mt-2">Bersama NDA</span>
          </h1>

          <p class="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl animate-fade-in-up" style="animation-delay: 200ms;">
            Mitra terpercaya Anda dalam desain arsitektur, konstruksi, renovasi, dan pemasaran properti. Wujudkan hunian impian dengan sentuhan profesional.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style="animation-delay: 400ms;">
            <a href="#contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white rounded-2xl font-heading font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
              Konsultasi Sekarang
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#portfolio" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-2xl font-heading font-semibold hover:bg-white/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              Lihat Portfolio
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 animate-fade-in-up" style="animation-delay: 600ms;">
            <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
              <div class="flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-heading font-bold text-white counter-value">
                  {{ stat.displayed }}
                </span>
                <span class="text-primary-300 text-xl font-bold">{{ stat.suffix }}</span>
              </div>
              <p class="text-gray-400 text-sm mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: Architect SVG Character -->
        <div class="hidden lg:flex items-center justify-center relative">
          <div class="relative animate-architect-bob">
            <svg viewBox="0 0 400 480" class="w-full max-w-md" fill="none">
              <!-- Background circle glow -->
              <circle cx="200" cy="240" r="180" fill="url(#heroGlow)" opacity="0.15"/>

              <!-- Building illustration -->
              <rect x="100" y="180" width="200" height="220" rx="8" fill="#1e40af" opacity="0.3" stroke="#60a5fa" stroke-width="1.5"/>
              <!-- Windows -->
              <rect x="125" y="210" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <rect x="180" y="210" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <rect x="240" y="210" width="35" height="30" rx="4" fill="#60a5fa" opacity="0.5"/>
              <rect x="125" y="260" width="35" height="30" rx="4" fill="#60a5fa" opacity="0.5"/>
              <rect x="180" y="260" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <rect x="240" y="260" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <rect x="125" y="310" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <rect x="180" y="310" width="35" height="30" rx="4" fill="#60a5fa" opacity="0.5"/>
              <rect x="240" y="310" width="35" height="30" rx="4" fill="#93c5fd" opacity="0.4"/>
              <!-- Door -->
              <rect x="175" y="360" width="50" height="40" rx="4" fill="#3b82f6" opacity="0.5"/>
              <!-- Roof -->
              <polygon points="90,180 200,120 310,180" fill="#1e40af" opacity="0.4" stroke="#60a5fa" stroke-width="1.5"/>

              <!-- Architect character -->
              <!-- Head -->
              <circle cx="330" cy="300" r="22" fill="#fbbf24"/>
              <!-- Hard hat -->
              <path d="M308 295 C308 280 352 280 352 295" fill="#3b82f6"/>
              <rect x="305" y="293" width="50" height="6" rx="3" fill="#2563eb"/>
              <!-- Body -->
              <rect x="315" y="322" width="30" height="45" rx="5" fill="#1e40af"/>
              <!-- Arms -->
              <line x1="315" y1="335" x2="290" y2="355" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
              <line x1="345" y1="335" x2="365" y2="320" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
              <!-- Holding blueprint -->
              <rect x="355" y="300" width="30" height="22" rx="2" fill="white" opacity="0.8" stroke="#3b82f6" stroke-width="1"/>
              <line x1="360" y1="306" x2="380" y2="306" stroke="#93c5fd" stroke-width="1"/>
              <line x1="360" y1="311" x2="375" y2="311" stroke="#93c5fd" stroke-width="1"/>
              <line x1="360" y1="316" x2="378" y2="316" stroke="#93c5fd" stroke-width="1"/>
              <!-- Legs -->
              <line x1="325" y1="367" x2="320" y2="400" stroke="#1e3a8a" stroke-width="8" stroke-linecap="round"/>
              <line x1="340" y1="367" x2="345" y2="400" stroke="#1e3a8a" stroke-width="8" stroke-linecap="round"/>
              <!-- Shoes -->
              <ellipse cx="318" cy="403" rx="10" ry="5" fill="#1e3a8a"/>
              <ellipse cx="347" cy="403" rx="10" ry="5" fill="#1e3a8a"/>
              <!-- Face -->
              <circle cx="323" cy="298" r="2" fill="#1e3a8a"/>
              <circle cx="337" cy="298" r="2" fill="#1e3a8a"/>
              <path d="M325 306 Q330 312 335 306" stroke="#1e3a8a" stroke-width="1.5" fill="none" stroke-linecap="round"/>

              <!-- Decorative elements -->
              <circle cx="80" cy="150" r="5" fill="#60a5fa" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="150" r="3" fill="#93c5fd" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="60" cy="350" r="4" fill="#3b82f6" opacity="0.3">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.5s" repeatCount="indefinite"/>
              </circle>

              <!-- Ruler measuring line -->
              <line x1="280" y1="365" x2="320" y2="385" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

              <defs>
                <radialGradient id="heroGlow">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="1"/>
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
      <div class="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
        <div class="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

const stats = reactive([
  { value: 150, displayed: 0, suffix: '+', label: 'Proyek Selesai' },
  { value: 98, displayed: 0, suffix: '%', label: 'Klien Puas' },
  { value: 10, displayed: 0, suffix: '+', label: 'Tahun Pengalaman' },
])

const animateCounters = () => {
  stats.forEach((stat) => {
    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        stat.displayed = stat.value
        clearInterval(interval)
      } else {
        stat.displayed = Math.floor(current)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  setTimeout(animateCounters, 800)
})
</script>
