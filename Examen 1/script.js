const changeImage = (num) => {
    if (document.getElementById(`tab${num}`).src.match('tableOff.png')) {
        document.getElementById(`tab${num}`).src = "tableOn.png";
        document.getElementById(`strTimeT${num}`).innerHTML=(getTime(num));
    }
    else {
        document.getElementById(`tab${num}`).src = "tableOff.png"
        document.getElementById(`endTimeT${num}`).innerHTML=(getTime(num));
    }
}

const getTime = (num) => {
    var time = new Date();
    time = time.getHours() + ':' + ("0" + time.getMinutes()).slice(-2) + ':' +
        ("0" + time.getSeconds()).slice(-2);
    return time;
}

const getPrice = (num) => {
    let pricePerSecond = 50/3600;
    let strTime = new Date()
    let endTime = new Date()
    document.getElementById(`strTimeT${num}`).innerHTML
    document.getElementById(`endTimeT${num}`).innerHTML
}