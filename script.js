
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // 3秒ごとに画像を変更
}



document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('show');
});




function changeColor(image) {
  // クリックされた画像に 'changed-color' クラスがなければ追加
  if (!image.classList.contains('changed-color')) {
      image.classList.add('changed-color');
  }
}
