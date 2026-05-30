<template>
  <section id="testimonials" class="py-24 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" v-scroll-reveal>
        <p class="section-subtitle">Testimoni</p>
        <h2 class="section-title">
          Apa Kata <span class="text-gradient">Klien Kami</span>
        </h2>
        <p class="section-description">
          Kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman mereka bersama NDA Property.
        </p>
      </div>

      <!-- Carousel -->
      <div v-scroll-reveal class="relative">
        <!-- Cards Container -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="flex-shrink-0 px-3"
              :style="{ width: `${100 / slidesPerView}%` }"
            >
              <div class="bg-white rounded-2xl p-8 shadow-lg shadow-primary-900/5 border border-gray-100 h-full flex flex-col hover:shadow-xl hover:border-primary-100 transition-all duration-300">
                <!-- Stars -->
                <div class="flex gap-1 mb-5">
                  <svg v-for="i in 5" :key="i" class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <!-- Quote -->
                <div class="flex-1 mb-6">
                  <svg class="w-8 h-8 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p class="text-gray-600 leading-relaxed italic">
                    "{{ testimonial.text }}"
                  </p>
                </div>

                <!-- Author -->
                <div class="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <p class="font-heading font-semibold text-gray-900">{{ testimonial.name }}</p>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-6 mt-10">
          <button
            @click="prevSlide"
            class="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <!-- Dots -->
          <div class="flex gap-2">
            <button
              v-for="i in totalSlides"
              :key="i"
              @click="goToSlide(i - 1)"
              :class="[
                'w-2.5 h-2.5 rounded-full transition-all duration-300',
                currentSlide === i - 1 ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-primary-300',
              ]"
            ></button>
          </div>

          <button
            @click="nextSlide"
            class="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <!-- Trust Badges -->
      <div v-scroll-reveal class="mt-20 text-center">
        <p class="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-8">Dipercaya oleh</p>
        <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40">
          <div v-for="badge in trustBadges" :key="badge" class="text-2xl font-heading font-bold text-gray-400 hover:text-primary-600 hover:opacity-100 transition-all duration-300">
            {{ badge }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const windowWidth = ref(1024)

const slidesPerView = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const totalSlides = computed(() => {
  return Math.ceil(testimonials.length / slidesPerView.value)
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let autoplayInterval = null

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
  startAutoplay()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoplay()
})

const testimonials = [
  {
    text: 'NDA Property membantu kami mewujudkan rumah impian dengan desain yang sempurna dan profesional. Tim mereka sangat responsif dan memahami setiap detail kebutuhan kami.',
    name: 'Budi Santoso',
    role: 'Pemilik Rumah, Surabaya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    text: 'Layanan renovasi mereka luar biasa! Hasil akhirnya melebihi ekspektasi kami. Harga pun sangat kompetitif dengan kualitas terbaik di kelasnya.',
    name: 'Siti Rahayu',
    role: 'Pengusaha Properti, Sidoarjo',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    text: 'Dari konsultasi hingga penyelesaian proyek, NDA Property memberikan service terbaik. Mereka benar-benar partner yang bisa diandalkan untuk investasi properti.',
    name: 'Ahmad Wijaya',
    role: 'Investor Properti, Surabaya',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    text: 'Tim arsitek mereka sangat kreatif dan inovatif. Desain interior yang mereka buat untuk apartemen saya benar-benar menakjubkan dan fungsional.',
    name: 'Rina Permata',
    role: 'Interior Client, Surabaya',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
  {
    text: 'Proses jual beli properti menjadi mudah dengan bantuan NDA Property. Mereka memandu setiap langkah dengan detail, transparan, dan profesional.',
    name: 'Hendra Kusuma',
    role: 'Pembeli Rumah, Gresik',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    text: 'Manajemen proyek mereka sangat terstruktur. Timeline jelas, kualitas terjaga, dan budget sesuai kesepakatan. Highly recommended!',
    name: 'Diana Lestari',
    role: 'Developer, Surabaya',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]

const trustBadges = ['PROPERTI.ID', 'RUMAH123', 'ARKITEK+', 'BANGUNAN.CO', 'INTERIOR.ID']
</script>
