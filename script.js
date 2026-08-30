document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle-btn');
    let currentLang = 'en'; // جعل الإنكليزية هي اللغة الافتراضية

    // دالة لتطبيق اللغة الحالية على الصفحة
    const applyLanguage = (lang) => {
        // تحديث النص داخل زر التبديل (يعرض AR عندما تكون الصفحة بالإنكليزية)
        langBtn.textContent = lang === 'en' ? 'AR' : 'EN';
        
        // تغيير اتجاه الصفحة (LTR للإنكليزية و RTL للعربية)
        document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';

        // ترجمة جميع العناصر التي تحتوي على data-ar و data-en
        const elementsToTranslate = document.querySelectorAll('[data-ar][data-en]');
        
        elementsToTranslate.forEach(element => {
            const icon = element.querySelector('i');
            const newText = element.getAttribute(`data-${lang}`);

            if (icon) {
                element.innerHTML = ''; 
                element.appendChild(icon); 
                element.appendChild(document.createTextNode(' ' + newText)); 
            } else {
                element.textContent = newText;
            }
        });
    };

    // تطبيق اللغة الإنجليزية فور تحميل الصفحة
    applyLanguage(currentLang);

    // التبديل عند الضغط على الزر
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
    });
});
