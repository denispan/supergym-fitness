
export const addScrollSmooth = () => {

  const anchors = document.querySelectorAll('a[data-anchor]');

  anchors.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = item.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};
