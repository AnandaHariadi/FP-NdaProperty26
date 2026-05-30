<template>
  <section id="marketplace" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" v-scroll-reveal>
        <p class="section-subtitle">Marketplace Properti</p>
        <h2 class="section-title">
          Temukan Properti <span class="text-gradient">Tersedia</span>
        </h2>
        <p class="section-description">
          Jelajahi pilihan properti terbaik dari ribuan listing berkualitas. Temukan hunian impian Anda di sini.
        </p>
      </div>

      <!-- Search & Filters -->
      <div v-scroll-reveal class="mb-12 bg-primary-50/50 rounded-2xl p-6 md:p-8 border border-primary-100">
        <!-- Search Bar -->
        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <div class="flex-1 relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari properti berdasarkan nama atau lokasi..."
              class="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-400 transition-colors"
            />
          </div>
          <button class="px-8 py-3.5 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            Cari
          </button>
        </div>

        <!-- Filter Options -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Lokasi</label>
            <select v-model="filters.location" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-400 transition-colors appearance-none">
              <option>Semua Lokasi</option>
              <option>Surabaya Pusat</option>
              <option>Surabaya Barat</option>
              <option>Surabaya Timur</option>
              <option>Surabaya Selatan</option>
              <option>Surabaya Utara</option>
              <option>Sidoarjo</option>
              <option>Gresik</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tipe</label>
            <select v-model="filters.type" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-400 transition-colors appearance-none">
              <option>Semua Tipe</option>
              <option>Rumah</option>
              <option>Apartemen</option>
              <option>Ruko</option>
              <option>Tanah</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Harga</label>
            <select v-model="filters.priceRange" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-400 transition-colors appearance-none">
              <option>Semua Harga</option>
              <option>Di bawah 500 Jt</option>
              <option>500 Jt - 1 M</option>
              <option>1 M - 3 M</option>
              <option>Di atas 3 M</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Urutkan</label>
            <select v-model="filters.sort" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-400 transition-colors appearance-none">
              <option>Terbaru</option>
              <option>Terpopuler</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="flex items-center justify-between mb-8" v-scroll-reveal>
        <p class="text-gray-500 text-sm">
          Menampilkan <span class="font-semibold text-gray-900">{{ displayedProperties.length }}</span> properti
        </p>
        <div class="flex gap-2">
          <button @click="viewMode = 'grid'" :class="['p-2 rounded-lg transition', viewMode === 'grid' ? 'bg-primary-100 text-primary-700' : 'text-gray-400 hover:text-gray-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </button>
          <button @click="viewMode = 'list'" :class="['p-2 rounded-lg transition', viewMode === 'list' ? 'bg-primary-100 text-primary-700' : 'text-gray-400 hover:text-gray-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <!-- Properties Grid -->
      <div :class="viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'">
        <div
          v-for="(property, index) in displayedProperties"
          :key="property.id"
          v-scroll-reveal
          :style="{ transitionDelay: `${index * 80}ms` }"
          @click="openDetail(property)"
          :class="[
            'property-card group cursor-pointer',
            viewMode === 'list' ? 'flex flex-col md:flex-row overflow-hidden' : '',
          ]"
        >
          <!-- Image -->
          <div :class="['relative overflow-hidden', viewMode === 'list' ? 'md:w-80 h-56 md:h-auto flex-shrink-0' : 'h-56']">
            <img
              :src="property.image"
              :alt="property.title"
              class="w-full h-full object-cover property-image"
            />
            <div class="absolute top-3 left-3 flex gap-2">
              <span class="px-3 py-1 bg-primary-600 text-white rounded-lg text-xs font-semibold shadow-lg">
                {{ property.type }}
              </span>
              <span v-if="property.status" class="px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-semibold shadow-lg">
                {{ property.status }}
              </span>
            </div>
            <button v-if="property.featured" class="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Featured
            </button>
          </div>

          <!-- Content -->
          <div class="p-5 flex-1">
            <h3 class="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
              {{ property.title }}
            </h3>
            <p class="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {{ property.location }}
            </p>

            <!-- Specs -->
            <div class="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-b border-gray-100">
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 text-gray-400 mb-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                </div>
                <p class="font-semibold text-gray-900 text-sm">{{ property.area }} m²</p>
                <p class="text-xs text-gray-400">Luas</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 text-gray-400 mb-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                </div>
                <p class="font-semibold text-gray-900 text-sm">{{ property.rooms }}</p>
                <p class="text-xs text-gray-400">Kamar</p>
              </div>
              <div class="text-center">
                <div class="flex items-center justify-center gap-1 text-gray-400 mb-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
                </div>
                <p class="font-semibold text-gray-900 text-sm">{{ property.bathrooms }}</p>
                <p class="text-xs text-gray-400">K. Mandi</p>
              </div>
            </div>

            <!-- Price & CTA -->
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs text-gray-400">Mulai dari</p>
                <p class="text-xl font-heading font-bold text-primary-700">{{ property.price }}</p>
              </div>
              <button class="px-5 py-2.5 gradient-primary text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div v-scroll-reveal class="text-center mt-14">
        <button @click="loadMore" v-if="displayCount < sortedProperties.length" class="btn-primary inline-flex items-center gap-2">
          Muat Lebih Banyak
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
    </div>

    <!-- ============ DETAIL MODAL ============ -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProperty" class="fixed inset-0 z-[60] flex items-center justify-center p-4" @click.self="closeDetail">
        <div class="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <!-- Close -->
          <button @click="closeDetail" class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <!-- Image Gallery -->
          <div class="relative h-72 md:h-96">
            <img :src="selectedProperty.image" :alt="selectedProperty.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div class="absolute bottom-6 left-6">
              <span class="px-3 py-1 bg-primary-600 text-white rounded-lg text-sm font-semibold">{{ selectedProperty.type }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 class="text-2xl font-heading font-bold text-gray-900 mb-2">{{ selectedProperty.title }}</h2>
                <p class="text-gray-500 flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {{ selectedProperty.location }}
                </p>
              </div>
              <p class="text-3xl font-heading font-bold text-primary-700">{{ selectedProperty.price }}</p>
            </div>

            <!-- Specs Grid -->
            <div class="grid grid-cols-4 gap-4 mb-8 p-4 bg-primary-50/50 rounded-2xl">
              <div class="text-center p-3">
                <p class="text-2xl font-bold text-primary-700">{{ selectedProperty.area }}</p>
                <p class="text-sm text-gray-500">m² Luas</p>
              </div>
              <div class="text-center p-3">
                <p class="text-2xl font-bold text-primary-700">{{ selectedProperty.rooms }}</p>
                <p class="text-sm text-gray-500">Kamar Tidur</p>
              </div>
              <div class="text-center p-3">
                <p class="text-2xl font-bold text-primary-700">{{ selectedProperty.bathrooms }}</p>
                <p class="text-sm text-gray-500">Kamar Mandi</p>
              </div>
              <div class="text-center p-3">
                <p class="text-2xl font-bold text-primary-700">{{ selectedProperty.floors || 2 }}</p>
                <p class="text-sm text-gray-500">Lantai</p>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-lg font-heading font-bold text-gray-900 mb-3">Deskripsi</h3>
              <p class="text-gray-600 leading-relaxed">{{ selectedProperty.description }}</p>
            </div>

            <!-- Map -->
            <div class="mb-8">
              <h3 class="text-lg font-heading font-bold text-gray-900 mb-3">Lokasi</h3>
              <div class="rounded-xl overflow-hidden h-64">
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style="border: 0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.17648492294!2d112.6740217!3d-7.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                :href="`https://wa.me/6285704104688?text=Halo%20NDA%20Property%2C%20saya%20tertarik%20dengan%20properti%20${encodeURIComponent(selectedProperty.title)}`"
                target="_blank"
                class="flex-1 py-3.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Hubungi via WhatsApp
              </a>
              <a href="#contact" @click="closeDetail" class="flex-1 py-3.5 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Kirim Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const viewMode = ref('grid')
const searchQuery = ref('')
const displayCount = ref(6)
const selectedProperty = ref(null)

const filters = ref({
  location: 'Semua Lokasi',
  type: 'Semua Tipe',
  priceRange: 'Semua Harga',
  sort: 'Terbaru',
})

const properties = [
  {
    id: 1,
    title: 'Rumah Minimalis Nyaman',
    type: 'Rumah',
    location: 'Surabaya Barat',
    area: 120,
    rooms: 3,
    bathrooms: 2,
    floors: 2,
    price: 'Rp 850 Jt',
    priceNum: 850,
    featured: true,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Rumah minimalis modern dengan desain elegan di kawasan strategis Surabaya Barat. Dilengkapi 3 kamar tidur, 2 kamar mandi, taman depan yang asri, dan carport luas. Akses mudah ke jalan utama, dekat pusat perbelanjaan dan sekolah favorit.',
  },
  {
    id: 2,
    title: 'Apartemen Mewah City View',
    type: 'Apartemen',
    location: 'Surabaya Pusat',
    area: 95,
    rooms: 2,
    bathrooms: 1,
    floors: 1,
    price: 'Rp 750 Jt',
    priceNum: 750,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Apartemen mewah dengan pemandangan kota Surabaya yang memukau. Unit fully furnished dengan material premium, dilengkapi fasilitas kolam renang, gym, dan keamanan 24 jam.',
  },
  {
    id: 3,
    title: 'Ruko Strategis 3 Lantai',
    type: 'Ruko',
    location: 'Surabaya Pusat',
    area: 150,
    rooms: 4,
    bathrooms: 3,
    floors: 3,
    price: 'Rp 1.2 M',
    priceNum: 1200,
    featured: true,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Ruko 3 lantai di lokasi strategis pusat kota Surabaya. Cocok untuk kantor, klinik, atau usaha retail. Parkir luas dan akses jalan utama.',
  },
  {
    id: 4,
    title: 'Kavling Tanah Premium',
    type: 'Tanah',
    location: 'Sidoarjo',
    area: 500,
    rooms: 0,
    bathrooms: 0,
    floors: 0,
    price: 'Rp 1.5 M',
    priceNum: 1500,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Kavling tanah premium seluas 500 m² di kawasan berkembang Sidoarjo. Sertifikat SHM, kontur rata, akses jalan lebar. Cocok untuk investasi jangka panjang atau pembangunan perumahan.',
  },
  {
    id: 5,
    title: 'Villa Tropis Elegan',
    type: 'Rumah',
    location: 'Surabaya Selatan',
    area: 300,
    rooms: 5,
    bathrooms: 4,
    floors: 2,
    price: 'Rp 2.5 M',
    priceNum: 2500,
    featured: true,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'Villa tropis mewah dengan kolam renang pribadi dan taman luas. Desain arsitektur kontemporer dengan sentuhan tropis. 5 kamar tidur, 4 kamar mandi, ruang keluarga luas, dan dapur modern.',
  },
  {
    id: 6,
    title: 'Apartemen Terjangkau Nyaman',
    type: 'Apartemen',
    location: 'Surabaya Timur',
    area: 72,
    rooms: 2,
    bathrooms: 1,
    floors: 1,
    price: 'Rp 450 Jt',
    priceNum: 450,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    description: 'Apartemen terjangkau dengan fasilitas lengkap di Surabaya Timur. Unit siap huni, dekat dengan akses tol dan transportasi umum.',
  },
  {
    id: 7,
    title: 'Rumah Kontemporer Luas',
    type: 'Rumah',
    location: 'Surabaya Utara',
    area: 200,
    rooms: 4,
    bathrooms: 3,
    floors: 2,
    price: 'Rp 1.8 M',
    priceNum: 1800,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Rumah kontemporer desain arsitek dengan material premium. Ruang terbuka yang luas, pencahayaan alami optimal, smart home system, dan taman belakang.',
  },
  {
    id: 8,
    title: 'Ruko Komersial Ramai',
    type: 'Ruko',
    location: 'Gresik',
    area: 180,
    rooms: 3,
    bathrooms: 2,
    floors: 2,
    price: 'Rp 980 Jt',
    priceNum: 980,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    description: 'Ruko komersial di area ramai Gresik. Lokasi strategis dekat pasar dan jalan utama. Cocok untuk berbagai jenis usaha.',
  },
  {
    id: 9,
    title: 'Rumah Cluster Exclusive',
    type: 'Rumah',
    location: 'Surabaya Barat',
    area: 160,
    rooms: 3,
    bathrooms: 2,
    floors: 2,
    price: 'Rp 1.1 M',
    priceNum: 1100,
    featured: false,
    status: 'Dijual',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Rumah cluster exclusive dengan keamanan 24 jam dan lingkungan asri. Desain modern, smart lock, dan area bermain anak.',
  },
]

const filteredProperties = computed(() => {
  return properties.filter((p) => {
    if (filters.value.location !== 'Semua Lokasi' && !p.location.includes(filters.value.location.replace('Surabaya ', ''))) return false
    if (filters.value.type !== 'Semua Tipe' && p.type !== filters.value.type) return false
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      return p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query)
    }
    return true
  })
})

const sortedProperties = computed(() => {
  const sorted = [...filteredProperties.value]
  switch (filters.value.sort) {
    case 'Terpopuler':
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    case 'Harga: Rendah ke Tinggi':
      return sorted.sort((a, b) => a.priceNum - b.priceNum)
    case 'Harga: Tinggi ke Rendah':
      return sorted.sort((a, b) => b.priceNum - a.priceNum)
    default:
      return sorted
  }
})

const displayedProperties = computed(() => {
  return sortedProperties.value.slice(0, displayCount.value)
})

const loadMore = () => {
  displayCount.value += 3
}

const openDetail = (property) => {
  selectedProperty.value = property
  document.body.style.overflow = 'hidden'
}

const closeDetail = () => {
  selectedProperty.value = null
  document.body.style.overflow = ''
}
</script>
