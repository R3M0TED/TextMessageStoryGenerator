import GetPromptContext from "./GetPromptContext";

async function RequestStory(theme) {
    const url = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR-TOKEN`
    };

    const data = {
        model: 'gpt-3.5-turbo', // or 'gpt-4'
        messages: [
            {role: 'user', content: GetPromptContext(theme)}
        ]
    };

    console.log("Making API request to ChatGPT")
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    console.log("API Response recieved from ChatGPT")

    if (response.ok) {
        const responseData = await response.json();
        const story = responseData.choices[0].message.content
        console.log(story);

        return story
    } else {
        console.error('API request failed:', response.status, response.statusText);
    }
}

export default RequestStory