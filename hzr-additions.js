$(document).ready(function() {          

    $('.goal-item').hover(function(){
        var Color = $(this).attr("data-color");
        var Relative = "." + $(this).attr("data-id");
        $(Relative).css('border', '4px solid' + Color);
    },  
                          function () {
                              var Relative = "." + $(this).attr("data-id");
                              $(Relative).css("border","none");
                          }
                         );
});
