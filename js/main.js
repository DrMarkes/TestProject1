
// Поведение фильтра на мобильных устройствах
document.querySelector('.menu-icon-wrapper').onclick = () => {
  document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
  document.querySelector('.sidebar').classList.toggle('sidebar-mobile--active');
};


// Показать скрытые карточки
const btnMore = document.querySelector('.btn-more');
const cardsHidden = document.querySelectorAll('.card-link--hidden');

btnMore.addEventListener('click', () => {
    cardsHidden.forEach((card) => {
        card.classList.remove('card-link--hidden');
    });
});


// Показать/Скрыть виджеты фильтра
const widgets = document.querySelectorAll('.widget');

widgets.forEach((widget) => {
    const widgetTitle = widget.querySelector('.widget__title');
    const widgetBody = widget.querySelector('.widget__body');
    widgetTitle.addEventListener('click', () => {
        widgetTitle.classList.toggle('widget__title--toggle');
        widgetBody.classList.toggle('widget__body--hidden');
    });
});