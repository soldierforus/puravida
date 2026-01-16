function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function acceptCookies() {
    const maxAge = 60 * 60 * 24 * 400; // Set cookie for 400 days
    document.cookie = `cookiesAccepted=true; path=/; max-age=${maxAge}; SameSite=Strict; Secure`;

    document.getElementById('cookie-banner').style.display = 'none';
}

window.onload = function() {
    if (getCookie('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
};
