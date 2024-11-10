document.getElementById('upload').addEventListener('change', handleImageUpload);
document.getElementById('addTextBtn').addEventListener('click', addIMFText);
document.getElementById('downloadBtn').addEventListener('click', downloadImage);

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const imgElement = document.getElementById('uploadedImage');
    imgElement.src = e.target.result;
    imgElement.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function addIMFText() {
  const imfText = document.getElementById('imfText');
  imfText.style.display = 'block';
}

function downloadImage() {
  const editor = document.getElementById('editor');
  html2canvas(editor).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'edited-image.png';
    link.click();
  });
}
