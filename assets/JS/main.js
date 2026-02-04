

// --- භාෂාව මාරු කරන මෙනුව පාලනය (Language Menu) ---
function toggleMenu() {
    let menu = document.getElementById("subButtons"); // මෙනුව තියෙන කොටස හඳුනා ගනී
    menu.classList.toggle("show"); // මෙනුව පෙනෙන/නොපෙනෙන ලෙස මාරු කරයි (Toggle)
}

function changeLang(lang) {
    let mainBtn = document.getElementById("mainBtn"); // ප්‍රධාන භාෂා බොත්තම හඳුනා ගනී
    let title = document.getElementById("title");    // මාතෘකාව හඳුනා ගනී

    // 1. තෝරාගත් භාෂාව අනුව අකුරු වෙනස් කිරීම
    if (lang === 'si') {
        mainBtn.innerText = "භාෂාව";           // බොත්තම සිංහල කරයි
        title.innerText = "සාදරයෙන් පිළිගනිමු"; // මාතෘකාව සිංහල කරයි
    } else if (lang === 'en') {
        mainBtn.innerText = "Language";        // බොත්තම ඉංග්‍රීසි කරයි
        title.innerText = "Welcome";           // මාතෘකාව ඉංග්‍රීසි කරයි
    } else if (lang === 'ta') {
        mainBtn.innerText = "மொழி";            // බොත්තම දෙමළ කරයි
        title.innerText = "வரவேற்பு";          // මාතෘකාව දෙමළ කරයි
    }

    // 2. භාෂාව තේරූ පසු මෙනුව ඉබේම වසා දැමීම
    document.getElementById("subButtons").classList.remove("show"); // 'show' class එක ඉවත් කර මෙනුව සඟවයි
}

// පිටුවේ වෙනත් තැනක ක්ලික් කළහොත් විවෘතව ඇති මෙනු වසා දැමීම
window.onclick = function(event) {
    if (!event.target.matches('.main-btn')) { // ක්ලික් කළේ ප්‍රධාන බොත්තම නෙමෙයි නම්
        let dropdowns = document.getElementsByClassName("sub-menu"); // මෙනු සියල්ල පරීක්ෂා කරයි
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); // විවෘතව ඇති මෙනු වසා දමයි
            }
        }
    }
}

// --- පෝරමය පාලනය (Form Control) ---
function toggleForm() {
    let form = document.getElementById("formContainer"); // පෝරමය හඳුනා ගනී
    if (form.style.display === "flex") {
        form.style.display = "none"; // පෙනේ නම් සඟවයි
    } else {
        form.style.display = "flex"; // සැඟවී ඇත්නම් පෙන්වයි
    }
}

// --- භාෂා පරිවර්තන දත්ත (Language Data) ---
const translations = {
    'en': { 
        'main_title': 'Welcome to LC ONLINE', 
        'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini Installation & Accessories' 
    },
    'si': { 
        'main_title': 'LC ONLINE වෙත සාදරයෙන් පිළිගනිමු', 
        'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini සවිකිරීම සහ උපාංග' 
    },
    'ta': { 
        'main_title': 'LC ONLINE வரவேற்கிறோம்', 
        'sub_text': 'Dialog TV / Dialog Broadband / ViU Mini நிறுவல் மற்றும் பாகங்கள்' 
    }
};

// වෙබ් අඩවියේ අකුරු මාරු කරන Function එක
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]'); // 'data-key' ඇති සියලුම tags සොයයි
    elements.forEach(element => {
        const key = element.getAttribute('data-key'); // tag එකේ key එක ලබා ගනී (උදා: main_title)
        if (translations[lang][key]) {
            element.textContent = translations[lang][key]; // අදාළ භාෂාවෙන් අකුරු වෙනස් කරයි
        }
    });
}

// --- Popup පාලනය (Form Popup) ---
function openForm() {
    document.getElementById("formOverlay").style.display = "flex"; // පෝරමය සහිත Popup එක පෙන්වයි
}

function closeForm() {
    document.getElementById("formOverlay").style.display = "none"; // පෝරමය සහිත Popup එක වසා දමයි
}

// --- WhatsApp පණිවිඩය යැවීම (Send Message) ---
function sendToWhatsApp() {
    const name = document.getElementById("userName").value;   // නම ලබා ගනී
    const phone = document.getElementById("userPhone").value; // දුරකථන අංකය ලබා ගනී
    const service = document.getElementById("userService").value; // තෝරාගත් සේවාව ලබා ගනී
    const message = document.getElementById("userMessage").value; // පණිවිඩය ලබා ගනී

    const myNumber = "94711462838"; // **මෙතනට ඔයාගේ WhatsApp අංකය දාන්න** (94 සමඟ)

    // අත්‍යවශ්‍ය දත්ත පුරවා ඇත්දැයි පරීක්ෂා කිරීම
    if (name === "" || phone === "" || service === "") {
        alert("කරුණාකර නම, අංකය සහ සේවාව තෝරන්න!"); // පණිවිඩයක් පෙන්වයි
        return; // එතැනින් නවත්වයි
    }

    // WhatsApp පණිවිඩය පෙළගස්වන ආකාරය
    const url = "https://wa.me/" + myNumber + "?text=" 
        + "*LC Online Inquiry*" + "%0a%0a"               // මාතෘකාව
        + "*Name:* " + name + "%0a"                       // නම
        + "*Phone:* " + phone + "%0a"                      // අංකය
        + "*Service:* " + service + "%0a"                  // සේවාව
        + "*Message:* " + message;                         // පණිවිඩය

    window.open(url, '_blank').focus(); // WhatsApp අලුත් Tab එකක විවෘත කරයි
    closeForm(); // පෝරමය වසා දමයි
}


