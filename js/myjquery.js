//$ sign indicate that this is a jQuery object
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });

    $("#show").click(function(){
      $("p").show();
    });

    //Fadeout options
    $("#button1").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });

    //Panel slidedown
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });

    //Animate
    $(document).ready(function(){
      $("#buttonAnimate").click(function(){
        $("div").animate({left: '250px'});
      });
    });
});



