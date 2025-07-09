// console.log('custom')

// Функция зума
function zoomImage(element) {
  const img = element.querySelector('img');
  const originalSrc = img.dataset.original || img.src;
  const overlay = document.getElementById('zoomOverlay');
  const zoomedImg = overlay.querySelector('.zoomed-image');

  zoomedImg.src = originalSrc;
  zoomedImg.alt = img.alt;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleKeyPress);
}

// Закрытие зума (с обработкой клика по кнопке)
function closeZoom(e) {
  if (e) e.stopPropagation();
  document.getElementById('zoomOverlay').classList.remove('active');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleKeyPress);
}

// Обработчик ESC
function handleKeyPress(e) {
  if (e.key === 'Escape') closeZoom();
}

// Вешаем обработчики на все изображения в #content
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#content img[src]');

  images.forEach(img => {
    // Создаем контейнер для зума, если его нет
    if (!img.closest('.zoom-container')) {
      const container = document.createElement('div');
      container.className = 'zoom-container';
      container.onclick = function(e) {
        e.stopPropagation();
        zoomImage(this);
      };

      // Оборачиваем изображение в контейнер
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);

      // Сохраняем оригинальный src в data-атрибут
      if (!img.dataset.original) {
        img.dataset.original = img.src;
      }
    }
  });
});