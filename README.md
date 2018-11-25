# Request Header Parser Microservice

API that returns information about the client that is making the request (ip address, language and software).

**Example:**

When using *GET '/api/whoami'*, you will get a response similar to the following:
```
{
    "ipaddress": "188.27.113.162",
    "language": "en-US,en;q=0.9,ro;q=0.8",
    "software": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
}
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have ***npm*** and ***nodejs*** installed on your computer.

You will also need to add a *config.json* file inside the *config* folder that is present within the project. The contents of that file should look something like the following:

```
{
    "development": {
        "PORT": 3000
    },
    "test": {
        "PORT": 3000
    }
}

```
You only need to specify the *port* for each *environment*. That port number will be used by the server at runtime.

### Installation steps

```
> git clone git@github.com:narcisneacsu194/request-header-parser-microservice.git
> cd {your_local_path}/request-header-parser-microservice
> npm install
> node server.js
```

You can then access the application with any browser or with software like Postman, using the following URL:

```
localhost:3000
```
