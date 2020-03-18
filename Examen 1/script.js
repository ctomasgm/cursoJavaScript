let times = new Array(12);

const changeImage = (num) => {
    if (document.getElementById(`tab${num}`).src.match('tableOff.png')) {
        document.getElementById(`tab${num}`).src = "tableOn.png";
        document.getElementById(`strTimeT${num}`).innerHTML = (getTime(num));
        document.getElementById(`priceT${num}`).innerHTML = '-';
        document.getElementById(`endTimeT${num}`).innerHTML = " ";
    }
    else {
        document.getElementById(`tab${num}`).src = "tableOff.png"
        document.getElementById(`endTimeT${num}`).innerHTML = (getTime(num));
        document.getElementById(`priceT${num}`).innerHTML = (`$${getPrice(num)}`);
    }
}

const getTime = (num) => {
    var time = new Date();
    time = time.getHours() + ':' + ("0" + time.getMinutes()).slice(-2) + ':' +
        ("0" + time.getSeconds()).slice(-2);
    return time;
}

const getPrice = (num) => {
    let pricePerSecond = 50 / 3600;
    let strTime = getDate(document.getElementById(`strTimeT${num}`).innerHTML);
    let endTime = getDate(document.getElementById(`endTimeT${num}`).innerHTML);
    let difSec = ((endTime.getTime() - strTime.getTime()) / 1000);
    return difSec * pricePerSecond;
}

const getDate = (time) => {
    var arr = time.split(":");
    var date = new Date();
    date.setHours(arr[0]);
    date.setMinutes(arr[1]);
    date.setSeconds(arr[2]);
    return date;
}
