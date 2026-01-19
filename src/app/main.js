import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// mover para um toast.js
import { Toast } from 'bootstrap'


document.addEventListener('DOMContentLoaded', () => {
  const toasts = {
    top: new Toast(document.getElementById('toastTop')),
    jg: new Toast(document.getElementById('toastJg')),
    mid: new Toast(document.getElementById('toastMid')),
    adc: new Toast(document.getElementById('toastAdc')),
    sup: new Toast(document.getElementById('toastSup'))
  }

  // expõe globalmente para o HTML se precisar
  window.toasts = toasts

  document.getElementById('liveToastTopBtn').addEventListener('click', () => toasts.top.show())
  document.getElementById('liveToastJgBtn').addEventListener('click', () => toasts.jg.show())
  document.getElementById('liveToastMidBtn').addEventListener('click', () => toasts.mid.show())
  document.getElementById('liveToastAdcBtn').addEventListener('click', () => toasts.adc.show())
  document.getElementById('liveToastSupBtn').addEventListener('click', () => toasts.sup.show())
})

// ate aqui vai o toast.js
