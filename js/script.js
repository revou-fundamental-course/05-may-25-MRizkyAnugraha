// Fungsi Slideshow

let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Sembunyikan slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Hapus "active" dari semua dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide dan menandai active dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Manual: next/prev
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetTimer(); // restart auto slideshow
}

// Manual: dot click
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetTimer(); // restart auto slideshow
}

// Auto slideshow function
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 4000); // change every 4 seconds
}

// Reset auto slideshow timer setelah manual click
function resetTimer() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(autoSlide, 4000);
}

// Initialize
showSlides(slideIndex);
slideTimer = setTimeout(autoSlide, 4000);

// Fungsi Validation Contact Us
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Nama harus diisi");
    return false;
  }
  let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email harus diisi");
    return false;
  }
  if (x && y) {
    alert("Data berhasil di input");
    x = "";
    y = "";
    return true;
  }
}

// Fungsi Button back to top

let mybutton = document.getElementById("myBtn");

// Ketika scrolls down 20px dari atas document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ketika kllik button, scroll ke bagian atas document
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE and Opera
}
