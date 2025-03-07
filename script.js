// Функция для закрытия рекламного всплывающего окна
function closeAd() {
    document.getElementById('popup-ad').style.display = 'none';
}

// Отображение рекламного баннера через 5 секунд
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup-ad').style.display = 'block';
    }, 5000);
};
