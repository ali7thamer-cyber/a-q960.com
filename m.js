// 1️⃣ معلومات العيادة
const MY_WHATSAPP_NUMBER = "9647859176005"; // ضع رقمك هنا

// 2️⃣ دالة التنقل بين (حجز موعد) و (استفسار)
function openTab(tabId) {
    document.getElementById('booking').style.display = 'none';
    document.getElementById('inquiry').style.display = 'none';
    document.getElementById(tabId).style.display = 'block';
}

// 3️⃣ دالة إرسال الطلب النهائي (النمط الاحترافي بدون علامات مائلة)
function handleBookingSubmit(event) {
    event.preventDefault();

    // جلب البيانات
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;
    let phone = document.getElementById('phone').value;
    let whatsapp = document.getElementById('whatsapp').value;
    let type = document.getElementById('type').value;

    // صياغة الرسالة باستخدام علامات التنصيص العادية وعلامة +
    let message = "👋 *مرحباً، أود حجز موعد طبي:* %0A%0A" +
                  "📌 *نوع الخدمة:* " + type + " %0A" +
                  "👤 *اسم المريض:* " + name + " %0A" +
                  "🎂 *العمر:* " + age + " %0A" +
                  "📍 *المحافظة:* " + city + " %0A" +
                  "📞 *رقم الهاتف:* " + phone + " %0A" +
                  "💬 *رقم الواتساب:* " + whatsapp + " %0A%0A" +
                  "⏳ _بانتظار تأكيد الموعد من قبل العيادة._";

    alert("✅ تم تسجيل بياناتك! سيتم تحويلك للواتساب لتأكيد الطلب.");
    window.open("https://api.whatsapp.com/send?phone=" + MY_WHATSAPP_NUMBER + "&text=" + message, '_blank');
}

function handleInquirySubmit(event) {
    event.preventDefault();
    let msg = document.getElementById('msg').value;
    let message = "👋 *مرحباً، لدي استفسار:* %0A%0A💬 *الاستفسار:* " + msg;
    
    window.open("https://api.whatsapp.com/send?phone=" + MY_WHATSAPP_NUMBER + "&text=" + message, '_blank');
}