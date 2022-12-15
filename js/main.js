const data = [ 
  {
    id: 1,
    name: "Центр содействия семейному воспитанию имени Попова&nbsp;В.Т.",
    address: "г. Калуга, ул.&nbsp;Кубяка, д.&nbsp;20",
    slides: [
      {
        image: "images/popups/1/slide1.jpg",
      },
    ],
  },
  {
  id: 2,
  name: "Калужский центр социальной адаптации для лиц без определенного места жительства и&nbsp;занятий",
  address: "Калужская обл., пос. Северный, ул.&nbsp;Дальняя, д.&nbsp;3",
  slides: [
    {
      image: "images/popups/6/slide1.jpg",
    },
    {
      image: "images/popups/6/slide2.jpg",
    }
  ],
  },
  {
  id: 3,
  name: "Тульский областной хоспис",
  address: "Тульская обл., Щекинский р-н, пос. Ломинцевский, Центральная ТЖРУ, д.&nbsp;9",
  },
  {
  id: 4,
  name: "Красивский дом для пожилых «Забота»",
  address: "Тульская обл., Чернский р-н, д. Красивка, ул.&nbsp;Центральная, д.1",
  },
  {
  id: 5,
  name: "Дом ребенка специализированный для детей с&nbsp;органическим поражением центральной нервной системы с&nbsp;нарушением психики",
  address: "г. Калуга, ул.&nbsp;Войкова, д.&nbsp;35",
  },
  {
  id: 6,
  name: "Социальный центр помощи семье и&nbsp;детям «Рождественский» Козельской епархии Русской православной церкви (Московский патриархат)",
  address: "Калужская обл., Козельский р-н, с. Нижние Прыски, ул.&nbsp;Турбинная, д. 12а",
  },
  {
  id: 7,
  name: "Тульский областной специализированный дом ребенка для детей с&nbsp;органическим поражением центральной нервной системы с&nbsp;нарушением психики &#8470;&nbsp;1",
  address: "г. Тула, ул.&nbsp;Ф.&nbsp;Энгельса, д.&nbsp;97",
  },
  {
  id: 8,
  name: "Елатомская школа-интернат для детей-сирот",
  address: "Рязанская обл., Касимовский р-н, п. Елатьма, ул.&nbsp;Янина, 1",
  },
  {
  id: 9,
  name: "Полотняно-Заводской детский дом социального обслуживания",
  address: "Калужская обл., Дзержинский район, дер. Старки, д.&nbsp;68",
  },
  {
  id: 10,
  name: "Социальный приют для детей и&nbsp;подростков «Забота»",
  address: "Калужская обл., Боровский район, дер. Митяево, ул.&nbsp;Солнечная, д.&nbsp;1",
  },
  {
  id: 11,
  name: "Школа интернат «Кимовская школа»",
  address: "г. Кимовск, ул.&nbsp;Павлова, д.&nbsp;28",
  },
  {
  id: 12,
  name: "Елатомский детский дом-интернат для умственно отсталых детей",
  address: "Рязанская обл., Касимовский р-н, п. Елатьма, ул.&nbsp;Егерева, 36/2",
  },
  {
  id: 13,
  name: "Центр содействия семейному воспитанию «Берега»",
  address: "Калужская обл., Дзержинский район, г. Кондрово, ул.&nbsp;А.&nbsp;Матросова, д.&nbsp;37",
  },
  {
  id: 14,
  name: "Головеньковский детский дом&nbsp;&mdash; интернат",
  address: "Тульская обл., Щекинский р-н, пос. Головеньковский, д. 28-А",
  },
  {
  id: 15,
  name: "Товарковский дом&nbsp;&mdash; интернат для престарелых и&nbsp;инвалидов",
  address: "Тульская обл., Богородицкий р-н, пос. Товарковский пер. Советский, д.&nbsp;40",
  },
  {
  id: 16,
  name: "Центр социальной адаптации для лиц без определенного места жительства и&nbsp;занятий",
  address: "Рязанская обл., Клепиковский р-н, с. Криуша, ул.&nbsp;С.Есенина, д.&nbsp;42",
  },
  {
  id: 17,
  name: "Медынский дом-интернат для престарелых и&nbsp;инвалидов",
  address: "Калужская обл., г. Медынь, ул.&nbsp;Митрофанова, д.&nbsp;32",
  },
  {
  id: 18,
  name: "Первомайский дом-интернат для престарелых и&nbsp;инвалидов",
  address: "Тульская обл., Щекинский р-н, р.п. Первомайский, ул.&nbsp;Пролетарская, д.&nbsp;1",
  },
  {
  id: 19,
  name: "«Далматовский детский дом» для детей-сирот и&nbsp;детей, оставшихся без попечения родителей",
  address: "Курганская обл., Чернский р-н, д. Долматово, ул.&nbsp;Юбилейная, 4",
  },
  {
  id: 20,
  name: "Рязанский дом ребенка",
  address: "г. Рязань, ул.&nbsp;Высоковольтная, д.&nbsp;47",
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.remove("loading");
  }, 2000);
  
});

