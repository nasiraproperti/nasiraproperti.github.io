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
            location: "Sukamakmur, Bogor Timur, Jawa Barat",
            desk: "Kenapa HARUS Ambil Sekarang? \n ✔ Legalitas lengkap + aman 100% \n✔ Tanaman produktif siap panen ✔ Bonus pohon mangga, tabebuya, gazebo kayu, pagar, dll! ✔ Fasilitas kece: Rainbow Slide, Mini Golf, play groun, Mushola, dll!✔ Track record TERBUKTI – 11 proyek SOLD OUT! ✔ Dekat tempat wisata hits Jonggol!",
            size: "100 m²",
            pricePerMeter: "Rp 730.000/m²",
            price: "Rp 73.000.000",
            status: "Available",
            image: "assets/images/harmoni horizon.jpeg",
            features: ["Akses Jalan Lebar", "Dekat Fasum", "View Citylight", "Dekat Air Terjun", "Legalitas AJB",]
        },
        {
            id: 2,
            title: "Kavling Nazra",
            location: "Klapanunggal, Bogor Timur, Jawa Barat",
            desk: "BISA DI BANGUN RUMAH TEMPAT TINGGAL, BERKEBUN MAUPUN INVESTASI Lokasi 30 mnt dari pintu tol Cibubur 30 mnt dari pintu tol gunung putri 25 mnt dari pintu tol Nagrak kota wisata cibubur 30 mnt dari stasiun nambo",
            size: "100 m²",
            pricePerMeter: "Rp 690.000/m²",
            price: "Rp 69.000.000",
            status: "Hot Deal",
            image: "assets/images/nazra1.jpeg",
            features: ["Dekat Pusat Kota", "Lingkungan Asri", "Cocok untuk Villa","Cocok untuk Tempat Tinggal", "View Citylight", "Legalitas AJB"]
        },
        {
            id: 3,
            title: "Kavling Rajeg",
            location: "Kabupaten Tanggerang, Banten",
            desk: "Kesempatan terbatas buat Anda dapatkan tanah strategis dengan return investasi tinggi di rajeg, kab Tangerang.",
            size: "60 m²",
            pricePerMeter: "-",
            price: "Rp 75.000.000",
            status: "Available",
            image: "assets/images/rajeg1.jpeg",
            features: ["Akses Tol Mudah", "Dekat Akses Bandara","Lokasi Pinggiran Kota", "Dekat Tol Kaltara", "Bebas Banjir", "Legalitas AJB"]
        },
        {
            id: 4,
            title: "Kavling Hajawong",
            location: "Sukamakmur, Bogor Timur, Jawa Barat",
            desk: "Dengan View ICONIK GUNUNG HANJAWONG! Menghadirkan suasana Hunian/villa alami dengan menggabungkan arsitektur Rustic yang hangat dengan elemen kayu, batu alam, dan nuansa earthy ke dalam konsep yang menyatu dengan alam pegunungan",
            size: "100 m²",
            pricePerMeter: "Rp 680.000/m²",
            price: "Rp 68.000.000",
            status: "Available",
            image: "assets/images/hanjaong2.jpeg",
            features: ["Row Jalan lebar 6 meter di cor beton", "Jaringan Listrik Underground (area atas)", "Tersedia Kawasan Wisata", "Free Rumput Jepang/gajah", "Tersedia Resto berkonsep Barn", "Zona Kuning Bisa dibangun Permanen", "Gerbang Masuk dan Gapura", "Area Berkuda dan Mini Zoo", "Gapura dan Kincir Angin", "Mini Golf dan Tennis Area", "Free Perawatan lahan 2 Tahun", "PJU dan dll."]
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
                        <div class="location">
                            ${plot.desk}
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
        const whatsappNumber = "6281539260777"; // Replace with your WhatsApp number
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

