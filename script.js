// Скрипт для повторного запуска видео при возвращении на страницу
document.addEventListener("visibilitychange", function() {
  var video = document.getElementById("background-video");
  if (document.visibilityState === "visible") {
    video.play();
  }
});

// Скрипт для сброса активного состояния кнопок при возвращении в браузер
window.addEventListener('focus', function() {
  const activeButtons = document.querySelectorAll('.button:active');
  activeButtons.forEach(function(button) {
    button.classList.remove('active');
  });
});
