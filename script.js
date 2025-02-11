document.getElementById('heartButton').addEventListener('click', function() {
    const wishesDiv = document.getElementById('birthdayWishes');
    const funMessage = document.getElementById('funMessage');
    const confettiCanvas = document.getElementById('confetti');

    if (wishesDiv.classList.contains('hidden')) {
        wishesDiv.classList.remove('hidden');
        funMessage.classList.remove('hidden');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        wishesDiv.classList.add('hidden');
        funMessage.classList.add('hidden');
    }
});