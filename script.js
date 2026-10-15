
const btn = document.getElementById('myButton');
if (btn) {
    btn.addEventListener('click', function() {
        // ここにやりたい処理を書く
        alert('クリックされました！');
    });
} else {
    console.warn('Element with id "myButton" not found.');
}