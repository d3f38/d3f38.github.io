const data = [
  {
    id: 1,
    name: "Азаровский детский дом имени Попова В.Т.",
    address: "г. Калуга, ул. Кубяка, д.&nbsp;20",
    slides: [
      {
        image: "images/popups/1/slide1.jpg",
      },
    ],
    house: {
      width: 185.71, // 1
      height: 200.09,
      top: 343,
      left: 62,
    },
  },
  {
    id: 2,
    name: "Калужский областной социальный центр по&nbsp;оказанию помощи лицам без определенного места жительства",
    address: "Калужская обл., пос. Северный, ул. Дальняя, д.&nbsp;3",
    slides: [
      {
        image: "images/popups/2/slide1.jpg",
      },
    ],
    house: {
      width: 76.71,
      height: 143.95,
      top: 373.42,
      left: 272.328429,
    },
  },
  {
    id: 3,
    name: "ГУЗ &laquo;Тульский областной хоспис&raquo;",
    address:
      "Тульская обл., Щекинский р-н, пос. Ломинцевский, Центральная ТЖРУ, д.&nbsp;9",
    slides: [
      {
        image: "images/popups/3/slide1.jpg",
      },
    ],
    house: {
      width: 76.77,
      height: 61.97,
      top: 421,
      left: 393,
    },
  },
  {
    id: 4,
    name: "Красивский дом для пожилых &laquo;Забота&raquo;",
    address:
      "Тульская обл., Чернский р-н, д. Красивка, ул. Центральная, д.&nbsp;1",
    slides: [
      {
        image: "images/popups/4/slide1.jpg",
      },
    ],
    house: {
      width: 125.05,
      height: 91.61,
      top: 467,
      left: 452,
    },
  },
  {
    id: 5,
    name: "Дом ребенка специализированный для детей с&nbsp;органическим поражением центральной нервной системы с&nbsp;нарушением психики",
    address: "г. Калуга, ул. Войкова, д.&nbsp;35",
    slides: [
      {
        image: "images/popups/5/slide1.jpg",
      },
    ],
    house: {
      width: 78.15,
      height: 59.24,
      top: 398,
      left: 531,
    },
  },
  {
    id: 6,
    name: "Социальный центр помощи семье и&nbsp;детям &laquo;Рождественский&raquo; Козельской епархии Русской православной церкви (Московский патриархат)",
    address:
      "Калужская обл., Козельский р-н, с. Нижние Прыски, ул. Турбинная, д. 12а",
    slides: [
      {
        image: "images/popups/6/slide1.jpg",
      },
    ],
    house: {
      width: 143.49,
      height: 96.49,
      top: 424,
      left: 613,
    },
  },
  {
    id: 7,
    name: "Тульский областной специализированный дом ребенка для детей с&nbsp;органическим поражением центральной нервной системы с&nbsp;нарушением психики &#8470;&nbsp;1",
    address: "г. Тула, ул. Ф.&nbsp;Энгельса, д.&nbsp;97",
    slides: [
      {
        image: "images/popups/7/slide1.jpg",
      },
    ],
    house: {
      width: 79.23,
      height: 63.95,
      top: 387, // 304
      left: 757, // 67
    },
  },
  {
    id: 8,
    name: "Елатомская школа-интернат для детей-сирот",
    address:
      "Рязанская обл., Касимовский р-н, п. Елатьма, ул. Янина, д.&nbsp;1",
    slides: [
      {
        image: "images/popups/8/slide1.jpg",
      },
      {
        image: "images/popups/8/slide2.jpg",
      },
    ],
    house: {
      width: 113.91,
      height: 91.95,
      top: 465,
      left: 862,
    },
  },
  {
    id: 9,
    name: "Полотняно-Заводской детский дом социального обслуживания",
    address: "Калужская обл., Дзержинский р-н, дер. Старки, д.&nbsp;68",
    slides: [
      {
        image: "images/popups/9/slide1.jpg",
      },
    ],
    house: {
      width: 156.52,
      height: 105.26,
      top: 398,
      left: 987,
    },
  },
  {
    id: 10,
    name: "Социальный приют для детей и&nbsp;подростков &laquo;Забота&raquo;",
    address:
      "Калужская обл., Боровский р-н, дер. Митяево, ул. Солнечная, д.&nbsp;1",
    slides: [
      {
        image: "images/popups/10/slide1.jpg",
      },
    ],
    house: {
      width: 89.47,
      height: 72.21,
      top: 383,
      left: 1149,
    },
  },
  {
    id: 11,
    name: "Школа интернат &laquo;Кимовская школа&raquo;",
    address: "Рязанская обл., г. Кимовск, ул. Павлова, д.&nbsp;28",
    slides: [
      {
        image: "images/popups/11/slide1.jpg",
      },
      {
        image: "images/popups/11/slide2.jpg",
      },
    ],
    house: {
      width: 126.38,
      height: 85.15,
      top: 407,
      left: 1243,
    },
  },
  {
    id: 12,
    name: "Елатомский детский дом-интернат для умственно отсталых детей",
    address:
      "Рязанская обл., Касимовский р-н, п. Елатьма, ул. Егерева, д. 36/2",
    slides: [
      {
        image: "images/popups/12/slide1.jpg",
      },
    ],
    house: {
      width: 111.74,
      height: 81.86,
      top: 426,
      left: 1394,
    },
  },
  {
    id: 13,
    name: "Центр содействия семейному воспитанию &laquo;Берега&raquo;",
    address:
      "Калужская обл., Дзержинский р-н, г. Кондрово, ул. А.&nbsp;Матросова, д.&nbsp;37",
    slides: [
      {
        image: "images/popups/13/slide1.jpg",
      },
      {
        image: "images/popups/13/slide2.jpg",
      },
    ],
    house: {
      width: 95.91,
      height: 77.42,
      top: 355,
      left: 1595,
    },
  },
  {
    id: 14,
    name: "Головеньковский детский дом-интернат для умственно отсталых детей",
    address: "Тульская обл., Щекинский р-н, пос. Головеньковский, д. 28а",
    slides: [
      {
        image: "images/popups/14/slide1.jpg",
      },
      {
        image: "images/popups/14/slide2.jpg",
      },
    ],
    house: {
      width: 165.23,
      height: 110.48,
      top: 402,
      left: 1687,
    },
  },
  {
    id: 15,
    name: "Товарковский дом-интернат для престарелых и&nbsp;инвалидов",
    address:
      "Тульская обл., Богородицкий р-н, пос. Товарковский, пер. Советский, д.&nbsp;40",
    slides: [
      {
        image: "images/popups/15/slide1.jpg",
      },
    ],
    house: {
      width: 125.05,
      height: 91.61,
      top: 367,
      left: 1875,
    },
  },
  {
    id: 16,
    name: "Комплексный центр социального обслуживания населения города Рязань",
    address: "г. Рязань, ул. Октябрьская, д.&nbsp;17",
    slides: [
      {
        image: "images/popups/16/slide1.jpg",
      },
    ],
    house: {
      width: 127.97,
      height: 86.05,
      top: 351,
      left: 2013,
    },
  },
  {
    id: 17,
    name: "Медынский дом-интернат для престарелых и&nbsp;инвалидов",
    address: "Калужская обл., г. Медынь, ул. Митрофанова, д.&nbsp;32",
    slides: [
      {
        image: "images/popups/17/slide1.jpg",
      },
    ],
    house: {
      width: 132.9,
      height: 107.27,
      top: 443,
      left: 2141,
    },
  },
  {
    id: 18,
    name: "Первомайский дом-интернат для престарелых и&nbsp;инвалидов",
    address:
      "Тульская обл., Щекинский р-н, р.п. Первомайский, ул. Пролетарская, д.&nbsp;1",
    slides: [
      {
        image: "images/popups/18/slide1.jpg",
      },
      {
        image: "images/popups/18/slide2.jpg",
      },
    ],
    house: {
      width: 76.72,
      height: 143.95,
      top: 304,
      left: 2245,
    },
  },
  {
    id: 19,
    name: "&laquo;Долматовский детский дом&raquo; для детей-сирот и&nbsp;детей, оставшихся без попечения родителей",
    address:
      "Тульская обл., Чернский р-н, д. Долматово, ул. Юбилейная, д.&nbsp;4",
    slides: [
      {
        image: "images/popups/19/slide1.jpg",
      },
    ],
    house: {
      width: 154.98,
      height: 104.21,
      top: 357,
      left: 2382,
    },
  },
  {
    id: 20,
    name: "Рязанский дом ребенка",
    address: "г. Рязань, ул. Высоковольтная, д.&nbsp;47",
    slides: [
      {
        image: "images/popups/20/slide1.jpg",
      },
    ],
    house: {
      width: 148.73,
      height: 108.96,
      top: 471,
      left: 2426,
    },
  },
  {
    id: 21,
    name: "Детский приют &laquo;Марфа&raquo;",
    address: "г. Рязань, ул. Баженова, д.&nbsp;11",
    slides: [
      {
        image: "images/popups/21/slide1.jpg",
      },
    ],
    house: {
      width: 76.77,
      height: 61.97,
      top: 372,
      left: 2551,
    },
  },
  {
    id: 22,
    name: "Рязанский геронтологический центр&nbsp;им. П.А. Мальшина",
    address: "г. Рязань, ул. Новаторов, д. 27Б",
    slides: [
      {
        image: "images/popups/22/slide1.jpg",
      },
      {
        image: "images/popups/22/slide2.jpg",
      },
    ],
    house: {
      width: 111.74,
      height: 81.86,
      top: 483,
      left: 2686,
    },
  },
  {
    id: 23,
    name: "Социальная гостиница",
    address: "г. Тула, ул. Мартеновская, д.&nbsp;10",
    slides: [
      {
        image: "images/popups/23/slide1.jpg",
      },
    ],
    house: {
      width: 92.06,
      height: 69.78,
      top: 388,
      left: 2739,
    },
  },
  {
    id: 24,
    name: "Социально-реабилитационный центр для несовершеннолетних &laquo;Радуга&raquo;",
    address: "Калужская обл., Дзержинский р-н, д. Жилетово, д. 8а",
    slides: [
      {
        image: "images/popups/24/slide1.jpg",
      },
    ],
    house: {
      width: 121.04,
      height: 91.74,
      top: 420,
      left: 2865,
    },
  },
  {
    id: 25,
    name: "Калужский социальный приют для детей и&nbsp;подростков &laquo;Мечта&raquo;",
    address: "г. Калуга, ул. К.&nbsp;Либкнехта, д.&nbsp;9",
    slides: [
      {
        image: "images/popups/25/slide1.jpg",
      },
    ],
    house: {
      width: 117.01,
      height: 152.38,
      top: 288,
      left: 3037,
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // const loader = document.querySelector(".loader");
  // setTimeout(() => {
  //   loader.classList.remove("loading");
  // }, 2000);
});

$(document).ready(function () {
  const city = document.querySelector(".city");
  const car = document.querySelector(".car");
  const carWrapper = document.querySelector(".car-wrapper");
  const isMobile = window.innerWidth <= 1024;

  const onmousedown = (e) => {
    const carWrapperRect = carWrapper.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();
    const cityWidth = city.scrollWidth;
    const screenWidth = document.body.offsetWidth;

    var coords = getCoords(car);
    const pageX = isMobile ? e.targetTouches[0].pageX : e.pageX;
    var shiftX = pageX - coords.left + carWrapperRect.left;
    const rightBoundary = carWrapperRect.width - carRect.width;

    moveAt(e);

    car.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
      const pageX = isMobile ? e.targetTouches[0].pageX : e.pageX;
      const value = pageX - shiftX;

      const calcValue =
        value >= 0 && value <= rightBoundary
          ? value
          : value <= 0
          ? 0
          : value > rightBoundary
          ? rightBoundary
          : value;

      car.style.left = calcValue + "px";

      const carPosition =
        (calcValue * 100) / (carWrapperRect.width - carRect.width);
      city.scrollLeft = ((cityWidth - screenWidth) * carPosition) / 100;
    }

    document.onmousemove = function (e) {
      moveAt(e);
    };

    car.ontouchmove = function (e) {
      moveAt(e);
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      car.onmouseup = null;
    };
  };

  const ondragstart = () => {
    return false;
  };

  car.addEventListener("mousedown", onmousedown);

  car.addEventListener("touchstart", onmousedown);

  car.addEventListener("dragstart", ondragstart);

  function getCoords(elem) {
    // кроме IE8-
    var box = elem.getBoundingClientRect();

    const position = box.left + scrollX;

    return {
      left: position,
    };
  }

  // scroll city
  city.addEventListener("scroll", (e) => {
    const cityWidth = city.scrollWidth;
    const screenWidth = document.body.offsetWidth;
    const carWrapperRect = carWrapper.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();

    const scrollPosition =
      (e.target.scrollLeft * 100) / (cityWidth - screenWidth);

    car.style.left =
      ((carWrapperRect.width - carRect.width) * scrollPosition) / 100 + "px";
  });

  // arrows

  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  arrowLeft.addEventListener("click", () => {
    const newScrollPosition = city.scrollLeft - 100;

    city.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  });

  arrowRight.addEventListener("click", () => {
    const newScrollPosition = city.scrollLeft + 100;

    city.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  });

  // 1024x960

  function clearHouses() {
    const houses = document.querySelectorAll(".house");

    houses.forEach((item) => {
      item.remove();
    });
  }

  function placeHouses() {
    clearHouses();

    const initialHeight = 676;
    const initialWeight = 3221;

    const cityBg = document.querySelector(".city__bg");
    const bgWidth = cityBg.getBoundingClientRect().width;
    const bgHeight = cityBg.getBoundingClientRect().height;

    const calcHouseSize = (house) => {
      if (!house) {
        return {
          width: 1,
          height: 1,
          top: 1,
          left: 1,
        };
      }

      const widthInPercent = house.width / initialWeight; // 0.05
      const heightInPercent = house.height / initialHeight;
      const topInPercent = house.top / initialHeight;
      const leftInPercent = house.left / initialWeight;

      return {
        width: bgWidth * widthInPercent,
        height: bgHeight * heightInPercent,
        top: bgHeight * topInPercent,
        left: bgWidth * leftInPercent,
      };
    };

    const housesContainer = document.querySelector(".city__houses");

    data.forEach((item, index) => {
      const { left, top, width, height } = calcHouseSize(item.house);

      const i = index + 1;

      housesContainer.insertAdjacentHTML(
        "beforeend",
        `
          <div id="house-${i}" class="house house${i}" style="width:${width}px;height:${height}px;top:${top}px;left:${left}px;">
            <img src="images/houses/${i}.png">
            <img class="painted" src="images/painted-houses/${i}.png">
          </div>
        `
      );
    });
  }

  placeHouses();

  window.addEventListener("resize", () => {
    placeHouses();
  });

  // popups
  const popup = document.querySelector(".popup");
  const houses = [].slice.call(document.querySelectorAll(".house"));

  let popupContent = "";

  function houseClickHandler(evt = undefined) {
    const cursor = document.querySelector(".cursor");

    if (cursor) {
      cursor.style.display = "none";
    }

    if (evt && evt.target.classList.contains("open-house--active")) {
      evt.target.classList.remove("open-house--active");
    }

    if (!popup) {
      document.body.insertAdjacentHTML(
        "afterbegin",
        `<div class="popup">
          <div class="popup__overlay"></div>

          <div class="popup__wrapper">
            <div class="popup__content">
            
              <div class="popup__close">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.60997 1L18 17M17.39 1L1 17" stroke="#4C5FE2" stroke-width="2" stroke-linecap="round"/>
                </svg>

              </div>
  
              <div class="slider">

              </div>
              

              <p class="popup__name">${popupContent.name}</p>
              <p class="popup__address">${popupContent.address}</p>

              <img class="popup-image" src="images/popup-image.png" alt="popup image">
            </div>
          </div>
        </div>`
      );

      // $(document).ready(function () {
      $(".slider").slick({
        lazyLoad: "progressive",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true,
      });
      // });

      popupContent.slides?.forEach((item) => {
        $(".slider").slick(
          "slickAdd",
          `
          <div class="slide">
            <div class="slide__image-container">
              <img class="slide__image" src=${item.image} alt=${item.comment}>
            </div>
          </div>
        `
        );
      });

      // const slider =
      //   popupContent.slides && popupContent.slides.length
      //     ? `<div class="slider">
      //         ${popupContent.slides.map(
      //           (item) =>
      //             `<div class="slide">
      //             <div class="slide__image-container">
      //               <img class="slide__image" src=${item.image} alt=${item.comment}>
      //             </div>
      //           </div>`
      //         )}
      //       </div>`
      //     : "";

      document.body.style.overflow = "hidden";
      const popup = document.querySelector(".popup");
      const closeButton = document.querySelector(".popup__close");

      const overlay = document.querySelector(".popup__overlay");

      cursor.style.display = "none";

      closeButton.addEventListener("click", () => {
        closePopup(popup);
      });

      overlay.addEventListener("click", () => {
        closePopup(popup);
      });
    }
  }

  const closePopup = (popup) => {
    popup.remove();
    document.body.style.overflow = "visible";
    popupContent = null;

    const cursor = document.querySelector(".cursor");

    const lightedWindow = document.querySelector(".window.lighted");

    if (lightedWindow) {
      lightedWindow.classList.remove("lighted");
    }

    if (cursor) {
      cursor.style.display = "block";
    }
  };

  houses.forEach((item) => {
    item.addEventListener("pointerdown", (e) => {
      const lightedWindow = e.target.closest(".house");
      const houseId = lightedWindow.id;

      lightedWindow.classList.add("lighted");

      popupContent = data.find((item) => `house-${item.id}` == houseId);

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
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      const isLoading = document.querySelector(".loading");

      if (isLoading) {
        return;
      }

      if (!popupContent) {
        cursor.style.display = "block";

        cursor.setAttribute(
          "style",
          `top:  ${e.pageY - window.scrollY - 14}px; left: ${e.pageX - 14}px;`
        );

        if (e.target.closest(".window")) {
          cursor.classList.add("animate");
        } else if (cursor.classList.contains("animate")) {
          cursor.classList.remove("animate");
        }
      } else {
        cursor.style.display = "none";
      }

      if (
        e?.target.closest(".scrollbar-container") ||
        e?.target.closest(".previous-page") ||
        e?.target.closest(".header") ||
        e?.target.closest(".footer__content")
      ) {
        cursor.style.display = "none";
      } else if (!popupContent) {
        cursor.style.display = "block";
      }
    });
  }

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.remove("loading");
  }, 2000);
});
