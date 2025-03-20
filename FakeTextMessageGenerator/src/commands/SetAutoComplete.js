

async function SetAutoComplete(reset = false) {
    return new Promise(async (resolve) => {
        try {
           const messageComposer = document.querySelector('.message-composer-content')
           if (messageComposer){
            const content = messageComposer.value.trim();

            const words = content.split(" ")
            const lastWord = words[words.length - 1]

            let predictions = window.predictionary.predict(lastWord).slice(0, 3)

            const autocompleteTexts = document.querySelectorAll('.autocorrect-option')
            
            if (reset === false){
                if (predictions[0]){
                    autocompleteTexts[0].innerHTML = predictions[0]
                }
                else{
                    autocompleteTexts[0].innerHTML = " "
                }

                if (predictions[1]){
                    autocompleteTexts[1].innerHTML = predictions[1]
                }
                else{
                    autocompleteTexts[1].innerHTML = " "
                }

                if (predictions[2]){
                    autocompleteTexts[2].innerHTML = predictions[2]
                }
                else{
                    autocompleteTexts[2].innerHTML = " "
                }
            }
            else{
                autocompleteTexts[0].innerHTML = "i"
                autocompleteTexts[1].innerHTML = "the"
                autocompleteTexts[2].innerHTML = "and"
            }


           }

        } catch (error) {
            console.error('Error in SetAutoComplete:', error);
            resolve(); 
        }
    });
}

export default SetAutoComplete;