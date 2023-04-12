# boss-counter
An app that tracks progression and improvement in the video game Dark Souls 3.

The purpose of this app is for players to use this as a game-extension. While you're playing the game you can track your progress here with things like Name, what run you're on, deaths, and notes. The app also gives info on where the bosses are, their names, health, how many souls(currency in game) they drop and what they are weak to.
The replayability in this game is one of the main reasons why I chose to create this. There are so many different outcomes and possibilities each time you play the game. So as a player, I wanted to store my progress in a database so that anytime I play I can start to track it and see how I am progressing.
I really am happy with the style of my app. I am a huge fan of simplicity and ease of access and I think both shine here. Some apps can throw too much info on a screen at one time and it can cause a user to feel lost when using it. This app is straight to the point with everything being extremely easy to understand.


HOW TO USE BOSS COUNTER:
Locations: this is the landing page. Here you will see a list of all locations(bonfires) in the game. Simply choose the location you are currently at in your game. Once you pick a location you will be redirected to that specific locations page. Here you will see all the Bosses that are in this area. Once you go to fight one of the bosses in the area simply click on that boss's name and it will bring you to a customized page of that boss. Here you can see an image of the boss(easier to tell if this is who you are fighting rather than names), a short description of info on that boss. And below, you can find your stored data. While playing the game, click on "New Run '' under the correct boss page. Enter your name and run number that you are currently on. After that you can add data by simply licking arrows to account for your deaths, as well as a notes section. Here you can add whatever you like, maybe some helpful tips and reminders to help you win. After you have defeated the boss, hit "Add Run '' and your data will be saved. If you made a mistake you can always go back and make edits to that run. Or, if you don't feel like saving that specific run you can also delete it.

A name for your Project
Boss Counter

Project Description
A place where users can track there runs on Dark Souls 3 and see how many times it took for them to beat a boss.
What technology stack(s) are you using for your frontend / backend?

backend Node front end react. MongoDB
Models including field names and their datatypes

Locations:
name: string
Boss Count: number

Bosses:
name: string
health: number
deaths: number

A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

GET routes:
/locations - home page with all locations
/cemetaryofash - 1st location players spawn in
/highwalloflothric - 2nd location
/undeadsettlement - 3rd location
/cemetaryofash/Iudex-Gundyr - first boss
/highwalloflothric/Vordt-Of-The-Boreal-Valley- second boss
/highwalloflothric/Dancer-Of-The-Boreal-Valley
*will add more locations If I have extra time.
POST- /boss/new-run - add a new run
PUT- /boss/edit-run - edit a run
DELETE- /boss/delete-run - deletes a run

Wireframes
Wireframes with basic page layouts

Screen Shot 2022-11-02 at 7 39 53 PM

Screen Shot 2022-11-02 at 7 44 35 PM

Copy and paste or drag and drop your images here.

User Stories
User stories detailing app functionality

ass a user I want to:
be able to see all locations
be able to see what bosses are in each location
to see the health of each boss
to see the amount of times I died to the boss
to be able to add runs to compare my other runs
be able to delete any run and edit them

MVP Goals
Full crud app
see all locations on home page
see all bosses in each location once visited
see all boss health
add a counter for deaths

Stretch Goals
Add a feature to select what weapon and gear you where using in the run. Add a Tips feature to each boss which will go into more detail on the boss. For example what they are weak to.
