import SetChatName from "./SetChatName";
import SetTime from "./SetTime";
import SetUnreadMessageCount from "./SetUnreadMessageCount";
import SetupAutocomplete from "./SetupAutocomplete";
import SetBatteryPercentage from "./SetBatteryPercentage";
import SetProfilePicture from "./SetProfilePicture";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function SetChatProperties(ContactName, time, unreadMessageCount, gender, age, BatteryPercentage){
    SetChatName(ContactName);
    SetTime(time);
    SetUnreadMessageCount(unreadMessageCount);
    SetupAutocomplete()
    SetBatteryPercentage(BatteryPercentage)
    SetProfilePicture(gender, age)
    await delay(3000); 
}

export default SetChatProperties;