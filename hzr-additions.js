$(document).ready(function() {          
    /* When hovering over images, give logos a border*/    
    $('.goal-item').hover(
        function(){
            var imageColor = $(this).attr("data-color");
            var relatedLogo = "." + $(this).attr("data-id");
            $(relatedLogo).css('box-shadow', '0px 0px 0px 4px' + imageColor);
        },  
        function () {
            var relatedLogo = "." + $(this).attr("data-id");
            $(relatedLogo).css("box-shadow","none");
        }
    );

    /* When hovering over logos, give images a border and highlight container */    
    $(".org-logo").hover(
        function(){
            var relatedImage = "." + $(this).attr("data-id");
            $(relatedImage).addClass("image-border");
            $(relatedImage).parents(".panel").addClass("panel-saturate");
        },  
        function () {
            var relatedImage = "." + $(this).attr("data-id");
            $(relatedImage).removeClass("image-border");
            $(relatedImage).parents(".panel").removeClass("panel-saturate");
    });
    
    /* Written by hannazrosenfeld@gmail.com (September 2021) */
});

