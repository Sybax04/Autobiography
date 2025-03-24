let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar ul li a');


window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;  // Middle of viewport
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let distance = Math.abs(scrollPosition - (offset + height / 2));

        if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
        }
    });

    // Reset all links to white
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Highlight only the closest section's navbar link
    if (closestSection) {
        let id = closestSection.getAttribute('id');
        let currentLink = document.querySelector(`.navbar ul li a[href="#${id}"]`);
        
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});

const audio = document.getElementById('quote-audio');
const nowPlaying = document.getElementById('now-playing');
const imageContainer = document.querySelector('.quotes-imgimg');

let isPlaying = false;
let isSpinning = false;

// 🎵 Function to start spinning and audio
function startSpinAndAudio() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        nowPlaying.textContent = "Now Playing: I've Found That Spark";
        nowPlaying.classList.add('show');
        nowPlaying.classList.remove('hide');
    }
    
    if (!isSpinning) {
        imageContainer.classList.add('spin');
        isSpinning = true;
    }
}

// 🛑 Function to stop everything
function stopEverything() {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
    isPlaying = false;

    imageContainer.classList.remove('spin');
    isSpinning = false;

    nowPlaying.textContent = 'Stopped';
    nowPlaying.classList.remove('show');
    nowPlaying.classList.add('hide');
}

// 🎯 Hover starts spin and audio (continuous)
imageContainer.addEventListener('mouseenter', startSpinAndAudio);

// 🖱️ Click to stop everything
imageContainer.addEventListener('click', stopEverything);

