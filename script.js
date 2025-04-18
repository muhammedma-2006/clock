
function updateClock() {
    const now = new Date();
    let Hours = now.getHours();
    const meridiam = Hours >= 12 ? "PM": "AM";
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2,0);
    const Minutes = now.getMinutes().toString().padStart(2,0);
    const Second = now.getSeconds().toString().padStart(2,0);
    const timing = `${Hours}:${Minutes}:${Second} ${meridiam}`;
    document.getElementById("clock").textContent = timing;
 }
 updateClock();
 setInterval(updateClock, 1000)
