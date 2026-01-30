

// multilanguage button lassana karana eka

function toggleMenu() {
    let menu = document.getElementById("subButtons");
    menu.classList.toggle("show");
}

function changeLang(lang) {
    let mainBtn = document.getElementById("mainBtn");
    let title = document.getElementById("title");

    // 1. Language eka wenas karana kalla
    if (lang === 'si') {
        mainBtn.innerText = "භාෂාව";
        title.innerText = "සාදරයෙන් පිළිගනිමු";
    } else if (lang === 'en') {
        mainBtn.innerText = "Language";
        title.innerText = "Welcome";
    } else if (lang === 'ta') {
        mainBtn.innerText = "மொழி";
        title.innerText = "வரவேற்பு";
    }

    // 2. MEKA THAMAI WADAGATHMA: Select kalama menu eka wahanna
    // 'show' class eka ain kalama menu eka aye hidden wenawa
    document.getElementById("subButtons").classList.remove("show");
}

// Page eke wena thanaka click kaloth menu eka wahanna
window.onclick = function(event) {
    if (!event.target.matches('.main-btn')) {
        let dropdowns = document.getElementsByClassName("sub-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// form ekak hadaganna vidiha lassanata

// Form eka open/close karanna
function toggleForm() {
    let form = document.getElementById("formContainer");
    if (form.style.display === "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
    }
}

// Form submission eka handle karanna
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(ev) {
    ev.preventDefault(); // Page eka refresh wena eka nawaththanawa
    let data = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            // Form eka hide karala thank you kiyana eka pennanawa
            document.getElementById("formContainer").style.display = "none";
            document.getElementById("openBtn").style.display = "none";
            document.getElementById("thankYou").style.display = "block";
        } else {
            alert("Oops! Something went wrong.");
        }
    });
});



// Language Translations
const translations = {
    'en': { 'main_title': 'Welcome to LC ONLINE', 'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini Installation & Accessories' },
    'si': { 'main_title': 'LC ONLINE වෙත සාදරයෙන් පිළිගනිමු', 'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini සවිකිරීම සහ උපාංග' },
    'ta': { 'main_title': 'LC ONLINE வரவேற்கிறோம்', 'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini நிறுவல் மற்றும் பாகங்கள்' }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Popup Functions
function openForm() {
    document.getElementById("formOverlay").style.display = "flex";
}

function closeForm() {
    document.getElementById("formOverlay").style.display = "none";
}

function sendToWhatsApp() {
    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const service = document.getElementById("userService").value; // Dropdown එකේ අගය
    const message = document.getElementById("userMessage").value;

    const myNumber = "947XXXXXXXX"; // ඔයාගේ number එක මෙතනට දාන්න

    if (name === "" || phone === "" || service === "") {
        alert("Please fill name, phone and select a service!");
        return;
    }

    // WhatsApp Message එක හදන විදිහ
    const url = "https://wa.me/" + myNumber + "?text=" 
        + "*LC Online Inquiry*" + "%0a%0a"
        + "*Name:* " + name + "%0a" 
        + "*Phone:* " + phone + "%0a" 
        + "*Service:* " + service + "%0a" 
        + "*Message:* " + message;

    window.open(url, '_blank').focus();
    closeForm();
}



