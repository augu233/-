let slideBoolen = false;
$('.right-nav').click(function(){
    if(slideBoolen === false){
        $('.slide-down').stop().slideDown();
        slideBoolen = true;
        console.log(slideBoolen)
    }else{
        $('.slide-down').stop().slideUp();
        slideBoolen = false;
    }
})
