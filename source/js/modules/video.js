const initVideo = () => {

  const videoBlocks = document.querySelectorAll('div[data-video]');
  const videoWrapper = document.querySelector('.gym-video__poster-wrapper');

  if (videoBlocks) {

    videoBlocks.forEach((video) => {

      const buttonPlay = video.querySelector('button');

      buttonPlay.addEventListener('click', () => {
        if (video.classList.contains('video-start')) {
          return;
        }
        video.classList.add('video-start');
        videoWrapper.classList.add('visually-hidden');
        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      });
    });
  }
};

export {initVideo};
