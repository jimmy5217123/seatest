$(document).ready(function () {
    
    $(".menu_btn").click(function (e) { 
        $(".aside").addClass("open");
    });
    $(".aside_btn").click(function (e) { 
        $(".aside").removeClass("open");
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        /*pagination: {
          el: ".swiper-pagination",
          clickable: true,  */
        
      });
    

    $(".nav .enter_btn a").click(function (e) { 
        $("html,body").animate({scrollTop:4100},1000);          
    });


    
});