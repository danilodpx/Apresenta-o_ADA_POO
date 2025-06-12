let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
document.getElementById('total-slides').textContent = totalSlides;
function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active','prev');
        if (i===n) slide.classList.add('active');
        else if (i<n) slide.classList.add('prev');
    });
    document.getElementById('current-slide').textContent = n+1;
    document.getElementById('prev-btn').disabled = n===0;
    document.getElementById('next-btn').disabled = n===totalSlides-1;
}
function nextSlide(){ if(currentSlide<totalSlides-1){ currentSlide++; showSlide(currentSlide);} }
function previousSlide(){ if(currentSlide>0){ currentSlide--; showSlide(currentSlide);} }
document.addEventListener('keydown', e => { if(e.key==='ArrowRight'||e.key===' ') nextSlide(); else if(e.key==='ArrowLeft') previousSlide(); });
showSlide(0);