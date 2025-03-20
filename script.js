document.addEventListener("DOMContentLoaded", function () {
    // Visitor count logic
    let count = parseInt(localStorage.getItem("visitorCount")) || 0; // Ensure count is a number
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;

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
            image: "cloud.jpg"
        },
        {
            title: "Training & Talent Development",
            description: "Empower your team with training in modern tools and programming. Mentorship and internships for aspiring developers.",
            image: "mobile-app.jpg"
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
            <p>${service.description}</p>
        `;
        serviceList.appendChild(serviceItem);
    });

    // Form submission logic
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });
    // Prevent right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Prevent keyboard shortcuts like Ctrl+C, Ctrl+A, etc.
    document.addEventListener('keydown', function (e) {
        // Disable Ctrl+C, Ctrl+X, Ctrl+A
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
        }
    });
});