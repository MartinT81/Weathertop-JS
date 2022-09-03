Web-development/Programming Assignment 3 - assignment completed in JavaScript and HandleBars: Martin Taggart 20099865.

Assignment Brief:
To create an application for WeatherTop Inc. To assist WeatherTop members to submit weather readings from their station and submit via the web site. 
The application displays weather analytics for the station. This relates to multiple stations in Ireland.

Grading bands: All requirements for release 3 have been met. elements of release 3 include Time/Date stamp, Latest reading displayed withing the station, stations in alphabetical order, user edit details, a commit history for Github
in submission. The architectural structure used in the creation of this app is Model - View - Controller. 

........

Displayed Reading - 
To achieve release 3 for Reading, Code Temp and Wind Speed from Baseline to Pressure and Time/Date stamp have been included, as well as weather trends.
This is achieved via the station.js controller which receives a request from station-store.js and is rendered via station.hbs

Code examples -

line 36 to 54- controllers/station.js addReading and models/station-store.js lines 47 to 51 addReading

Lines 21 - 23 views/partials/trendchart/station.hbs weather trends are comprised of pressure, temp and wind trends accumulated and in trendchart.hbs and rendered via both the station.hbs.

Line 56 -80 Generates autoReading using the openweathermao URL. This can be found in controllers/station.js


........

Station - 
Release 3 includes Station name, latest weather such as Temp, C and F, wind on BFT, pressure and longitude and Latitude, max/min temp, wind and pressure. 
Station information and stations added are contained in models/station-store.json. including pre-populated longitudes and latitudes, temps etc. When a station is added via the app, the json file updates
with the new information provided by the user. 

Code examples-

Line 63 to 91 - Models/conversion.js converting wind speed to Beaufort. 

Line 29 to 39 - Controllers/dashboard addStation method. Line 31 - 34 models/station-store.js addStation

Line 22 -27 - controllers/dashboard deleteStation method. Line 36 - 40 - models/station-store.js removeStation.

Line 1 to 17 - views/partials/addstation.hbs is a form to create a new station this will include the imputing of station name, longitude and longitude.

Line 1 - 78 - utils/analytics.js class contains the methods used to calculate max and min temp, pressure and wind etc.

Line 37 - 47 - utils/analytics.js if statement to calculate the weather trend, which is rendered on both the dashboard view and the station view in the app by way of small blue arrows. 

........

Member/Features -
Release requirement met. The application facilitates First name Surname and the ability to edit user details, password and Stations. Here a stacked segment form is used for the user to sign up to the application.
Code examples- 
Line 1 to 25 - views/signup.hbs, a stacked segment form allowing input of their name first and last, email and password. The member can create a new station and input readings.
Sample stations will already exist upon signing up, the readings contained within are drawn from station-store.json. The user/member's details are contained in user-store.json.

user-store.js requests the information from controllers/accounts. The information associated with that account is rendered via dashboard, station etc.
a code example here would be Line 19 -25 models/user.js/getUserById and getUserByEmail which Line 89 - 94 controllers/accounts/getUserByEmail receives and is rendered after login. 

Sign Up - Via signup page, stacked segment form signup.hbs.
login - Via login page again stacked segment form login.hbs.
New station - Can be created via the stacked segment form in the dashboard, addstation.hbs

Members can create and delete stations and readings from their dashboard. Upon entering a station a summary of the latest readings will be displayed and when new
readings are entered they will display as the latest readings. Stations are displayed alphabetically. 


Line 14 to 17 - models/user-store.js, adding a new user in WeatherTop. First Name Surname , email and password (Line 27 to 32). User information is store in models/user-store.json.

Line 30 to 36 - controllers/ accounts.js, method to allow a new member to register

json - store contains various methods relating to the storage of inputted information such as user, station readings etc. 

........

Code- The project code has created in Glitch, a repository on Github created and history established.

Glitch, https://glitch.com/edit/#!/winter-held-viburnum

Github, https://github.com/MartinT81/Weathertop-JS

........

References-
The majority of the project was created using materials from lectures and labs.

https://github.com/Berncat/weathertopJS

https://semantic-ui.com/


