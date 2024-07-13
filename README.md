# OAuth Login React App

This is a simple React application that provides a login page to authenticate against an OAuth server. The app allows
users to input a URL, username, and password to send a POST request to the specified OAuth server endpoint.

## Features

- User login form with URL, username, and password fields.
- Displays success or failure messages based on the server response.
- Shows detailed JSON response from the server.

## Requirements

- Node.js
- yarn
- Axios

## Getting Started

```shell
git clone https://github.com/eliasmeireles/oauth-login-test.git
cd oauth-login-test
yarn install
yarn start
```

## Docker run

````shell
docker run -p 3000:80 eliasmeireles/login-test
`````

http://localhost:3000

![login-ok.png](/doc/home.png)

![login-ok.png](/doc/login-ok.png)