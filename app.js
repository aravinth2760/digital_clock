const updateTime = () => {
    const timingEle = document.getElementById('timing');
    const fullDate = new Date();
    const greetingEle = document.getElementById('greeting');

    let n = fullDate.toLocaleString([], {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    timingEle.innerHTML = n;

    const hour = fullDate.getHours();
    if (hour < 12) greetingEle.innerHTML = 'Morning';
    else if (hour >= 12 && hour <= 17) greetingEle.innerHTML = 'Afternoon';
    else if (hour > 17) greetingEle.innerHTML = 'Evening';
    else greetingEle.innerHTML = 'Night';
}

(() => {
    setInterval(updateTime, 1000);
})();