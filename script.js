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
        'videos/relapse4.mp4',
        'videos/relapse5.mp4',
        'videos/relapse6.mp4',
    ];

    if (videos.length === 0) return;

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const videoElement = document.getElementById('surpriseVideo');
    const calculator = document.querySelector('.calculator');

    // Set video
    videoElement.src = randomVideo;
    videoElement.style.display = 'block';
    videoElement.muted = false; 
    videoElement.play();

    
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
    }

    calculator.style.opacity = '0';
    setTimeout(() => {
        calculator.style.display = 'none';
        document.body.classList.add('video-active');
    }, 600);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            e.stopPropagation();
            alert("Nice try 😏");
        }
    });

   
    document.addEventListener('contextmenu', e => e.preventDefault());

  
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            videoElement.play(); 
        }
    });

    
    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            alert("Screenshot blocked. Keep gooning 🔒");
        }
    });

    
    navigator.mediaDevices.getDisplayMedia = () => {
        alert("Screen recording not allowed here 😈");
        return Promise.reject("Access denied");
    };
}


window.onload = () => {
    document.getElementById('display').value = '';
};
