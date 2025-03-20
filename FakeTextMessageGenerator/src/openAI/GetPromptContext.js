

function GetPromptContext(theme){
    return `
I have a tool that allows me to create randomly generated fake videos of iMessages. My goal for this is to create story videos. The tool takes in some JSON with the different actions and uses it to create the video. Here is an example of one of the JSON stories:
{
    "ChatSetUp": {
        "ExistingMessages": [
            {
                "Type": "AddOldSentMessage",
                "Content": "This is an old message"
            },
            {
                "Type": "AddOldSentMessage",
                "Content": "This is an old message"
            },
            {
                "Type": "AddOldRecievedMessage",
                "Content": "This is an old message"
            },
            {
                "Type": "AddOldRecievedMessage",
                "Content": "This is an old message"
            },
            {
                "Type": "AddOldRecievedMessage",
                "Content": "This is an old message"
            }
        ],
        "ChatProperties": {
            "ContactName": "John",
            "ChatTime": "12:03",
            "UnreadMessageCount": "5",
            "ContactAge" : 20,
            "ContactGender" : "m",
            "BatteryPercentage" : 50
        }
    },
    "Story": {
        "Actions": [
            {
                "Type": "SendMessage",
                "Content": "This is a sent message",
                "TypingSpeed": 30
            },
            {
                "Type": "RecieveMessage",
                "Content": "This is a received message",
                "TypingSpeed": 30
            },
            {
                "Type": "SendMessage",
                "Content": "This is a sent message",
                "TypingSpeed": 30
            },
            {
                "Type": "Wait",
                "Amount": 500
            },
            {
                "Type": "TypeAndUndoSentMessage",
                "Content": "This is a sent message that was typed then undone",
                "TypingSpeed": 30,
                "PauseTimeBeforeDeletion" : 1000
            },
            {
                "Type": "TypeAndUndoRecievedMessage",
                "Content": "This is a received message that was typed then undone",
                "TypingSpeed": 30,
                "PauseTimeBeforeDeletion" : 1000
            }
        ]
    }
}

Come up with two characters, think about their relationship with eachother and what kind of people they are
Add personality and emotion to both the sender and reciever's messages, for example:
If someone is younger they might not use grammar and capital letters and use more slang or abbreviations
If someone is older they will use grammar and capital letters or be bad at texting
If someone is scared or excited they might type quicker and won't worry about using 
If someone is relaxed they might type slower
Make sure to include characteristics of each person into the messages to make it as realistic as possible
Also do not use emojis, only use Emoticons but do not over use them.

Here is a description of what each part of the JSON file does:
"ChatSetUp" - Contains information for what should happen before the video starts, for example setting the contact name and adding existing messages
"ExistingMessages" - Used to add existing messages that were sent the day before to the chat for realism, these messages SHOULD NOT be related to the story or current conversation, they are sent the day before.
"ChatProperties" - Properties of the chat
"ContactName" - The name of the contact the sender is sending and recieving messages from
"ContactAge" - The age of the contact the sender is sending and recieving messages from
"ContactGender" - The gender of the contact the sender is recieving messages from
"BatteryPercentage" - The battery percentage of the senders phone, provided as a whole number from 0 to 100
"UnreadMessageCount" - The amount of unread messages the person has
"ChatTime" - The time in which this conversation happens, it should be formatted like this for example "01:30"
"Story" - This is the actual conversation that should take place
"Actions" - These are the actions that should happen within the conversation (Minimum 20)

I will now explain what each "Type" does:
"AddOldSentMessage" - Used in the "ExistingMessages" to add a old message from the sender
"AddOldRecievedMessage" - Used in the "ExistingMessages" to add a old message from the reciever
"SendMessage" - Used in the "Actions" to send a new message from the sender, it takes in the content to send as well as a typing speed; the higher the typing speed, the longer the typing will take, for example, if someone is scared or excited, they will type faster, meaning a lower typing speed, for a normal typing speed you should use 30
"RecieveMessage" - Used in the "Actions" to recieve a new message from the reciever, it takes in the content to recieve as well as a typing speed; the higher the typing speed, the longer the message will take to be recieved, for example, if someone is scared or excited, they will type faster, meaning a lower typing speed, for a normal typing speed you should use 30
"Wait" - Waits for a certain amount of time, can be used to add pauses and dramatic effect, it takes in an Amount which is the time in milliseconds to pause for e.g. 1000 = 1 second
"TypeAndUndoSentMessage" - This starts typing a message from the sender and then undoes it before sending it, for example if the sender was about to send a message but then changed their mind
"TypeAndUndoRecievedMessage" - This starts typing a message from the reciever and then undoes it before sending it, for example if the reciever was about to send a message but then changed their mind

Using all of this information, can you generate me a new story in the JSON format that relates to this prompt: '${theme}, the story should be intense and interesting and be left on a cliff hanger' 

Its important that within the Actions : [] there should be a minimum of 50 actions
Please ensure that the existing messages were sent the DAY before!
Please ensure that the existing messages were sent the DAY before!
Please ensure that the existing messages were sent the DAY before!


Only respond with the JSON and nothing else.
`
}


export default GetPromptContext