const data = [
  {
    id: 1,
    title: "Заголовок / локация",
    text:
      "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    slides: [
      {
        image: "images/popups/1/slide1.png",
        comment: "Комментарии к фотографии 1",
      },
      {
        image: "images/popups/1/slide2.png",
        comment: "Комментарии к фотографии 2",
      },
      {
        image: "images/popups/1/slide3.png",
        comment: "Комментарии к фотографии 3",
      },
      {
        image: "images/popups/1/slide4.png",
        comment: "Комментарии к фотографии 4",
      },
    ],
  },
  {
    id: 2,
    title: "Заголовок / локация",
    text:
      "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    slides: [
      {
        image: "images/popups/1/slide1.png",
        comment: "Комментарии к фотографии 1",
      },
      {
        image: "images/popups/1/slide2.png",
        comment: "Комментарии к фотографии 2",
      },
      {
        image: "images/popups/1/slide3.png",
        comment: "Комментарии к фотографии 3",
      },
      {
        image: "images/popups/1/slide4.png",
        comment: "Комментарии к фотографии 4",
      },
    ],
  },
  {
    id: 3,
    title: "Заголовок / локация",
    text:
      "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    slides: [
      {
        image: "images/popups/1/slide1.png",
        comment: "Комментарии к фотографии 1",
      },
      {
        image: "images/popups/1/slide2.png",
        comment: "Комментарии к фотографии 2",
      },
      {
        image: "images/popups/1/slide3.png",
        comment: "Комментарии к фотографии 3",
      },
      {
        image: "images/popups/1/slide4.png",
        comment: "Комментарии к фотографии 4",
      },
    ],
  },
];

$(document).ready(function () {
  const popup = document.querySelector(".popup");
  const houses = [].slice.call(document.querySelectorAll(".house"));

  houses.forEach((item) => {
    item.addEventListener("click", (e) => {
      const houseId = e.target.closest(".house").dataset.id;
      const slideContent = data.find((item) => item.id == houseId);

      if (!popup) {
        document.body.insertAdjacentHTML(
          "afterbegin",
          `<div class="popup">
          
            <div class="popup__overlay">
              <div id="snow"></div>
            </div>
            <div class="popup__wrapper">
            <div class="popup__content">
            
              <div class="popup__close">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.53821 1L16 15M15.4618 1L1 15" stroke="black" />
                </svg>
              </div>

              <div class="slider">
                ${slideContent.slides.map(
                  (item) => `
                  <div class="slide">
                    <div class="slide__image">
                      <img class="slide__image" src=${item.image} alt=${item.comment}>
                    </div>
                    <div class="slide__comment">${item.comment}</div>
                  </div>`
                )}
              </div>
              <h3 class="popup__title">${slideContent.title}</h3>
              <p class="popup__text">${slideContent.text}</p>
            </div>
          </div>
        </div>`
        );

        $(".slider").slick();
        const popup = document.querySelector(".popup");
        const closeButton = document.querySelector(".popup__close");

        const overlay = document.querySelector(".popup__overlay");

        closeButton.addEventListener("click", () => {
          popup.remove();
          document.body.style.overflow = "visible";
        });

        overlay.addEventListener("click", () => {
          popup.remove();
          document.body.style.overflow = "visible";
        });
      }
    });
  });
});
