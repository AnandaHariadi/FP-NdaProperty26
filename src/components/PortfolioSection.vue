<template>
  <section id="portfolio" class="py-24 bg-gradient-to-b from-white to-primary-50/30 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" v-scroll-reveal>
        <p class="section-subtitle">Portfolio</p>
        <h2 class="section-title">
          Karya Terbaik <span class="text-gradient">Kami</span>
        </h2>
        <p class="section-description">
          Lihat koleksi proyek-proyek terbaik yang telah kami selesaikan dengan standar kualitas tertinggi.
        </p>
      </div>

      <!-- Category Filter -->
      <div v-scroll-reveal class="flex flex-wrap gap-3 justify-center mb-14">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300',
            activeCategory === cat
              ? 'gradient-primary text-white shadow-lg shadow-primary-500/20'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <transition-group name="portfolio">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            v-scroll-reveal
            :style="{ transitionDelay: `${index * 80}ms` }"
            class="zoom-container rounded-2xl overflow-hidden shadow-lg shadow-primary-900/5 group"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-72 object-cover"
            />
            <!-- Hover Overlay -->
            <div class="overlay flex-col justify-end !bg-gradient-to-t !from-primary-950/90 !via-primary-900/40 !to-transparent">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-3">
                  {{ project.category }}
                </span>
                <h3 class="text-xl font-heading font-bold text-white mb-1">{{ project.title }}</h3>
                <p class="text-blue-200 text-sm flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {{ project.location }}
                </p>
                <div class="flex items-center gap-3 mt-3">
                  <span class="text-white/80 text-xs">{{ project.year }}</span>
                  <span class="text-white/40">•</span>
                  <span class="text-white/80 text-xs">{{ project.area }}</span>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Google Maps Section -->
      <div v-scroll-reveal class="mb-12">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold text-gray-900 mb-2">Lokasi Proyek Kami</h3>
          <p class="text-gray-500">Tersebar di berbagai wilayah strategis di Surabaya dan sekitarnya</p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-xl shadow-primary-900/10 border border-gray-100">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            style="border: 0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.17648492294!2d112.6740217!3d-7.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- View All -->
      <div v-scroll-reveal class="text-center">
        <button class="btn-secondary inline-flex items-center gap-2">
          Lihat Semua Portfolio
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Semua')
const categories = ['Semua', 'Rumah', 'Ruko', 'Apartemen', 'Kantor', 'Tanah']

const projects = [
  {
    id: 1,
    title: 'Rumah Minimalis Modern',
    category: 'Rumah',
    location: 'Surabaya Barat',
    year: '2024',
    area: '180 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Ruko 3 Lantai Premium',
    category: 'Ruko',
    location: 'Surabaya Pusat',
    year: '2024',
    area: '240 m²',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Apartemen Bertaraf Internasional',
    category: 'Apartemen',
    location: 'Surabaya Timur',
    year: '2023',
    area: '95 m²',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Villa Tropis Mewah',
    category: 'Rumah',
    location: 'Surabaya Selatan',
    year: '2024',
    area: '350 m²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Kantor Modern Co-Working',
    category: 'Kantor',
    location: 'Surabaya Pusat',
    year: '2023',
    area: '500 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Kavling Tanah Premium',
    category: 'Tanah',
    location: 'Sidoarjo',
    year: '2023',
    area: '1000 m²',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Rumah Kontemporer Elegan',
    category: 'Rumah',
    location: 'Surabaya Utara',
    year: '2024',
    area: '220 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Ruko Strategis Komersial',
    category: 'Ruko',
    location: 'Gresik',
    year: '2023',
    area: '200 m²',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Apartemen Nyaman Terjangkau',
    category: 'Apartemen',
    location: 'Surabaya Barat',
    year: '2024',
    area: '72 m²',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Semua') return projects
  return projects.filter((p) => p.category === activeCategory.value)
})
</script>

<style scoped>
.portfolio-enter-active {
  transition: all 0.5s ease;
}
.portfolio-leave-active {
  transition: all 0.3s ease;
}
.portfolio-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.portfolio-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
