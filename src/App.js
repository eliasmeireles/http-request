import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setResponse(null);

        axios.post(url, {
            username,
            password
        }).then((response) => {
            console.log(response.status)
            if (response?.status === 200) {
                setSuccess(true);
                setMessage(`Login successful!`);
                setResponse(JSON.stringify(response.data, null, 2));
            } else {
                setResponse(JSON.stringify(response, null, 2));
                setSuccess(false);
                setMessage('Login failed!');
            }
        }).catch((err) => {
            setSuccess(false);
            if (err?.response?.data) {
                setResponse(JSON.stringify(err.response.data, null, 2));
            } else {
                try {
                    setResponse(JSON.stringify(err, null, 2));
                } catch (error) {
                    setResponse(error);
                }
            }
        });

    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className={'input-container'}>
                        <label>Url: </label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className={'input-container'}>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={'input-container'}>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </header>
            <div className={'content-response'}>
                <h3 className={success ? 'success' : 'failed'}>{message}</h3>

                <div className={response != null ? "response-container" : 'hidden'}>
                    <pre className="response-json">{response}</pre>
                </div>

            </div>
        </div>
    );
}

export default App;
