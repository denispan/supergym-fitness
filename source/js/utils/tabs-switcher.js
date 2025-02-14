
const initTabs = () => {
  const tabsBtn = document.querySelectorAll('.tab-titles-list__btn');
  const tabsContent = document.querySelectorAll('.gym-membership__tab-content-list');

  tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('tab-titles-list__btn--active')) {
        tabsBtn.forEach((btn) => {
          btn.classList.remove('tab-titles-list__btn--active');
        });

        tabsContent.forEach((content) => {
          content.classList.remove('gym-membership__tab-content-list--active');
        });

        currentBtn.classList.add('tab-titles-list__btn--active');
        currentTab.classList.add('gym-membership__tab-content-list--active');
      }
    });
  });
};

export {initTabs};
