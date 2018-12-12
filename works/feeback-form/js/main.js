jQuery(document).ready(function($) {

    //Открытие и закрытие формы
    $('.feedback').click(function (){
            $('.form-feedback').css('display', 'block');
        }
    )
    $('.thanks').click(function (){
        $('.form-thanks').css('display', 'block');
    });
    $('.close-button').click(function (){
        $('.form-feedback').css('display', 'none');
        $('.form-thanks').css('display', 'none');
    });
    $('#buttonClose').click(function (){
        $('.form-feedback').css('display', 'none');
    });
    


    // Добавляем маску для поля с номера телефона
    $('#phone').mask('+7 (999) 999-99-99');
    $('#phone').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-4').css('display', 'block');
            $('.valid-phone').text('');
        } else {
            $(this).css({'border' : '1px solid #9f0000'});
            $('#check-4').css('display', 'none');
            $('.valid-phone').text('Неправильно заполенное поле');
        }
    });

    // Проверка отмечен ли чекбокс согласия
    // с обработкой персональных данных
    $('#check').on('click', function() {
        if ($("#check").prop("checked")) {
            $('#button').attr('disabled', false);
        } else {
            $('#button').attr('disabled', true);
        }
    });
    // Проверка email
    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #7fbd87'});
                $('#check-3').css('display', 'block');
                $('.valid-email').text(''); 
            } else {
                $(this).css({'border' : '1px solid #9f0000'});
                $('#check-3').css('display', 'none');
                $('.valid-email').text('Неправильно заполенное поле');      $('#form-label-emeil').css('position','absolute');
                $('#form-label-emeil').css('top','-15px');
                $('#form-label-emeil').css('left','0');
                $('#form-label-emeil').css('font-size','10px'); 
            }
        } else {
            $(this).css({'border' : '1px solid #9f0000'});
            $('.valid-email').text('Неправильно заполенное поле');
        }
    });
    //Проверка имени
    $('#name').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-1').css('display', 'block');
            $('.valid-name').text('');
        } else {
            $(this).css({'border' : '1px solid #9f0000'});
            $('#check-1').css('display', 'none');
            $('.valid-name').text('Неправильно заполенное поле');
        }
    });
    //Проверка должности
    $('#position').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-2').css('display', 'block');
            $('.valid-position').text('');
        } else {
            $(this).css({'border' : '1px solid #9f0000'});
            $('#check-2').css('display', 'none');
            $('.valid-position').text('Неправильно заполенное поле');
        }
    });
    //Проверка текста
    $('#message').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-5').css('display', 'block');
            $('.valid-message').text('');
        } else {
            $(this).css({'border' : '1px solid #9f0000'});
            $('#check-5').css('display', 'none');
            $('.valid-message').text('Неправильно заполенное поле');
        }
    });


    
});

$('.attach').each(function() { // на случай, если таких групп файлов будет больше одной
    var attach = $(this),
      fieldClass = 'attach__item', // класс поля
      attachedClass = 'attach__item--attached', // класс поля с файлом
      fields = attach.find('.' + fieldClass).length, // начальное кол-во полей
      fieldsAttached = 0; // начальное кол-во полей с файлами
  
    var newItem = '<div class="attach__item"><label><img src="img/plus.png" class="attach__up"><input class="attach__input" type="file" name="files[]" /></label><div><span class="attach__name"></span><img src="img/cancel.png" class="attach__delete"></div></div>'; // разметка нового поля
  
    // При изменении инпута
    attach.on('change', '.attach__input', function(e) {
      var item = $(this).closest('.' + fieldClass),
        fileName = '';
        $('.attach__head').css('display','block');
        $('.attach__head').text('Прикрепленные файлы:');
        $('.attach__up_start').css('display','none');
        
      if (e.target.value) { // если value инпута не пустое
        fileName = e.target.value.split('\\').pop(); // оставляем только имя файла и записываем в переменную
      }
      if (fileName) { // если имя файла не пустое
        item.find('.attach__name').text(fileName); // подставляем в поле имя файла
        if (!item.hasClass(attachedClass)) { // если в поле до этого не было файла
          item.addClass(attachedClass); // отмечаем поле классом
          fieldsAttached++;
        }
        if (fields < 5 && fields == fieldsAttached) { // если полей меньше 5 и кол-во полей равно
          item.after($(newItem)); // добавляем новое поле
          fields++;
        }
      } else { // если имя файла пустое
        if (fields == fieldsAttached + 1) {
          item.remove(); // удаляем поле
          fields--;
        } else {
          item.replaceWith($(newItem)); // заменяем поле на "чистое"
        }
        fieldsAttached--;
  
        if (fields == 1) { // если поле осталось одно
          attach.find('.attach__up').text('Загрузить файл'); // меняем текст
        }
      }
    });
  
    // При нажатии на "Удалить"
    attach.on('click', '.attach__delete', function() {
      var item = $(this).closest('.' + fieldClass);
      if (fields > fieldsAttached) { // если полей больше, чем загруженных файлов
        item.remove(); // удаляем поле
        fields--;
      } else { // если равно
        item.after($(newItem)); // добавляем новое поле
        item.remove(); // удаляем старое
      }
      fieldsAttached--;
      if (fields == 1) { // если поле осталось одно
        attach.find('.attach__up').text('Загрузить файл'); // меняем текст
      }
    });
  });