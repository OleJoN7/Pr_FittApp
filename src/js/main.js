$(document).ready(function () {

    //-----PopUP------

    var popupButton = $('.popup-btn');
    popupButton.click(function () {
        $('.popup-wrap').slideToggle(500);
    });

    $('.popup .close-btn').on('click', function () {
        $('.popup-wrap').slideToggle(500);
    });

    popupButton.on('resize', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.popup .form-field').hide();
        }
    });

    //----PopUP End------------

    var flag = true;
    $('.hide-show-btn').on('click', function () {
        if (flag) {
            flag = false;
            $('.main-nav').slideToggle(500, function () {
                flag = true;
            });
        }
    });


// ---Вариант с кликом при разном разрешении------------------


    // popupButton.on('click',function(){
    //         if(window.matchMedia('(max-width: 768px)').matches) {
    //             $('.popup .form-field').hide();
    //         }
    //     });
    // popupButton.on('click',function(){
    //     if(window.matchMedia('(min-width: 769px)').matches) {
    //         $('.popup .form-field').show();
    //     }
    // });


// Сделать кнопку активной при нажатии

    var active = $(".features-list button")
    active.on('click', function () {
        $(this).addClass("active")
        active.not(this).removeClass("active");
    });


    // --------Привязать определенный элемент к клику по определенной кнопке

    $('.features-list .item').on('click', function () {
        var indexItem = $('.item').index(this);
        $('.features-description .text-block').hide(500);
        $('.features-description .text-block').eq(indexItem).show(500);
    });

});

