<h1 align="center">
  Mail Serivce
</h1>
<div align="center">
  <strong>Node.js & RabbitMQ </strong>
</div>
<br />


## Basics

Mailing service for Node.js using RabbitMQ queue

### Prerequisites

 - Latest version of Node
 - Latest version of NPM
 - Latest version of RabbitMQ

### Setup

- `npm install`
- `cp .env.example .env`
- `cp .env.test.example .env.test`

Make sure if all environment variables are set in `.env` and `.env.test`

### Run

Make sure you have done steps from [Setup](#Setup)  then execute `npm run start:dev`.

Keep in mind that some plugins will not behave as expected unless the [environment variables](#configuration) they rely upon have been set.

### Test

Make sure you have done steps from [Setup](#Setup)  then execute `npm run test:dev`.

All tests are located in `/test` directory

### Configuration

TBD

##### Advanced Usage

TBD

###  Persistence

TBD

### Deployment

TBD

## Contributing

TBD

### Documenting

TBD
