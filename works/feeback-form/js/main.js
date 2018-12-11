jQuery(document).ready(function($) {

    //Открытие и закрытие формы
    $('.feedback').click(function (){
            $('.form-feedback').css('display', 'block');
        }
    )
    $('.thanks').click(function (){
        $('.form-thanks').css('display', 'block');
    }
)
    $('.close-button').click(function (){
        $('.form-feedback').css('display', 'none');
        $('.form-thanks').css('display', 'none');
    }
)


    // Добавляем маску для поля с номера телефона
    $('#phone').mask('+7 (999) 999-99-99');
    $('#phone').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-4').css('display', 'block');
        } else {
            // $(this).css({'border' : '1px solid #9f0000'});
            $('#check-4').css('display', 'none');
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
                $('#valid').text('');
            } else {
                $(this).css({'border' : '1px solid #9f0000'});
                $('#check-3').css('display', 'none');
                $('#valid').text('Неправильно заполенное поле');
            }
        } else {
            // $(this).css({'border' : '1px solid #9f0000'});
        }
    });
    //Проверка имени
    $('#name').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-1').css('display', 'block');
        } else {
            // $(this).css({'border' : '1px solid #9f0000'});
            $('#check-1').css('display', 'none');
        }
    });
    //Проверка должности
    $('#position').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-2').css('display', 'block');
        } else {
            // $(this).css({'border' : '1px solid #9f0000'});
            $('#check-2').css('display', 'none');
        }
    });
    //Проверка текста
    $('#message').blur(function() {
        if($(this).val() != '') {
            $(this).css({'border' : '1px solid #7fbd87'});
            $('#check-5').css('display', 'block');
        } else {
            // $(this).css({'border' : '1px solid #9f0000'});
            $('#check-5').css('display', 'none');
        }
    });


    
});


// document.querySelector('#file').onchange = function(e) {
//     files = this.files;
//     // for(var i = 0; i < files.length; i++) {
//     //     document.querySelector('#file').innerHTML = files[i].name;
//     // }
//     document.querySelector('.listFiles').innerHTML = files[1].name;
// }
    