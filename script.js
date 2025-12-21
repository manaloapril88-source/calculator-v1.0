const display = document.querySelector('.display');
const video = document.getElementById('surpriseVideo');
const calculator = document.querySelector('.calculator');
let displayValue = '';

function appendToDisplay(val) {
    displayValue += val;
    display.textContent = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    display.textContent = '0';
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.textContent;
        if (text === 'C') clearDisplay();
        else if (text === '=') calculate();
        else if (['+', '-', '×', '÷', '.'].includes(text)) appendToDisplay(text);
        else appendToDisplay(text);
    });
});

function calculate() {
    const videos = [
        'videos/download.mp4',
        'videos/download (6).mp4',
        'videos/download (4).mp4',
        'videos/download (3).mp4',
        'videos/download (2).mp4',
        'videos/download (1).mp4',
    ];

    if (videos.length === 0) return;

    const randomVid = videos[Math.floor(Math.random() * videos.length)];

    video.src = randomVid;
    video.style.display = 'block';
    video.muted = false;
    video.play();

    // Fullscreen
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();

    calculator.style.opacity = '0';
    setTimeout(() => calculator.style.display = 'none', 500);

    // === BRUTAL LOCKS ===
    blockShortcuts();
    blockContextMenu();
    blockVisibilityChange();

    // NEW: Extra anti-escape alerts
    window.addEventListener('blur', () => {
        alert('Eyes on the screen, gooner 😏 No escaping!');
        video.play();
    });
    window.addEventListener('focus', () => {
        video.play();
    });

    // Kapag tapos na yung video → balik sa calculator
    video.onended = () => {
        exitBrutalMode();
    };

    // Fallback reset after 5 mins
    setTimeout(() => {
        if (!video.paused) exitBrutalMode();
    }, 300000);
}
