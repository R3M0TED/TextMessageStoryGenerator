function SetProfilePicture(gender, age){
    const profilePicture = document.querySelector('.header-contact-profile-picture')
    let dir = "/profile-pictures"

    if (gender === "m"){
        dir += "/men"
    }
    else{
        dir+= "/women"
    }

    if (age < 15){
        dir += "/young"
    }

    
    if (15 <= age && age < 30){
        dir += "/middle"
    }

    if (age >= 30){
        dir += "/old"
    }

    let randomNum =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    dir += `/pfp${randomNum}.jpg`

    console.log(dir)

    profilePicture.src = dir
}

export default SetProfilePicture;
