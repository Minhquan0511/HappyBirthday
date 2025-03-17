function handleClick() {
    alert('Happy Birthday! 🎉');
}

function showMessageBox() {
    const messageBox = document.getElementById('message-box');
    if (messageBox.classList.contains('hidden')) {
        messageBox.classList.remove('hidden'); // Show the box
    } else {
        messageBox.classList.add('hidden'); // Hide the box
    }
}