import AddOldSentMessage from "./AddOldSentMessage";
import AddOldRecievedMessage from "./AddOldRecievedMessage";

async function AddExistingMessages(existingMessages) {
    return new Promise(async (resolve) => {
        try {
            for (const existingMessage of existingMessages) {
                let type = existingMessage.Type;
                let content = existingMessage.Content;

                if (type === "AddOldSentMessage") {
                    await AddOldSentMessage(content);
                }
                if (type === "AddOldRecievedMessage") {
                    await AddOldRecievedMessage(content);
                }
            }
            resolve();
        } catch (error) {
            console.error('Error adding existing messages:', error);
            resolve(); 
        }
    });
}

export default AddExistingMessages;
