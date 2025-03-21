    function changeLanguage(lang) {
        localStorage.setItem("preferredLanguage", lang);
        if (lang === "tr") {
            window.location.href = "index-tr.html";
        } else {
            window.location.href = "index.html";
        }
    }

    // Auto-load saved language
    document.addEventListener("DOMContentLoaded", function () {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "tr") {
            window.location.href = "index-tr.html";
        } else {
            window.location.href = "index.html";
        }
    });
