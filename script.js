// Thêm hiệu ứng cuộn cho navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Xử lý dropdown trên thiết bị di động
if (window.innerWidth <= 1000) {
    document.querySelectorAll('.dropbtn').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const dropdownContent = item.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });
}