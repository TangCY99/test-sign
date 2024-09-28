let model;
let webcam;

async function loadModel() {
    model = await tf.loadGraphModel('model.json'); // Adjust path if necessary
    console.log('Model loaded');
}

async function startWebcam() {
    webcam = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('webcam').srcObject = webcam;

    // Example: Add logic to predict sign language
    const video = document.getElementById('webcam');
    const resultDiv = document.getElementById('result');

    // Example prediction loop (adjust as needed)
    setInterval(async () => {
        const predictions = await model.executeAsync(tf.browser.fromPixels(video));
        // Update resultDiv based on predictions
    }, 1000); // Update every second
}

window.onload = async () => {
    await loadModel();
    await startWebcam();
};
