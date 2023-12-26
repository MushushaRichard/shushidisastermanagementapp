document.addEventListener('DOMContentLoaded', function () {
    const alertButton = document.getElementById('alertButton');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');

    alertButton.addEventListener('click', function () {
        showDisasterAlert(generateRandomAlert());
    });

    closeModal.addEventListener('click', function () {
        closeModalAction();
    });

    function showDisasterAlert({ type, message }) {
        alertTitle.innerHTML = `<strong>${type} Alert</strong>`;
        alertMessage.innerHTML = message;
        modal.style.display = 'block';
    }

    function closeModalAction() {
        modal.style.display = 'none';
    }

    function generateRandomAlert() {
        const types = ['Earthquake', 'Flood', 'Wildfire', 'Hurricane', 'Tornado'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        
        const magnitudes = ['Low', 'Moderate', 'High'];
        const randomMagnitude = magnitudes[Math.floor(Math.random() * magnitudes.length)];
        
        return {
            type: randomType,
            message: `Magnitude ${randomMagnitude} ${randomType} detected near your location.`
        };
    }

    // Simulate periodic alerts (every 30 seconds)
    setInterval(function () {
        showDisasterAlert(generateRandomAlert());
    }, 30000);
});
