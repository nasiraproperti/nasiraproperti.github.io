document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Data for land plots
    const landPlots = [
        {
            id: 1,
            title: "Kavling Harmoni",
            location: "Bogor, Jawa Barat",
            size: "250 m²",
            pricePerMeter: "Rp 2.500.000/m²",
            price: "Rp 625.000.000",
            status: "Available",
            image: "assets/images/land_plot_1.jpg",
            features: ["Akses Jalan Lebar", "Dekat Fasum", "View Pegunungan", "Sertifikat SHM"]
        },
        {
            id: 2,
            title: "Kavling Indah Permai",
            location: "Bandung, Jawa Barat",
            size: "300 m²",
            pricePerMeter: "Rp 3.000.000/m²",
            price: "Rp 900.000.000",
            status: "Hot Deal",
            image: "assets/images/land_plot_2.webp",
            features: ["Dekat Pusat Kota", "Lingkungan Asri", "Cocok untuk Villa", "Sertifikat SHM"]
        },
        {
            id: 3,
            title: "Kavling Sejahtera Abadi",
            location: "Bekasi, Jawa Barat",
            size: "200 m²",
            pricePerMeter: "Rp 2.000.000/m²",
            price: "Rp 400.000.000",
            status: "Available",
            image: "assets/images/land_plot_3.jpg",
            features: ["Akses Tol Mudah", "Dekat Kawasan Industri", "Bebas Banjir", "Sertifikat SHM"]
        },
        {
            id: 4,
            title: "Kavling Pesona Alam",
            location: "Depok, Jawa Barat",
            size: "350 m²",
            pricePerMeter: "Rp 2.800.000/m²",
            price: "Rp 980.000.000",
            status: "Available",
            image: "assets/images/land_plot_4.jpg",
            features: ["Dekat Universitas", "Udara Sejuk", "Cocok untuk Hunian", "Sertifikat SHM"]
        }
    ];

    // Function to render plot cards
    function renderPlotCards() {
        const plotsGrid = document.querySelector(".plots-grid");
        if (plotsGrid) {
            plotsGrid.innerHTML = landPlots.map(plot => `
                <div class="plot-card">
                    <div class="plot-card-image">
                        <img src="${plot.image}" alt="${plot.title}">
                        <span class="status-badge ${plot.status === 'Available' ? 'available' : 'hot-deal'}">${plot.status}</span>
                    </div>
                    <div class="plot-card-content">
                        <h3>${plot.title}</h3>
                        <div class="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M12 16.5c.97 0 1.75-.73 1.75-1.64 0-.9-.78-1.64-1.75-1.64S10.25 14 10.25 14.86c0 .91.78 1.64 1.75 1.64Z"/><path d="M12 2C8.5 2 5 4.5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4.5-3.5-7-7-7Z"/></svg>
                            ${plot.location}
                        </div>
                        <div class="plot-details">
                            <div class="plot-detail-item">
                                <span>Luas Tanah:</span>
                                <span>${plot.size}</span>
                            </div>
                            <div class="plot-detail-item">
                                <span>Harga per m²:</span>
                                <span>${plot.pricePerMeter}</span>
                            </div>
                        </div>
                        <div class="plot-price-total">
                            <span>Harga Total:</span>
                            <span>${plot.price}</span>
                        </div>
                        <div class="plot-features">
                            <h4>Fasilitas:</h4>
                            <div class="plot-features-list">
                                ${plot.features.map(feature => `
                                    <span class="feature-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                                        ${feature}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <button class="whatsapp-btn-card" onclick="openWhatsApp(\'${plot.title}\')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            Hubungi via WhatsApp
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    renderPlotCards();

    // WhatsApp Integration
    window.openWhatsApp = function(productName = '', isSurvey = false) {
        const whatsappNumber = "6281234567890"; // Replace with your WhatsApp number
        let message = "Halo, saya tertarik dengan informasi kavling";

        if (isSurvey) {
            message = "Halo, saya tertarik dengan survey gratis untuk investasi kavling tanah. Bisa bantu saya untuk mendapatkan rekomendasi kavling yang sesuai dengan budget dan kebutuhan saya?";
        } else if (productName) {
            message += ` ${productName}.`;
        } else {
            message += ".";
        }

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    // Floating elements for hero section (optional, can be done with CSS)
    // For simplicity, we'll keep it minimal here or rely on CSS for animations

    // Intersection Observer for scroll animations (optional, for more advanced effects)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up'); // Add a class for animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to sections or elements you want to animate on scroll
    document.querySelectorAll('.section-header, .stat-item, .plot-card, .about-item, .contact-info-card, .contact-card').forEach(el => {
        el.classList.add('hidden-on-load'); // Hide elements initially
        observer.observe(el);
    });

    // Add CSS for hidden-on-load and fade-in-up in style.css
});

