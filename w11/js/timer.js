const timer = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.TaskBarHour').innerHTML = h + ":" + m + ":" + s;
    setTimeout(timer, 1000);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.querySelector('.TaskBarDate').innerHTML = date;

}

const checkTime = (i) => {
    if (i < 10) { i = "0" + i };
    return i;
}