$(document).ready(function () {
  const popup = document.querySelector(".popup");
  const windows = [].slice.call(document.querySelectorAll(".window"));

  let popupContent = '';
  
  function houseClickHandler (evt = undefined) {
    const cursor = document.querySelector('.cursor');

    if (cursor) {
      cursor.style.display = "none";
    }

    if(evt && evt.target.classList.contains("open-house--active")){
      evt.target.classList.remove("open-house--active");
    }

    if (!popup) {
      const slider = popupContent.slides && popupContent.slides.length ? `<div class="slider">
        ${popupContent.slides.map(item => 
          `<div class="slide">
            <div class="slide__image-container">
              <img class="slide__image" src=${item.image} alt=${item.comment}>
            </div>
          </div>`
        )}
      </div>` : "";

      document.body.insertAdjacentHTML("afterbegin",
        `<div class="popup">
          <div class="popup__overlay"></div>

          <div class="popup__wrapper">
            <div class="popup__content">
            
              <div class="popup__close">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53821 1L16 15M15.4618 1L1 15" stroke="black" />
                </svg>
              </div>
  
              <h3 class="popup__title">Мы в пути для добрых дел!</h3>

              ${slider}

              <p class="popup__name">${popupContent.name}</p>
              <p class="popup__address">${popupContent.address}</p>
              <p class="popup__suggestion">Тепла и&nbsp;света вам в&nbsp;Новом&nbsp;году!</p>

              <img class="popup-image" src="images/popup-image.svg" alt="popup image">
            </div>
          </div>
        </div>`
      );
  
      $(".slider").slick();
      document.body.style.overflow = "hidden";
      const popup = document.querySelector(".popup");
      const closeButton = document.querySelector(".popup__close");
  
      const overlay = document.querySelector(".popup__overlay");

      cursor.style.display = "none";
  
      closeButton.addEventListener("click", () => {
        closePopup(popup)
      });
  
      overlay.addEventListener("click", () => {
        closePopup(popup)
      });
    }
  }

  const closePopup = (popup) => {
    popup.remove();
    document.body.style.overflow = "visible";
    popupContent = null;

    const cursor = document.querySelector('.cursor');

    if (cursor) {
      cursor.style.display = "block";
    }
  }

  windows.forEach((item) => {
    item.addEventListener("click", (e) => {
      const windowId = e.target.closest(".window").id;

      popupContent = data.find((item) => `window-${item.id}` == windowId);

      if (window.matchMedia("(min-width: 1280px)").matches) {
          houseClickHandler();
      } else {
        setTimeout(() => {
          houseClickHandler();
        }, 500);
      }
    });
  });

  if (window.innerWidth >= 1025) {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {

        if (!popupContent) {
          cursor.style.display = "block";

          cursor.setAttribute(
            'style',
            `top:  ${e.pageY - window.scrollY - 14}px; left: ${e.pageX - 14}px;`
          );

          if (e.target.closest(".window")) {
              cursor
                  .classList
                  .add("animate");
          } else if (cursor.classList.contains("animate")) {
              cursor
                  .classList
                  .remove("animate");
          }
        } else {
          cursor.style.display = "none";
        }

        if (e && e.target.closest(".banner")){
          cursor.style.display = "none";
        } else if (!popupContent) {
          cursor.style.display = "block";
        }
    });
  }
});
