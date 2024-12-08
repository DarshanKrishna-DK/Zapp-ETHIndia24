import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import ChatInterface from './Chatbot'; // Update import to new name

const OKTO_CLIENT_API_KEY = "OKTO_CLIENT_API_KEY";

function App() {
    return (
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
            <ChatInterface />
        </OktoProvider>
    );
}

export default App;