const canvas = document.getElementById('stickerCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text');
const colorInput = document.getElementById('color');
const addTextBtn = document.getElementById('addText');
const downloadBtn = document.getElementById('download');

// Draw a basic funny face as default
ctx.fillStyle = '#FFB6C1';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';
ctx.font = '20px Comic Neue';
ctx.textAlign = 'center';
ctx.fillText('😄 Funny Sticker!', canvas.width / 2, canvas.height / 2);

addTextBtn.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorInput.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '24px Comic Neue';
        ctx.textAlign = 'center';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 50);
        ctx.fillText('😂', canvas.width / 2, canvas.height / 2 - 20);
    }
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'funny-sticker.png';
    link.href = canvas.toDataURL();
    link.click();
});