let isKannada = false;
function toggleKannada(){
    isKannada = !isKannada;
    const btn = document.getElementById("kannadaBtn");
    if(isKannada){
        document.body.classList.add("kannada");
        btn.innerText = "🌐 Englishಗೆ ಬದಲಿಸಿ";
        btn.style.background = "white";
        document.getElementById("logo").innerText = "🌾 ಕೃಷಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್";
        document.getElementById("heroTitle").innerText = "ಕರ್ನಾಟಕ ರೈತರ ಸಬಲೀಕರಣ 🚜";
        document.getElementById("heroDesc").innerText = "ಲಾಭ, ಬೀಜ, ನೀರು ಮತ್ತು ಹವಾಮಾನವನ್ನು ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಲೆಕ್ಕ ಹಾಕಿ";
        document.getElementById("t1").innerText = "ಲಾಭ ಲೆಕ್ಕಾಚಾರ";
        document.getElementById("t2").innerText = "ಬೀಜ ಲೆಕ್ಕಾಚಾರ";
        document.getElementById("t3").innerText = "ನೀರಿನ ಲೆಕ್ಕಾಚಾರ";
        document.getElementById("t4").innerText = "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ";
        document.getElementById("t5").innerText = "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು";
        document.getElementById("t6").innerText = "ಸಹಾಯವಾಣಿ";
    } else { location.reload(); }
}