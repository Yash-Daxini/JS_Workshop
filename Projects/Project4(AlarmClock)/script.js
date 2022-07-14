const alarmBtn = document.getElementById('alarmBtn');

var audio = new Audio('Julius_Dreisig_&_Zeus_X_Crona_-_Invisible_[NCS_Release](128k).mp3');


function ringAlarm() {
    audio.play();
}


alarmBtn.addEventListener('click', alarm);

function alarm() {
    const alarmText = document.getElementById('alarmText');

    const date = new Date(alarmText.value);
    const current = new Date();
    // console.log(date.getMilliseconds());
    // console.log(current.getMilliseconds());
    
    let now = date - current;
    console.log(now);
    if(now >= 0){
        setTimeout(() => {
            ringAlarm();
        }, now);
    }

}