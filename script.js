// 音を鳴らすためのライブラリ（Tone.js）を使う例
document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    
    keys.forEach(key => {
        key.addEventListener("mousedown", () => playSound(key.dataset.note));
    });

    async function playSound(note) {
        const synth = new Tone.Synth().toDestination();
        await Tone.start(); // ユーザーの操作を待機
        synth.triggerAttackRelease(note, "8n");
    }
});
