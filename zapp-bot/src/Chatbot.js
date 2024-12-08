import React, { useState } from 'react';
import { useOkto } from 'okto-sdk-react';

function ChatInterface() {
    const { authenticate } = useOkto();
    const [message, setMessage] = useState('');

    const handleConnectWallet = () => {
        // Redirect to Okto wallet for authentication
        authenticate();
    };

    const handleSendMessage = () => {
        // Handle sending the message (you can implement your logic here)
        console.log("Message sent:", message);
        setMessage(''); // Clear the input after sending
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.appName}>ZAPP</h1>
                <button style={styles.connectButton} onClick={handleConnectWallet}>
                    Connect Wallet
                </button>
            </div>
            <div style={styles.chatArea}>
                <div style={styles.messagesContainer}>
                    {/* Messages will be displayed here */}
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={styles.input}
                        placeholder="Type your message..."
                    />
                    <button style={styles.sendButton} onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        justifyContent: 'space-between',
        padding: '0', // Remove default padding
        margin: '0', // Remove default margin
        backgroundColor: '#1e1e1e',
        color: 'white',
        fontFamily: 'Arial, sans-serif', // Set a clean font
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px', // Add padding for header
        borderBottom: '1px solid #444', // Add a bottom border for separation
    },
    appName: {
        margin: 0,
        fontSize: '24px', // Increase font size for app name
    },
    connectButton: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Add transition for hover effect
    },
    connectButtonHover: {
        backgroundColor: '#0056b3', // Darker shade on hover
    },
    chatArea: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px', // Add padding for chat area
        overflowY: 'auto', // Allow scrolling for messages
    },
    messagesContainer: {
        flex: 1,
        marginBottom: '10px', // Space between messages and input
        overflowY: 'auto', // Allow scrolling for messages
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
        backgroundColor: '#2a2a2a',
        color: 'white',
        outline: 'none', // Remove outline on focus
        transition: 'border-color 0.3s', // Add transition for focus effect
    },
    inputFocus: {
        borderColor: '#007bff', // Change border color on focus
    },
    sendButton: {
        padding: '10px 15px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Add transition for hover effect
    },
    sendButtonHover: {
        backgroundColor: '#218838', // Darker shade on hover
    },
};

export default ChatInterface;