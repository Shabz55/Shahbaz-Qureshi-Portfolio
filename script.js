// JavaScript for smooth scroll
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-content");

    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) &&
            elementBottom >= 0
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
        element.classList.remove("hidden");
    };

    const hideScrollElement = (element) => {
        element.classList.add("hidden");
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => { 
        handleScrollAnimation();
    });

    // Run the scroll animation on initial load
    handleScrollAnimation();
});



document.addEventListener("DOMContentLoaded", function() {
    const subtitleElement = document.getElementById('hero-subtitle');

    // Clear the subtitle text immediately on page load
    subtitleElement.textContent = '';

    // Start the typing effect for the title
    typeEffect(document.getElementById('hero-title'), "Welcome to My Portfolio", 100, function() {
        // Start the typing effect for the subtitle
        typeEffect(subtitleElement, "Aspiring Computer Science Professional", 50, function() {
            // Remove the typing cursor after the last text has finished typing
            setTimeout(function() {
                subtitleElement.style.borderRight = "none";
            }, 500); // Delay before the cursor disappears
        });
    });
});

function typeEffect(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 500); // Small delay before the next text starts typing
            element.style.borderRight = "none";
        } else {
            // Remove cursor after typing is done
            element.style.borderRight = "none";
        }
    }element.textContent = ''; 
    typing();
}



