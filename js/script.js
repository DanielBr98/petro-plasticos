jQuery("document").ready(function ($) {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800);
        }
    });

    var nav = $('.cabecalho1');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("cabecalho-fixo");
            $('.logo').css("margin-top", "0px");
            $('.logo').css("margin-bottom", "0px");
            $('.logo').css("transition", "1s");
            $('.link1').css("margin-top", "20px");
            $('.link1').css("transition", "1s");
            $('.line1').css("height", "10px");
            $('.line1').css("transition", "1s");
        } else {
            nav.removeClass("cabecalho-fixo");
            $('.logo').css("margin-top", "25px");
            $('.logo').css("margin-bottom", "25px");
            $('.logo').css("transition", "1s");
            $('.link1').css("margin-top", "50px");
            $('.link1').css("transition", "1s");
            $('.line1').css("height", "20px");
            $('.line1').css("transition", "1s");
        }
    });

    var nav2 = $('.cabecalho2');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav2.addClass("cabecalho-fixo");
            $('.line1').css("height", "10px");
            $('.line1').css("transition", "1s");
        } else {
            nav2.removeClass("cabecalho-fixo");
            $('.line1').css("height", "20px");
            $('.line1').css("transition", "1s");
        }
    });

    $("#submit").click(function () {

        $("#loading").html("<div class='spinner-border text-primary' role='status'><span class='sr-only'>Loading...</span></div>")
        nm = $('#name').val()
        email = $('#email').val()
        message = $('#message').val()
        subscription = $('#subscription').val()

        setTimeout(function () {
            $.post('controller/controller.php', {
                form: "form",
                type: 1,
                name: nm,
                email: email,
                message: message,
                subscription: subscription
            }, function (data) {

                if (data == 1) {

                    $('#name').val("")
                    $('#email').val("")
                    $("#message").val("")
                    $("#msg").html("<p style='color:green'>Mensagem enviada com sucesso!</p>")
                } else {

                    $("#msg").html("<p style='color:red'>Ocorreu um problema ao enviar a mensagem! Por favor, envie novamente!</p>")
                }
            })
            $("#loading").html('')
        }, 500);
    })
});