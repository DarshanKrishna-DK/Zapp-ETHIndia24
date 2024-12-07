import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import LoginPage from './LoginPage';

const OKTO_CLIENT_API_KEY = "OKTO_CLIENT_API_KEY";

function App() {
    return (
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
            <LoginPage/>
        </OktoProvider>
    );
}
export default App;