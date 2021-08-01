$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");
};
$('.open-popup').click(function() {
    	$('.popup_bg').fadeIn(600);
});
$('.close-popup').click(function() {
    	$('.popup_bg').fadeOut(600);
});