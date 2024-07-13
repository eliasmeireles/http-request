import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipIcon from './ClipIcon'


function App() {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('POST');
    const [headers, setHeaders] = useState('');
    const [pathParams, setPathParams] = useState('');
    const [queryParams, setQueryParams] = useState('');
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState<any>(null);

    const handleRequest = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setResponse(null);

        let constructedUrl = url.trim();
        if (pathParams.trim() !== '') {
            constructedUrl += '/' + pathParams.trim();
        }
        if (queryParams.trim() !== '') {
            constructedUrl += '?' + queryParams.trim();
        }

        let options = {
            method: method,
            url: constructedUrl,
            headers: headers ? JSON.parse(headers) : {},
            data: jsonInput ? JSON.parse(jsonInput) : {}
        };

        axios(options)
            .then((response) => {
                if (response?.status === 200) {
                    setResponse(JSON.stringify(response.data, null, 2));
                } else {
                    setResponse(JSON.stringify(response, null, 2));
                }
            }).catch((err) => {
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
                <form onSubmit={handleRequest}>
                    <div className="row">
                        <div className={'input-container method'}>
                            <label>Method: </label>
                            <div className="select-container">
                                <select
                                    value={method}
                                    onChange={(e) => setMethod(e.target.value)}
                                >
                                    <option value="GET">GET</option>
                                    <option value="POST">POST</option>
                                    <option value="PUT">PUT</option>
                                    <option value="DELETE">DELETE</option>
                                    {/* Add other HTTP methods as needed */}
                                </select>
                            </div>
                        </div>
                        <div className={'input-container url copy-container'}>
                            <label>URL: </label>
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                            />
                            <ClipIcon target={url}/>
                        </div>
                    </div>
                    <div className={'input-container copy-container'}>
                        <label>Path Parameters (Optional): </label>
                        <input
                            type="text"
                            value={pathParams}
                            onChange={(e) => setPathParams(e.target.value)}
                        />
                        <ClipIcon target={pathParams}/>

                    </div>
                    <div className={'input-container copy-container'}>
                        <label>Query Parameters (Optional): </label>
                        <input
                            type="text"
                            value={queryParams}
                            onChange={(e) => setQueryParams(e.target.value)}
                        />
                        <ClipIcon target={queryParams}/>

                    </div>

                    <div className={'input-container copy-container'}>
                        <label>Headers (JSON): </label>
                        <textarea
                            className="headers-json"
                            rows={2}
                            value={headers}
                            onChange={(e) => setHeaders(e.target.value)}
                        />
                        <ClipIcon target={headers}/>

                    </div>
                    <div className={'input-container copy-container'}>
                        <label>JSON Input (Optional):</label>
                        <textarea
                            className="json-body"
                            rows={4}
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                        />
                        <ClipIcon target={jsonInput}/>
                    </div>
                    <button type="submit">Send Request</button>
                </form>
            </header>
            <div className={'content-response'}>
                <div className={response != null ? "response-container copy-container" : 'hidden'}>
                    <pre className="response-json">
                        {response}
                    </pre>
                    <ClipIcon target={response} size="xl"/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default App;
