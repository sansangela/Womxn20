# Womxn/Hacks 2.0: I Gaucho Back
More on Devpost: https://devpost.com/software/womxn20-eka4fg

## Inspiration
Have you ever wanted to travel to a place but none of your friends wanted to go or had the same budget? Have you ever felt that your cute golden retriever wanted to play with another pal in the park? Have you ever gave up your weekend hiking plan because you couldn’t find someone to go with you? While UCSantaBarbara Reddit community is a popular place to seek solutions, it also allows people with suspicious intentions to pretend to be UCSB students, which leads to potential danger. Therefore, we want to create a platform for only UCSB students where you can find your surf buddy, your adventure partner, your movie night companion, etc. 

## What it does
Therefore, we want to create a platform for only UCSB students where you can find your surf buddy, your adventure partner, your movie night companion, etc. Because you need to sign up our website with your ucsb email, we make sure our users are real ucsb students. You will only be able to see people with similar keywords so your information and privacy is safe with us! If you are interested in meeting one of the Gauchos, you can chat with them online on our platform first before you decide whether you want to meet them in person. 
## How I built it
Teamwork is the essence. We divided our project into different parts, database, front-end, and back-end, to work more efficiently. We utilized html, pug, and css for the front-end, sqlite for the datebase, and node.js, express.js, socket.io, and aws for the back-end.

## Challenges I ran into
We use Vectorworks, a completely new application to us, to crop rectangle-shaped images to circles and add texts onto the images. 
The greatest challenge we meet is to stylize the table in Pug utilizing the CSS knowledge we have, such as adding a button at the last line of the table, aligning the texts and buttons in the center of every unit of the table, and including a lovely racoon at the top center of the webpage. 
The hard part was there weren’t many references of Pug so we were constantly googling, guessing, making mistakes until we achieved our goal. 
We use express.js framework to develop back-end and HTML and CSS for front-end.For back-end, we use SQLite as our database and filter the results that user inputted from the search bar by adding certain SQL instructions into our script. 
The most challenging step is to transfer the data between front-end and back-end. Since we sent an HTTP request in back-end to fetch our data, and the response is in JSON form, it is hard for our front-end to beautify without using any front-end framework. Thus, our back-end use the pug view engine and store the response (JSON data) into a variable and use the pug to simulate html formatting by accessing that variable.
Also, we have implemented a feature that works as a “messenger” to allow users to connect with the people they are interested in. We use socket.io extension based on express.js, and created some channels and chat rooms so that Gauchos have the opportunities to meet up with others.
Besides, we have also tried a lot of different approaches to implement our database. At the beginning of the hackathon, we chose to use AWS RDS database to store our data since it is cloud-based and is more secure. However, it really took time to set up a new EC2 instance and create and maintain the database. Therefore, we choose to use SQLite first for this hackathon. And we wish we could migrate our data to a cloud database later on.

## Accomplishments that I'm proud of
We are really proud that we are able to finish our project within such a tense time frame and we are able to build a home, a signup page, a login page, and a functioning search bar!  
## What I learned
We learned how to use the information online to help with our project, and a new language Pug. We learned a lot more about html and css. More importantly, we learned how to solve problems with teamwork and persistence. 
## What's next for Womxn20
We definitely want to improve ourselves more and next time we will be able to build something better and more powerful. 
