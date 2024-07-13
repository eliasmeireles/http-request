# React HTTP Request App

This is a simple React application that provides a user interface for making HTTP requests. The app allows users to
input a URL, method, headers, path parameters, query parameters, and request body to send a request to a specified
endpoint.

## Features

- User interface to input URL, method, headers, path parameters, query parameters, and request body.
- Displays success or failure messages based on the server response.
- Shows detailed JSON response from the server.
- Clipboard icons for easy copying of inputs and responses.
- Toast notifications for successful copy actions.

## Getting Started

Clone the repository and install the dependencies using Yarn:

```shell
git clone https://github.com/eliasmeireles/http-request.git
cd http-request
yarn install
yarn start
```

## Docker run

- To run the application using Docker, use the following command:

````shell
docker run -p 3000:80 eliasmeireles/http-request
`````

Access the application at http://localhost:3000/

![login-ok.png](/doc/get.png)

![login-ok.png](/doc/post.png)