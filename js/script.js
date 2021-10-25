$("#toggleicon").click(function(){
    $("#sh_ul").slideToggle();

 });

 //$("#toggleicon").click(function(){
   // $("#sh_ul").toggle({
     //   direction:"right"
    //},3000)

 //});

$(document).ready(function(){       
  var screen = 0;
  $(document).scroll(function() { 
      screen = $(this).scrollTop();
      if(screen > 110) {
          $("nav").css('background-color', '#1f2627');
      } else {
          $("nav").css('background-color', 'transparent');
      }
  });
});
