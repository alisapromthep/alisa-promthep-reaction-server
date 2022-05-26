
## reAction (rxn)

reAction is a food allergy tracking web application that help user document what kind of food cause them to feel unwell.
It is created to make the documenting process as quick and easy as possible, because who has the time to write every details! Thus, click click, done! It is also design to be easy to look back and see your past reactions. 

## Features
- Register and log-in to create personal profile 
- Calendar visual with icons 
- Summary section, groupped by food with dates and symptoms
- View/ Add / Delete entry logs 
- Fully responsive design for Mobile-Tablet-Desktop

**Future features**
- Allergy friendly restaurant suggestions search
- Suggestions for  
- More detailed summary upon calendar-click 

## Tech Stack

**Client:** 
HTML5,CSS3,SASS,Javascript,React,NodeJS

[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass,react,nodejs,)](https://skillicons.dev)

**Server:**
NodeJS, Express, MySQL
[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql)](https://skillicons.dev)
## Run Locally

Clone the project

```bash
  git clone https://github.com/alisapromthep/alisa-promthep-reaction-client
  git clone https://github.com/alisapromthep/alisa-promthep-reaction-server
```

Go to the project directory

cd into client and cd into server folders, then install dependencies 

Install dependencies

```bash
  npm install
```

In server side 
You'll need to set up a database call : reaction.
And then run migration and seed files to set up your database.

```bash
  npx knex migrate:latest 
  npx knex seed:run 
```
Start the server on the server side 

```bash
  npm run dev 
```
Start the server on the client side 

```bash
  npm run start
```
Now the app should be live! 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Server Side 

PORT: The port on your local machine where you want to run your server. You can always use 8080.

SECRET_KEY: A random string of characters, you can generate this by running the following code in your terminal:

```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
```

DATEBASE_USERNAME & DATABASE_PASSWORD: Your mysql username and password. 

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - Amazing grahpic: http://www.freepik.com
 - All icons from: https://www.flaticon.com/
 - Thank you my BrainStation Instructors and TAs for guidances


