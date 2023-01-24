# Item list

![Build Version](https://img.shields.io/badge/Build%20Version-v1.0alpha-red.svg?style=for-the-badge)

![Mongo Version](https://img.shields.io/badge/mongodb-v5.0.14-61DAF8?style=for-the-badge&logo=mongodb)
![Express Version](https://img.shields.io/badge/express-v4.18.2-61DAF8?style=for-the-badge&logo=express)
![Angular Version](https://img.shields.io/badge/angular-v15.1.0-61DAF8?style=for-the-badge&logo=angular)
![Node Version](https://img.shields.io/badge/node.js-v18.13.0-339933?style=for-the-badge&logo=node.js)

### Organize your daily tasks

You can create new "items" which you can use as your daily todo list! 

The project is still under construction. 

The first version is deployed in AWS: 
http://ec2-54-224-45-237.compute-1.amazonaws.com/


## Pending development: 
- Edit/update items/tasks
- Delete tasks
- Login page

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Install

Open the project in your editor and run:

```
for the frontend:
$ cd client
$ npm install

for the backend:
$ cd server
$ npm install

```

## Deployment

To run the development version:

```
$ ng serve
$ npm start
```

## Testing

```
There are 8 tests cases to validate the input of item description upon creation, 
including length validation, url validation, code and XSS validation

$ cd client
$ npm test
```

# Client Dependencies

- "angular: "15.1.0",
- "body-parser": "^1.20.1",
- "rxjs": "~7.8.0",
- "sweetalert2": "^11.7.0",
- "tslib": "^2.3.0",
- "zone.js": "~0.12.0"

# Server Dependencies

- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "mongoose": "^6.8.4"
