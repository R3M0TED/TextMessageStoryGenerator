import './App.css';
import IMessageWindow from './elements/imessage-window';
import SetChatProperties from './commands/SetupChat';
import AddExistingMessages from './commands/AddExistingMessages';
import StartConversation from './commands/StartConversation';
import RequestStory from './openAI/RequestStory';

function App() {
  const InitiateConversation = async () => {
    const json = await RequestStory("test")

//     const json = `{ 
//     "ChatSetUp": {
//         "ExistingMessages": [
//             {
//                 "Type": "AddOldSentMessage",
//                 "Content": "This is an old message"
//             },
//             {
//                 "Type": "AddOldSentMessage",s
//                 "Content": "This is an old message"
//             },
//             {
//                 "Type": "AddOldRecievedMessage",
//                 "Content": "This is an old message"
//             },
//             {
//                 "Type": "AddOldRecievedMessage",
//                 "Content": "This is an old message"
//             },
//             {
//                 "Type": "AddOldRecievedMessage",
//                 "Content": "This is an old message"
//             }
//         ],
//         "ChatProperties": {
//             "ContactName": "John",
//             "ChatTime": "12:03",
//             "UnreadMessageCount": "5",
//             "ContactAge" : 20,
//             "ContactGender" : "m",
//             "BatteryPercentage" : 50
//         }
//     },
//     "Story": {
//         "Actions": [
//             {
//                 "Type": "SendMessage",
//                 "Content": "This is a sent message",
//                 "TypingSpeed": 30
//             },
//             {
//                 "Type": "RecieveMessage",
//                 "Content": "This is a received message",
//                 "TypingSpeed": 30
//             },
//             {
//                 "Type": "SendMessage",
//                 "Content": "This is a sent message",
//                 "TypingSpeed": 30
//             },
//             {
//                 "Type": "Wait",
//                 "Amount": 500
//             },
//             {
//                 "Type": "TypeAndUndoSentMessage",
//                 "Content": "This is a sent message that was typed then undone",
//                 "TypingSpeed": 30,
//                 "PauseTimeBeforeDeletion" : 1000
//             },
//             {
//                 "Type": "TypeAndUndoRecievedMessage",
//                 "Content": "This is a received message that was typed then undone",
//                 "TypingSpeed": 30,
//                 "PauseTimeBeforeDeletion" : 1000
//             }
//         ]
//     }
// }
// `


    let jsonObj = JSON.parse(json)

    let ChatSetUp = jsonObj.ChatSetUp
    let ChatProperties = ChatSetUp.ChatProperties
    let ContactName = ChatProperties.ContactName
    let ContactGender = ChatProperties.ContactGender
    let ContactAge = ChatProperties.ContactAge
    let BatteryPercentage = ChatProperties.BatteryPercentage

    let ChatTime = ChatProperties.ChatTime
    window.ChatTime = ChatTime
    let UnreadMessageCount = ChatProperties.UnreadMessageCount
    let ExistingMessages = ChatSetUp.ExistingMessages

    let Story = jsonObj.Story
    let Actions = Story.Actions
    
    await SetChatProperties(ContactName, ChatTime, UnreadMessageCount, ContactGender, ContactAge, BatteryPercentage);
    await AddExistingMessages(ExistingMessages);
    await StartConversation(Actions)
  };
  
  
  return (
    <div className="window">
        <IMessageWindow></IMessageWindow>
        <button className="button" onClick={InitiateConversation}>Start</button>

    </div>
  );
}

export default App;
