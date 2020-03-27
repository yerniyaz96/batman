$(document).ready(function () {
  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function (event) {
    event.preventDefault(); 
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  });
});

$('.more').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});