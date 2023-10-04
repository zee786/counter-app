import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'

const PATH = '//localhost:4000';


const getCounters = (): Promise<Response> => {
    return fetch(`${PATH}/counters`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

const createUser = (
    username: string,
): Promise<Response> => {
    return fetch(`${PATH}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

const increaseCounter = (
    username: string,
): Promise<Response> => {
    return fetch(`${PATH}/counters/${username}`, {
        method: 'PUT',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}
const App: React.FC = () => {
    const [loggedInAs, setLoggedInAs] = useState<string | undefined>(undefined);
    const [username, setUsername] = useState<string>('');
    const [counters, setCounters] = useState<Record<string, number>>({});

    const login = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (username === '') {
            alert('Please enter a username');
        }
        else {
            createUser(username)
                .then((response) => setLoggedInAs(response.username))
                .then(() => fetchCounters())
                .catch(console.error);
        }
    }

    const fetchCounters = (): void => {
        getCounters()
            .then((response) => setCounters(response.counters))
            .catch(console.error);
    }

    const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setUsername(e.currentTarget.value);
    };

    const handleIncreaseCounter = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        increaseCounter(username)
            .then((response) => setCounters(response.counters))
            .catch(console.error);
    };

    const handleLogout = (): void => {
        setUsername('');
        setLoggedInAs(undefined)
    };


    const Counter = () =>
        <div id='main'>
            <h1>Counters</h1>
            <h3>Logged in as {loggedInAs} (<a href='#' onClick={handleLogout}>logout</a>)</h3>
            <div id="counter">
                {loggedInAs && (
                    <div>Current User {loggedInAs}: {counters[loggedInAs]}</div>
                )}
                {Object.keys(counters)
                    .filter(username => username !== loggedInAs)
                    .map(username => (
                        <ul>
                            <li key={username}>
                                {username}: {counters[username]}
                            </li>
                        </ul>
                    ))}
            </div> <div id="increase-counter">
                <button onClick={handleIncreaseCounter}>Click here!</button>
            </div>
        </div>



    return (
        <main className='App'>
            {
                loggedInAs === undefined
                    ? (
                        <div id='main'>
                            <h1>Welcome to the counter app</h1>
                            <div>
                                <form onSubmit={login} id='form' method="post" noValidate>
                                    <input type='text' name='username' placeholder='Username' onChange={handleUsernameChange} required />
                                    <input type='submit' value='Login' />
                                </form>
                            </div>
                        </div>
                    )
                    : <Counter />
            }
        </main>
    )
}

export default App
