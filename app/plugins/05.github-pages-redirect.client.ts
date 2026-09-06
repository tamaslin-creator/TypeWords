export default defineNuxtPlugin(() => {
  const savedPath = sessionStorage.getItem('typewords_redirect')

  if (!savedPath) return

  sessionStorage.removeItem('typewords_redirect')

  const base = '/TypeWords'
  window.location.replace(base + savedPath)
})
