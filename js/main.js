
// main.js


    $(document).ready(function() {
        
        $(".myselect").select2();
        $(".order-select").select2();
        $('.chef-slider').bxSlider({
                slideWidth: 320,
                slideMargin: 20,
         
                });
        $(".to-find").mousedown(function(){
            $("body").addClass("pressed");
            });
        $(".to-find").mouseup(function(){
            $("body").removeClass("pressed");
            });
        $(".chef-button").mousedown (function(){
            $("body").addClass("pressed-chef");
            });
        $(".chef-button").mouseup(function(){
        $("body").removeClass("pressed-chef");
            });
        // $(".to-order").mousedown(function(){
        //   $("body").addClass("pressed-menu");
        //     });
        // $(".to-order").mouseup(function(){
        // $("body").removeClass("pressed-menu");
        //     });
        $(".cross").mousedown(function(){
          $(".french-menu_info").hide();
            });
        $(".about-person").mousedown(function(){
          $("body").addClass("about-person2");
            });
        $(".text-area1").mousedown(function(){
          $("body").addClass("text-area");
            });
         $(".town").mousedown(function(){
          $("body").addClass("town2");
            });
          $(".adress").mousedown(function(){
          $("body").addClass("adress2");
            });
        $(".menu").mousedown(function(){
          $("body").addClass("menu-press");
            });
        $(".menu").mouseup(function(){
        $("body").removeClass("menu-press");
            });
        $(".btn-ask").mousedown(function(){
          $("body").addClass("ask-press");
            });
        $(".btn-ask").mouseup(function(){
        $("body").removeClass("ask-press");
            });
        $(".send-button").mousedown(function(){
          $("body").addClass("menu-press");
            });
        $(".send-button").mouseup(function(){
        $("body").removeClass("menu-press");
            });
        $(".to-order").mousedown(function(){
          $("body").addClass("ask-press2");
            });
        $(".to-order").mouseup(function(){
        $("body").removeClass("ask-press2");
            });

        $(".reg_chief").mousedown(function(){
          $("body").addClass("reg-press");
            });
        $(".reg_chief").mouseup(function(){
          $("body").removeClass("reg-press");
            });
        $(".main-wrapper").click(function(){
          $("body").removeClass("dark-body");
            });

        $('.box-gum').click(function() {
            if ($("body").hasClass("dark-body")) {
                 $("body").removeClass("dark-body");
              } else {
                 // even clicks;
                 $("body").addClass("dark-body");
              }
            });
        $('#recall').click(function() {
            if ($("body").hasClass("hidden")) {
                 $("body").removeClass("hidden");
              } else {
                 // even clicks;
                 $("body").addClass("hidden");
              }
            });
        $('#menu').click(function() {
            if ($("body").hasClass("hidden")) {
                 $("body").removeClass("hidden");
              } else {
                 // even clicks;
                 $("body").addClass("hidden");
              }
            });
});
