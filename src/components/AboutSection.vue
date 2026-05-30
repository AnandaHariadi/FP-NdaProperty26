<template>
  <section id="about" class="py-24 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <p class="section-subtitle">Tentang Kami</p>
        <h2 class="section-title">
          Mengenal Lebih Dekat <span class="text-gradient">NDA Property</span>
        </h2>
        <p class="section-description">
          Kami berkomitmen membantu UMKM properti tampil profesional dengan solusi terpadu yang inovatif dan terjangkau.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left: Image -->
        <div v-scroll-reveal="'left'" class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/10">
            <img
              src="/founder.jpg"
              alt="Muhammad Ananda Hariadi"
              class="w-full h-[450px] object-cover object-[50%_80%]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
          </div>
          <!-- Floating Stats Card -->
          <div class="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-2xl p-6 shadow-xl shadow-primary-900/10 border border-gray-100">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-2xl font-heading font-bold text-gray-900">Founder</p>
                <p class="text-gray-500 text-sm">NDA Property</p>
              </div>
            </div>
          </div>
          <!-- Decorative -->
          <div class="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-200 rounded-2xl -z-10"></div>
        </div>

        <!-- Right: Text -->
        <div v-scroll-reveal="'right'">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-full mb-6">
            <span class="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
            <span class="text-primary-700 text-xs font-semibold tracking-wider uppercase">Sejak 2014</span>
          </div>

          <h3 class="text-3xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            Muhammad Ananda Hariadi
          </h3>

          <p class="text-gray-600 leading-relaxed mb-6">
            Halo! Saya Muhammad Ananda Hariadi, Founder dari NDA Property. Berdomisili di Sidoarjo, Jawa Timur, dan saat ini saya sedang menempuh studi sebagai mahasiswa semester 4 di UPN "Veteran" Jawa Timur.
          </p>

          <p class="text-gray-600 leading-relaxed mb-8">
            Saya memiliki <i>passion</i> yang besar dalam menggabungkan dunia arsitektur, properti, dan teknologi. Melalui NDA Property, saya berdedikasi untuk membantu UMKM properti di Indonesia tampil lebih profesional, modern, dan kompetitif dengan mengandalkan inovasi desain serta layanan terpadu berkualitas tinggi.
          </p>

          <!-- Features -->
          <div class="space-y-4 mb-8">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:gradient-primary group-hover:text-white transition-all duration-300">
                <svg class="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
                </svg>
              </div>
              <div>
                <h4 class="font-heading font-semibold text-gray-900 mb-1">{{ feature.title }}</h4>
                <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <a href="#services" class="btn-primary inline-flex items-center gap-2">
            Pelajari Layanan Kami
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>

      <!-- Icon Cards -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(card, index) in iconCards"
          :key="index"
          v-scroll-reveal
          :style="{ transitionDelay: `${index * 150}ms` }"
          class="bg-white rounded-2xl p-8 shadow-lg shadow-primary-900/5 border border-gray-100 hover:border-primary-200 card-hover text-center group"
        >
          <div class="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6 group-hover:gradient-primary transition-all duration-500">
            <img :src="card.image" :alt="card.title" class="w-12 h-12 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500" />
          </div>
          <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">{{ card.title }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ card.description }}</p>
        </div>
      </div>

      <!-- Mission Statement -->
      <div v-scroll-reveal="'scale'" class="relative gradient-primary rounded-3xl p-10 md:p-14 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 30px 30px;"></div>
        </div>
        <div class="relative text-center max-w-3xl mx-auto">
          <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-heading font-bold mb-6">Misi Kami</h3>
          <p class="text-lg md:text-xl leading-relaxed text-blue-100">
            Memberdayakan UMKM properti Indonesia untuk tampil profesional dan kompetitif di pasar modern, dengan menyediakan solusi terpadu yang inovatif, terjangkau, dan berkualitas tinggi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Inovasi & Teknologi',
    description: 'Menggunakan teknologi terkini dalam desain 3D, BIM, dan visualisasi arsitektur.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Tim Profesional',
    description: 'Didukung arsitek, desainer, dan konsultan bersertifikat dengan pengalaman luas.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Harga Transparan',
    description: 'Penawaran harga yang jelas dan kompetitif tanpa biaya tersembunyi.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const iconCards = [
  {
    title: 'Desain Denah',
    description: 'Layout ruang yang optimal dan fungsional untuk kenyamanan penghuni.',
    image: 'https://cdn-icons-png.flaticon.com/128/2950/2950575.png',
  },
  {
    title: 'Arsitektur Bangunan',
    description: 'Konstruksi bangunan kokoh dengan standar kualitas terbaik.',
    image: 'https://cdn-icons-png.flaticon.com/128/1048/1048953.png',
  },
  {
    title: 'Interior Premium',
    description: 'Desain interior elegan yang mencerminkan karakter dan gaya hidup Anda.',
    image: 'https://cdn-icons-png.flaticon.com/128/3079/3079165.png',
  },
]
</script>
