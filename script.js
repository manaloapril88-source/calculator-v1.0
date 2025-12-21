let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    const videos = [
        'videos/relapse1.mp4',
        'videos/relapse2.mp4',
        'videos/relapse3.mp4',
        // Idagdag mo pa yung iba
    ];

    if (videos.length === 0) return;

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const videoElement = document.getElementById('surpriseVideo');
    
    videoElement.src = randomVideo;
    videoElement.style.display = 'block';
    videoElement.play();

    // Fullscreen
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    }

    // Hide calculator
    document.querySelector('.calculator').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.calculator').style.display = 'none';
    }, 500);
}

// Reset display to 0 on load
window.onload = () => {
    document.getElementById('display').value = '';
};
