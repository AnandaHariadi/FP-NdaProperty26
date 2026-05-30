<template>
  <section id="services" class="py-24 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-1/2 left-0 w-64 h-64 bg-primary-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div class="absolute top-20 right-0 w-48 h-48 bg-primary-50/50 rounded-full translate-x-1/2 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" v-scroll-reveal>
        <p class="section-subtitle">Layanan Kami</p>
        <h2 class="section-title">
          Solusi Properti <span class="text-gradient">Lengkap</span>
        </h2>
        <p class="section-description">
          Dari konsep desain hingga pemasaran, kami menyediakan layanan properti menyeluruh untuk setiap kebutuhan Anda.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-scroll-reveal
          :style="{ transitionDelay: `${index * 100}ms` }"
          class="service-card bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary-900/5 border border-gray-100 group"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            <!-- Icon Badge -->
            <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white text-xl shadow-lg shadow-primary-500/30">
              {{ service.icon }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-500 mb-5 leading-relaxed text-sm">
              {{ service.description }}
            </p>
            <ul class="space-y-2.5 mb-6">
              <li v-for="(feature, i) in service.features" :key="i" class="flex items-center gap-3 text-sm text-gray-600">
                <span class="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                {{ feature }}
              </li>
            </ul>
            <a href="#contact" class="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors group/link">
              Pelajari Lebih Lanjut
              <svg class="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div v-scroll-reveal class="mt-16 bg-primary-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-2xl font-heading font-bold text-gray-900 mb-2">Butuh Layanan Khusus?</h3>
          <p class="text-gray-600">Konsultasikan kebutuhan properti Anda dan dapatkan penawaran terbaik.</p>
        </div>
        <a href="#contact" class="btn-primary whitespace-nowrap flex items-center gap-2">
          Konsultasi Gratis
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '🏠',
    title: 'Desain Rumah',
    description: 'Desain rumah impian Anda dengan konsep modern, minimalis, atau klasik yang fungsional dan estetik.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    features: ['Konsultasi desain gratis', 'Visualisasi 3D realistis', 'Revisi desain unlimited'],
  },
  {
    icon: '🎨',
    title: 'Interior Design',
    description: 'Transformasi ruangan Anda menjadi lebih indah, nyaman, dan mencerminkan karakter unik Anda.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    features: ['Pemilihan material premium', 'Custom furniture design', 'Color & lighting consulting'],
  },
  {
    icon: '🔨',
    title: 'Renovasi',
    description: 'Renovasi profesional untuk rumah, ruko, atau apartemen dengan jaminan kualitas terbaik.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    features: ['Estimasi biaya akurat', 'Garansi pekerjaan 2 tahun', 'Supervisi rutin berkala'],
  },
  {
    icon: '📋',
    title: 'Manajemen Proyek',
    description: 'Pengelolaan proyek profesional dari awal hingga serah terima dengan timeline yang terstruktur.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    features: ['Timeline terstruktur', 'Progress tracking real-time', 'Quality assurance ketat'],
  },
  {
    icon: '🏪',
    title: 'Jual/Beli Properti',
    description: 'Bantuan lengkap untuk transaksi properti yang aman, transparan, dan menguntungkan.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    features: ['Legal review menyeluruh', 'Negosiasi harga optimal', 'Dokumentasi lengkap'],
  },
  {
    icon: '📐',
    title: 'Konsultasi Arsitektur',
    description: 'Sesi konsultasi dengan arsitek profesional untuk mendapatkan solusi desain terbaik.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80',
    features: ['Sesi online & offline', 'Analisis mendalam', 'Rekomendasi terperinci'],
  },
]
</script>
