function SetBatteryPercentage(amount){
    const batteryIcon = document.querySelector('.battery')

    if (amount <= 10){
        batteryIcon.classList.add("battery-low")
    }
    if (amount > 10 && amount <= 25){
        batteryIcon.classList.add("battery-quater")
    }
    if (amount > 25 && amount <= 50){
        batteryIcon.classList.add("battery-half")
    }
    if (amount > 50){
        batteryIcon.classList.add("battery-full")
    }
}

export default SetBatteryPercentage;
