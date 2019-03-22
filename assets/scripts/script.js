//angles per unit
const seconds_angle = 360/60;
const minutes_angle = 360/(60*60);
const hours_angle = 360/(12*60*60);

const initial_angle = -90;

const seconds_hand = document.querySelector('.clock .hands.second');
const minutes_hand = document.querySelector('.clock .hands.minute');
const hours_hand = document.querySelector('.clock .hands.hour');


setInterval(() => {
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = (date.getHours()>=12?date.getHours()-12:date.getHours());

    seconds_hand.style.transform = `rotate(${-90 + seconds*seconds_angle}deg)`;
    minutes_hand.style.transform = `rotate(${-90 + (minutes*60 + seconds)*minutes_angle}deg)`;
    hours_hand.style.transform = `rotate(${-90 + ((hours*60*60 + minutes*60 + seconds)*hours_angle)}deg)`;

},500);