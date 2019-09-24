if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
function goBack() {
  window.history.back();
}
