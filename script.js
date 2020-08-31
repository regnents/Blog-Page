function changeLang() {
    var isEN = true;
    var element = document.getElementById('lang-EN');
    var style = window.getComputedStyle(element);
    if (style.getPropertyValue('display') == "none") {
        isEN = false;
    }
    if (!isEN) {
        document.getElementById('lang-ID').style.display="None";
        document.getElementById('lang-EN').style.display="Block";
        document.getElementById("changelang-button").innerText="Change Language";
    }
    else {
        document.getElementById('lang-ID').style.display="Block";
        document.getElementById('lang-EN').style.display="None";
        document.getElementById("changelang-button").innerText="Ubah Bahasa";
    }
}