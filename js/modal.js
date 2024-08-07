document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('reservationModal').style.display = 'none';
    });

    document.querySelectorAll('.event-section button').forEach((button, index) => {
        button.addEventListener('click', function() {
            const eventType = this.closest('.event-section').querySelector('h1').textContent;
            document.getElementById('eventType').textContent = eventType;
            document.getElementById('eventTypeInput').value = eventType;
            document.getElementById('reservationModal').style.display = 'block';
        });
    });

    // Fechar o modal quando clicar fora dele
    window.onclick = function(event) {
        if (event.target === document.getElementById('reservationModal')) {
            document.getElementById('reservationModal').style.display = 'none';
        }
    }
});
