// Website styles
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Mobile menu toggle
let menuOpen = false;
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuOpen = !menuOpen;
    hamburger.classList.toggle('active', menuOpen);
    mobileMenu.style.display = menuOpen ? 'block' : 'none';
    
    if (menuOpen) {
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
    } else {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300);
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        toggleMenu();
    }
});

// Video upload handler
function handleVideoUpload(videoId) {
    alert(`Video slot ${videoId} - You can embed YouTube videos, upload files, or add video links here.`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (menuOpen) {
                toggleMenu();
            }
        }
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


// Observe video items for scroll animations
document.querySelectorAll('.video-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});



// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});