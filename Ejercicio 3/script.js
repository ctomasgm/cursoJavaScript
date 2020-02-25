let focoState=false
function changeImage() {
    let element = document.getElementById('foco')
    if (focoState) {
        element.src = "focoOff.png";
    } else {
        element.src = "focoOn.png";
    }
    focoState=!focoState;
}