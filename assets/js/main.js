const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const header = document.getElementById('header');

// Mobile menu
menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

// Close menu when link clicked
navLinks.forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('active'))
);

// Scroll effects
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });

    navLinks.forEach(link =>
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${current}`
        )
    );

    header.classList.toggle('scrolled', window.scrollY > 50);
});



new ApexCharts(document.querySelector("#cgpaChart"), {
    series: [{
        name: "CGPA",
        data: [7.73, 7.88, 8.26, 8.70, 8.39]
    }],

    chart: {
        type: "area",
        height: 300,
        toolbar: { show: false },
        zoom: { enabled: false }
    },

    colors: ["#6366f1"],

    stroke: {
        curve: "smooth",
        width: 4
    },

    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.05
        }
    },

    dataLabels: { enabled: true },

    markers: { size: 5 },

    xaxis: {
        categories: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5"]
    },

    yaxis: {
        min: 7,
        max: 9
    }

}).render();