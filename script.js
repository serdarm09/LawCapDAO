// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(featurePosition < screenPosition) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
});

// Initialize features with opacity 0
document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s ease';
    });
});

// Geri sayım için süre ayarla
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1); // 1 gün ekle
endDate.setHours(endDate.getHours() + 2); // 2 saat ekle
endDate.setMinutes(endDate.getMinutes() + 30); // 30 dakika ekle
endDate.setSeconds(endDate.getSeconds() + 2); // 2 saniye ekle

function updateCountdown() {
    const now = new Date();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // İki haneli format için
    document.getElementById('days').innerHTML = days < 10 ? "0" + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown').innerHTML = '<h3>Launch Time!</h3>';
    }
}

// İlk çalıştırma
updateCountdown();

// Her saniye güncelle
const countdownTimer = setInterval(updateCountdown, 1000);

// Yeni özellik: Paralaks efekti
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        let speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Yeni özellik: Sayaç animasyonu
function animateNumbers() {
    const numbers = document.querySelectorAll('.animate-number');
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const duration = 2000; // 2 saniye
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            if (current < target) {
                current += increment;
                number.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        updateNumber();
    });
}

// Scroll efekti için nav kontrolü
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Observer tanımı tek bir yerde olmalı
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// DOM elementlerini kontrol ederek kullan
document.addEventListener('DOMContentLoaded', () => {
    // Timeline elementleri
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Fade-in elementleri
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Başlıklar
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.classList.add('animate-text');
    });

    // Sayaç animasyonu (tek sefer çağır)
    animateNumbers();
});

// Loading Screen - element kontrolü ekle
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 2000);
    }
});

// Scroll to top - element kontrolü ekle
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mouse hareket efekti
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.token-info');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Scroll Progress
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / windowHeight;
    scrollProgress.style.transform = `scaleX(${progress})`;
});

// Progress bar animation
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progress = progressBar.getAttribute('data-progress');
        progressBar.style.width = progress + '%';
    }
}

// DOM yüklendiğinde progress bar'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBar();
}); 
