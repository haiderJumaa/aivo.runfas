document.addEventListener('DOMContentLoaded', function() {
    // بيانات الشهادة (يمكن استبدالها ببيانات ديناميكية من الخادم)


    // ملء بيانات الشهادة
    document.getElementById('studentNameAr').textContent = certificateData.studentNameAr;
    document.getElementById('studentNameEn').textContent = certificateData.studentNameEn;
    document.getElementById('certificateCode').textContent = certificateData.certificateCode;

    // إضافة تأثيرات حركية للعناصر
    const elements = document.querySelectorAll('.certificate-details, .course-details, .appreciation');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });

    // إضافة تأثير كتابة للنصوص
    const typeWriter = (el) => {
        const text = el.innerHTML;
        el.innerHTML = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 20);
    };

    const paragraphs = document.querySelectorAll('.course-details p, .appreciation p');
    paragraphs.forEach(p => typeWriter(p));
});