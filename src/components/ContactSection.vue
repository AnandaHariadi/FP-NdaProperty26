<template>
  <section id="contact" class="py-24 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" v-scroll-reveal>
        <p class="section-subtitle">Hubungi Kami</p>
        <h2 class="section-title">
          Mari <span class="text-gradient">Berdiskusi</span>
        </h2>
        <p class="section-description">
          Siap membantu mewujudkan properti impian Anda. Kirim pesan atau hubungi kami via WhatsApp!
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Contact Form -->
        <div v-scroll-reveal="'left'" class="lg:col-span-3">
          <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-primary-900/5 border border-gray-100">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-2">Kirim Pesan</h3>
            <p class="text-gray-500 mb-8 text-sm">Isi formulir di bawah ini dan kami akan menghubungi Anda segera.</p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap <span class="text-red-400">*</span>
                  </label>
                  <div class="relative">
                    <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span class="text-red-400">*</span>
                  </label>
                  <div class="relative">
                    <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white transition-colors"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
                <select v-model="form.subject" class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white transition-colors appearance-none">
                  <option value="">Pilih subjek</option>
                  <option>Konsultasi Desain</option>
                  <option>Renovasi</option>
                  <option>Jual/Beli Properti</option>
                  <option>Manajemen Proyek</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan <span class="text-red-400">*</span>
                </label>
                <div class="relative">
                  <svg class="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white transition-colors resize-none"
                    placeholder="Ceritakan kebutuhan properti Anda..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 gradient-primary text-white rounded-xl font-heading font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                <template v-if="!isSubmitting">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  Kirim Pesan
                </template>
                <template v-else>
                  <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Mengirim...
                </template>
              </button>
            </form>

            <!-- Success Message -->
            <transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <p class="text-green-700 text-sm font-medium">Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.</p>
              </div>
            </transition>
          </div>
        </div>

        <!-- Contact Info Sidebar -->
        <div v-scroll-reveal="'right'" class="lg:col-span-2 space-y-6">
          <!-- WhatsApp CTA -->
          <a
            href="https://wa.me/6285704104688?text=Halo%20NDA%20Property%2C%20saya%20tertarik%20untuk%20konsultasi%20properti"
            target="_blank"
            class="block bg-green-500 rounded-2xl p-6 text-white hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group"
          >
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p class="font-heading font-bold text-lg">Chat via WhatsApp</p>
                <p class="text-green-100 text-sm">Respon cepat dalam hitungan menit</p>
              </div>
            </div>
          </a>

          <!-- Contact Cards -->
          <div class="bg-white rounded-2xl p-6 shadow-lg shadow-primary-900/5 border border-gray-100 space-y-5">
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 class="font-heading font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                <p class="text-gray-500 text-sm leading-relaxed">Jl. Raya Darmo No. 45, Surabaya,<br/>Jawa Timur 60241</p>
              </div>
            </div>

            <div class="border-t border-gray-100"></div>

            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 class="font-heading font-semibold text-gray-900 mb-1">Email</h4>
                <p class="text-gray-500 text-sm">info@ndaproperty.com</p>
                <p class="text-gray-500 text-sm">sales@ndaproperty.com</p>
              </div>
            </div>

            <div class="border-t border-gray-100"></div>

            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="font-heading font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                <p class="text-gray-500 text-sm">Senin - Jumat: 09:00 - 18:00</p>
                <p class="text-gray-500 text-sm">Sabtu: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-2xl p-6 shadow-lg shadow-primary-900/5 border border-gray-100">
            <h4 class="font-heading font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
            <div class="grid grid-cols-4 gap-3">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                class="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
              >
                <div class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:gradient-primary group-hover:text-white transition-all duration-300">
                  <span v-html="social.icon" class="w-5 h-5"></span>
                </div>
                <span class="text-xs text-gray-500 group-hover:text-primary-600 font-medium">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps -->
      <div v-scroll-reveal class="mt-16">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold text-gray-900 mb-2">Lokasi Kantor Kami</h3>
          <p class="text-gray-500">Kunjungi kantor kami di pusat kota Surabaya</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-xl shadow-primary-900/10 border border-gray-100">
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))
  isSubmitting.value = false
  showSuccess.value = true

  // Reset form
  form.value = { name: '', email: '', subject: '', message: '' }

  // Hide success after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

const socialLinks = [
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
</script>
