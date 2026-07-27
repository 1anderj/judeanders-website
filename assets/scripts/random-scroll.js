document.getElementById('random-scroll').addEventListener('click', function () {
  var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  window.scrollTo({ top: Math.random() * maxScroll, behavior: 'smooth' });
});
