import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Scroll Reveal Directive
app.directive('scroll-reveal', {
  mounted(el, binding) {
    const direction = binding.value || 'up'

    const classMap = {
      up: 'scroll-reveal',
      left: 'scroll-reveal-left',
      right: 'scroll-reveal-right',
      scale: 'scroll-reveal-scale',
    }

    el.classList.add(classMap[direction] || 'scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('revealed')
            }, 50)
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(el)
  },
})

app.mount('#app')
