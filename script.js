$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navBar on scroll script
        if(this.scrollY > 20){
            $('.navBar').addClass("sticky");
        }else{
            $('.navBar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scrollUp').addClass("show");
        }else{
            $('.scrollUp').removeClass("show");
        }
    });

    // slide-up script
    $('.scrollUp').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navBar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navBar script
    $('.menu-btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Electrical Engineer","Fresher", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /*var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });*/
});