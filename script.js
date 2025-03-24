document.addEventListener("DOMContentLoaded", function () {
    // Visitor count logic
    let count = parseInt(localStorage.getItem("visitorCount")) || 0; // Ensure count is a number
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;

    // Add a hidden reset option for visitor count (Ctrl + R)
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key === "A") { // Example: Ctrl + A to reset
            localStorage.setItem("visitorCount", 0);
            document.getElementById("visitor-count").innerText = 0;
            alert("Visitor count reset to 0!");
        }
    });

    // Fetch and display services dynamically
    const services = [
        {
            title: "Software Development",
            description: "Create modern websites, apps, and custom software. Automate tasks and integrate APIs for seamless workflows.",
            image: "web-dev.jpg"
        },
        {
            title: "UI/UX Design & Branding",
            description: "Design user-friendly interfaces and build strong brand identities. Perfect for websites, apps, and logos.",
            image: "mobile-app.jpg"
        },
        {
            title: "IT Consulting & Digital Transformation",
            description: "Upgrade your business with smart IT strategies, cybersecurity, and cutting-edge AI and cloud solutions.",
            image: "it-consult.jpg"
        },
        {
            title: "Training & Talent Development",
            description: "Empower your team with training in modern tools and programming. Mentorship and internships for aspiring developers.",
            image: "talent-dev.jpg"
        },
        {
            title: "Cloud Solutions",
            description: "Build scalable and secure cloud-based applications to grow with your business.",
            image: "cloud.jpg"
        }
    ];

    const serviceList = document.getElementById("service-list");
    services.forEach(service => {
        let serviceItem = document.createElement("div");
        serviceItem.classList.add("portfolio-item");
        serviceItem.innerHTML = `
            <img src="${service.image}" alt="${service.title}" style="width:100%; border-radius:5px;">
            <h3>${service.title}</h3>
            <p>${service.description.slice(0, 100)}<span id="more-${service.title.replace(/\s+/g, '-')}" style="display: none;">${service.description.slice(100)}</span></p>
            <button onclick="toggleReadMore('${service.title.replace(/\s+/g, '-')}')" style="background: #333; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">
                Read More
            </button>
        `;
        serviceList.appendChild(serviceItem);
    });

    // Form submission logic with validation
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });

    // Scroll-to-top button logic
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.id = "scroll-to-top";
    scrollToTopButton.innerHTML = "↑";
    scrollToTopButton.style.display = "none";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "20px";
    scrollToTopButton.style.right = "20px";
    scrollToTopButton.style.padding = "10px";
    scrollToTopButton.style.background = "#333";
    scrollToTopButton.style.color = "#fff";
    scrollToTopButton.style.border = "none";
    scrollToTopButton.style.cursor = "pointer";
    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Prevent right-click context menu and show a rude prompt
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("Hey! Keep your hands to yourself! No right-clicking here!");
    });

    // Prevent keyboard shortcuts like Ctrl+C, Ctrl+X, Ctrl+A and show a rude prompt
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
            alert("Nice try, but you're not allowed to do that here. Stop being sneaky!");
        }
    });

    // Prevent touchpad zooming (pinch-to-zoom and Ctrl + Scroll) and show a rude prompt
    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
            alert("Whoa! Who said you could zoom? Cut it out!");
        }
    }, { passive: false });
});

// Read More button logic
function toggleReadMore(id) {
    const moreText = document.getElementById(`more-${id}`);
    const button = document.querySelector(`#more-${id}`).nextElementSibling;
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Read More";
    }
}
