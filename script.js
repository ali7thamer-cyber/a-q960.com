document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle-btn');
    let currentLang = 'ar'; // اللغة الافتراضية

    langBtn.addEventListener('click', () => {
        // التبديل بين العربية والانكليزية
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // تحديث النص داخل زر التبديل نفسه
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        
        // تغيير اتجاه الصفحة (RTL للعربية و LTR للإنكليزية)
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        // البحث عن كل العناصر التي تحتوي على data-ar و data-en
        const elementsToTranslate = document.querySelectorAll('[data-ar][data-en]');
        
        elementsToTranslate.forEach(element => {
            // حفظ أي أيقونة داخل العنصر حتى لا تضيع عند تغيير النص
            const icon = element.querySelector('i');
            const newText = element.getAttribute(`data-${currentLang}`);

            if (icon) {
                element.innerHTML = ''; // تفريغ المحتوى القديم
                element.appendChild(icon); // إعادة الأيقونة
                element.appendChild(document.createTextNode(' ' + newText)); // إضافة النص الجديد
            } else {
                element.textContent = newText;
            }
        });
    });
});