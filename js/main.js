// Полифилл для IE11 foreach
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

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
    if(widgetTitle) {
        widgetTitle.addEventListener('click', () => {
            widgetTitle.classList.toggle('widget__title--toggle');
            widgetBody.classList.toggle('widget__body--hidden');
        });
    }
});

// Выбор параметров в виджете "Расстояние до метро"
const distanceCheckboxAll = document.querySelectorAll('.distance__checkbox');
const anyDistanceCheckbox = document.querySelector('#distance-05');

distanceCheckboxAll.forEach((distanceCheckbox) => {
    distanceCheckbox.addEventListener('change', () => {
        if(distanceCheckbox === anyDistanceCheckbox) {
            distanceCheckboxAll.forEach((item) => {
                item.checked = false;
            });
            distanceCheckbox.checked = true;
        } else {
            if(anyDistanceCheckbox.checked) {
                anyDistanceCheckbox.checked = false;
            }
        }
    });
});

// Показать/Скрыть дополнительные опции при клике на кнопку в в виджете Дополнительные опции
const btnShowOptions = document.querySelector('.widget__btn-show-hidden');

const hiddenOptions = document.querySelectorAll('[data-option-hidden=hidden]');

btnShowOptions.addEventListener('click', () => {
    hiddenOptions.forEach((item) => {
        if(item.getAttribute('data-option-hidden') === 'hidden') {
            item.style.display= 'flex';
            btnShowOptions.textContent = 'Скрыть доп. опции';
            item.setAttribute('data-option-hidden', 'visible');
        } else {
            item.style.display = 'none';
            item.setAttribute('data-option-hidden', 'hidden');
            btnShowOptions.textContent = 'Показать ещё';
        }
    });
});

