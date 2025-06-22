document.addEventListener('DOMContentLoaded', () => {
    const downloadButtonHero = document.getElementById('downloadButton');
    const downloadButtonCta = document.getElementById('downloadButtonCta');

    // Funkcja do obsługi pobierania
    const handleDownload = () => {
        // !!! WAŻNE: ZMIEŃ TEN LINK NA RZECZYWISTY ADRES URL DO TWOJEGO PLIKU GLAUNCHER.EXE !!!
        // Najlepiej, jeśli ten link prowadzi do zaufanego źródła, np. GitHub Releases,
        // lub Twojej własnej domeny z plikiem.
        // Przykładowy bezpieczny link do GitHub Releases (ZMIEN PRAWIDLOWO!)
        window.location.href = 'https://github.com/Bananek345/Glauncher/raw/refs/heads/main/Glauncher_v2.0.exe'; 
        
        // Opcjonalnie: małe powiadomienie
        alert('Zostaniesz Przeniesiony Na Strone Pobierania GLauncher! Dziękujemy za wybranie nas!');
    };

    // Dodaj nasłuchiwanie zdarzeń dla obu przycisków
    if (downloadButtonHero) {
        downloadButtonHero.addEventListener('click', handleDownload);
    }
    if (downloadButtonCta) {
        downloadButtonCta.addEventListener('click', handleDownload);
    }
});
