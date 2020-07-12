$(function(){
    var bgImages = ['img/bg_1.jpg', 'img/bg_2.jpg', 'img/bg_3.jpg', 'img/bg_4.jpg', 'img/bg_5.jpg', 'img/bg_6.jpg'];
    var randImages = bgImages[Math.floor(Math.random() * bgImages.length)];
    $('body').css('background-image', 'url(' + randImages + ')');
  });