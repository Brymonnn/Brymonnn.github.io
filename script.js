document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    const message = this.querySelector('.message');
    message.classList.toggle('hidden');
});

document.getElementById('surpriseBtn').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');
});
