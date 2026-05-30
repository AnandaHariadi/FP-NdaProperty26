<template>
  <div class="min-h-screen bg-white font-body">
    <!-- ============ NAVBAR ============ -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass shadow-lg shadow-primary-900/5 py-2' : 'bg-transparent py-4',
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="#home" class="flex items-center gap-3 group">
            <div
              :class="[
                'w-11 h-11 rounded-xl flex items-center justify-center font-heading font-bold text-sm transition-all duration-300',
                scrolled
                  ? 'gradient-primary text-white shadow-md shadow-primary-500/20'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30',
              ]"
            >
              NDA
            </div>
            <div>
              <span
                :class="[
                  'text-lg font-heading font-bold transition-colors duration-300',
                  scrolled ? 'text-gray-900' : 'text-white',
                ]"
              >NDA Property</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="mobileMenuOpen = false"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-50/80',
                scrolled ? 'text-gray-600 hover:text-primary-700' : 'text-white/90 hover:text-white hover:bg-white/10',
              ]"
            >
              {{ link.label }}
            </a>
            <a
              href="#contact"
              class="ml-3 px-6 py-2.5 gradient-primary text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-[1.03]"
            >
              Konsultasi Gratis
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="[
              'lg:hidden p-2.5 rounded-xl transition-all duration-300',
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10',
            ]"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 -translate-y-4 scale-95"
        >
          <div v-if="mobileMenuOpen" class="lg:hidden mt-4 pb-4">
            <div class="bg-white rounded-2xl shadow-xl p-4 space-y-1 border border-gray-100">
              <a
                v-for="link in navLinks"
                :key="link.href"
                :href="link.href"
                @click="mobileMenuOpen = false"
                class="block px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
              >
                {{ link.label }}
              </a>
              <a
                href="#contact"
                @click="mobileMenuOpen = false"
                class="block mt-2 px-4 py-3 gradient-primary text-white rounded-xl font-semibold text-center"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- ============ MAIN CONTENT ============ -->
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MarketplaceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <!-- ============ FOOTER ============ -->
    <footer class="bg-gray-950 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Footer -->
        <div class="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center font-heading font-bold text-sm">
                NDA
              </div>
              <span class="text-xl font-heading font-bold">NDA Property</span>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              Partner terpercaya dalam mewujudkan properti impian Anda. Dari desain hingga pemasaran, kami siap membantu.
            </p>
            <!-- Social Media -->
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:gradient-primary hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
              >
                <span v-html="social.icon" class="w-5 h-5"></span>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-6">Navigasi</h3>
            <ul class="space-y-3">
              <li v-for="link in navLinks" :key="link.href">
                <a :href="link.href" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2">
                  <svg class="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-6">Layanan</h3>
            <ul class="space-y-3">
              <li v-for="service in footerServices" :key="service">
                <a href="#services" class="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2">
                  <svg class="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                  {{ service }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <span class="text-gray-400 text-sm leading-relaxed">Jl. Raya Darmo No. 45,<br/>Surabaya, Jawa Timur 60241</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span class="text-gray-400 text-sm">info@ndaproperty.com</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span class="text-gray-400 text-sm">Senin - Sabtu: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ new Date().getFullYear() }} NDA Property. Semua hak cipta dilindungi.
          </p>
          <div class="flex gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-primary-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" class="hover:text-primary-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- ============ FLOATING WHATSAPP BUTTON ============ -->
    <a
      href="https://wa.me/6285704104688?text=Halo%20NDA%20Property%2C%20saya%20tertarik%20untuk%20konsultasi%20properti"
      target="_blank"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-110 group"
    >
      <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import MarketplaceSection from './components/MarketplaceSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#services', label: 'Layanan' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#marketplace', label: 'Properti' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#contact', label: 'Kontak' },
]

const footerServices = [
  'Desain Rumah',
  'Interior Design',
  'Renovasi',
  'Manajemen Proyek',
  'Jual/Beli Properti',
  'Konsultasi Arsitektur',
]

const socials = [
  {
    name: 'Facebook',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    name: 'TikTok',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
