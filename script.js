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