$(document).ready(function() {          

    /* When hovering over images, give logos a border*/    
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


    /* When hovering over logos, give images a border and highlight container */    
    $('.org-logo').hover(function(){
        var Relative = "." + $(this).attr("data-id");
        $(Relative).css('border', '4px solid white');
        $(Relative).parent().parent().parent().parent().css("filter", "saturate(1.5)");
    },  
                         function () {
                             var Relative = "." + $(this).attr("data-id");
                             $(Relative).css("border","none");
                             $(Relative).parent().parent().parent().parent().css("filter", "none");
                         }
                        );
    
    /* Written by hannazrosenfeld@gmail.com (September 2021) */
});
