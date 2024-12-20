[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/zv-2SUYh)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17277980)
# Project Name

**Title:** Crypto Viewing Application
**Name:** Adam Amusa  
**Student ID:** G00400197  

## Application Function
### Authentication
Users must log in or signup in order to access the full functionalities of the application. User credentials are stored and validated through [Firebase](https://firebase.google.com/).
<img src="image.png" alt="alt text" style=" margin-right: 10px;">


### Explore Page
In the explore page it displays a list of cryptocurrencies along with their market data. The crypto-currencies and their market data are fetched using the [Coingecko Api](https://docs.coingecko.com/v3.0.1/reference/introduction).
<br>
![alt text](image-1.png)
<br>
Swiping on a coin reveals options to add or remove a coin from your "watchlist".
<br>
![alt text](image-2.png)
<br>
<br>
**Market Graph**
Upon selection of a coin the page redirects to the graph page, which will display the selected crypto currency's historical data of 24 hours.
and below it displays additional data about the coin.
<br>
![alt text](image-3.png)
<br>
<br>
**Add to watchlist**
<br>
![alt text](image-4.png)
<br>
When selected the crypto currency currently being viewed will be added to your list of saved crypto-currency called
"watchlist".
<br>
![alt text](image-5.png)
<br>
<br>
**Learn More about __**
<br>
![alt text](image-6.png)
<br>
Pressing this button opens up a web browser which will redirect the user to the google explorerer giving additional information about the crypto currency. This functionality is powered by Ionic's Capacitor [Browser module](https://capacitorjs.com/docs/apis/browser) which will allow for the browser to be opened on all devices no matter the platform
<br>
<br>
<br>
### Search
![alt text](image-7.png)
<br>
Pressing the search icon located on the nav bar will send you to a page with a search bar at the top of the screen. Select the searchbar then enter a valid crypto currency and press enter on your keyboard and a crypto currency matching your query will display. You can add the the coin to your watchlist by swiping or view it by tapping or clicking just like on the explore page.
<br>
### Watchlist
![alt text](image-8.png)
<br>
This page displays a list of your saved coins that are associated with your account saved on firebase. The functionalites are the same as it is on the explore page but when swiping a coin you are only given the option to delete from your watchlist.
<br>
![alt text](image-9.png)
<br>
This page only displays a logout button at the bottom of the screen

Discuss, in detail, what the application does. Add a screenshot image of the application in use. 

## Running the Application

Provide step by step instructions on how to run your applicaiton. Are there any prerequisite softwares required?

```MARKDOWN
List the instructions step by step
    1. Install Angular CLI - npm install -g @angular/cli
    2. Log in to Firebase - firebase login
    3. ionic serve
            :
            :
```

## Minimum Project Requirments

Confirm and demonstrate how you have met all minimum project requirments:

* The project, including code and documentaion, will be fully contained in the provied Git repo.
* The project **MUST** contain a working Ionic Angular app which matches the app you chose.
* The Ionic app must include the use of the Angular Router, Connection to a Backend service such as Firebase or Supabase, Use of a Capacitor native plugin.
* The app must not resemble in any way an app you have previously developed for another module or are currently developing for any project. 
* The code MUST compile. 30% grade reduction if code does not compile when I issue the ionic serve command. 
* The application code must be formatted in a consistent and standard way.
* The code must contain comments. One comment per class, method and variable at minimum.
* There must be two commits per week minimum (Note: Should be many commits per day coding).
* The documentation and commentary must be free of a grammar and speling mistakes.

## Project Requirments above and beyond

Discuss any application features or design elements that show you went above and beyone basic requirments.

## Application Architecture

Discuss in detail how the application is structured. List all pages and their purpose. List their methods and what they do. Discuss what structures are used to store data object.

Add a screenshot of the application architecture.

## Roadblocks and Unfinished Functionality

Discuss the issues you faced with creating your application. Provide possible solutions to these issues. What would you have done differently if you had to do this again? What did you not get finished?

## Resources

Provide links to resources used:

* [YouTube](https://www.youtube.com/watch?v=Y0vH5Cm3HAk) - YouTube Tutorial I found helpful
