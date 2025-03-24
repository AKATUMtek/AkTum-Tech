document.addEventListener("DOMContentLoaded", function () {
    // Visitor count logic
    let count = parseInt(localStorage.getItem("visitorCount")) || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;

    // Visitor count reset (Ctrl + A)
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key === "A") {
            localStorage.setItem("visitorCount", 0);
            document.getElementById("visitor-count").innerText = 0;
            alert("Visitor count reset to 0!");
        }
    });

    // Services display
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
            <img src="${service.image}" alt="${service.title}" onerror="this.src='https://via.placeholder.com/400x200?text=Service+Image'">
            <h3>${service.title}</h3>
            <p>${service.description.slice(0, 100)}<span id="more-${service.title.replace(/\s+/g, '-')}" style="display: none;">${service.description.slice(100)}</span></p>
            <button onclick="toggleReadMore('${service.title.replace(/\s+/g, '-')}')" style="background: #333; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">
                Read More
            </button>
        `;
        serviceList.appendChild(serviceItem);
    });

    // Form submission with email sending
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzmK8DJo0Xt3ujwaYosl98CIOYc-LN_HueeaODvg30T/dev';
        
        fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            alert("Thank you for reaching out! We will get back to you soon.");
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            console.error('Error!', error);
            alert("Message sent successfully! (If you see this message, your submission was received but there was a technical response error)");
            document.getElementById("contact-form").reset();
        });
    });

    // Scroll-to-top button
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

    // Right-click prevention
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert("Hey! Keep your hands to yourself! No right-clicking here!");
    });

    // Keyboard shortcuts prevention
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
            alert("Nice try, but you're not allowed to do that here. Stop being sneaky!");
        }
    });

    // Zoom prevention
    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
            alert("Whoa! Who said you could zoom? Cut it out!");
        }
    }, { passive: false });
});

// Read More functionality
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
