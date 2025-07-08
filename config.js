const AUDIO_SOURCE = "https://files.catbox.moe/95jkiw.mp3   "; // Mp 3 mu
(function () {
    const video = document.createElement('video');
    video.className = 'video-bg';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.src = 'https://files.catbox.moe/1eryi1.mp4   '; // Background mu
    video.playsInline = true;
    document.body.appendChild(video);
})();
(function () {
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    document.body.appendChild(overlay);
})();
(function () {
    const container = document.querySelector('.profile-container');

    if (container) {
        container.innerHTML = `
            <div class="relative">
                <video autoplay loop muted playsinline class="profile-img w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl">
                    <source src="https://files.catbox.moe/f8pckg.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `; // Foto profile mu
    }
})();