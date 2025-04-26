let is24Hour = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = '';

    if (!is24Hour) {
        amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // hour '0' should be '12'
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = is24Hour 
        ? `${hours}:${minutes}:${seconds}`
        : `${hours}:${minutes}:${seconds} ${amPm}`;

    document.getElementById('clock').innerText = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', function() {
    is24Hour = !is24Hour;
    this.textContent = is24Hour ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();
