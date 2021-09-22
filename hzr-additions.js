$(document).ready(function() {          

    /* When hovering over images, give logos a border*/    
    $('.goal-item').hover(function(){
        var imageColor = $(this).attr("data-color");
        var relatedLogo = "." + $(this).attr("data-id");
        $(relatedLogo).css('border', '4px solid' + imageColor);
    },  
                          function () {
                              var relatedLogo = "." + $(this).attr("data-id");
                              $(relatedLogo).css("border","none");
                          }
                         );


    /* When hovering over logos, give images a border and highlight container */    
    $('.org-logo').hover(function(){
        var relatedImage = "." + $(this).attr("data-id");
        $(relatedImage).css('border', '4px solid white');
        $(relatedImage).parents('.panel').css("filter", "saturate(1.5)");
    },  
                         function () {
                             var relatedImage = "." + $(this).attr("data-id");
                             $(relatedImage).css("border","none");
                             $(relatedImage).parents('.panel').css("filter", "none");
                         }
                        );
    
    /* Written by hannazrosenfeld@gmail.com (September 2021) */
});
