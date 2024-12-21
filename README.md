# Crypto Viewing Application

**Student Name:** Adam Amusa  
**Student ID:** G00400197  

## Application Function

### Authentication
Users must log in or signup in order to access the full functionalities of the application. User credentials are stored and validated through [Firebase](https://firebase.google.com/).

![Authentication Screen](image.png)

### Explore Page
In the explore page it displays a list of cryptocurrencies along with their market data. The crypto-currencies and their market data are fetched using the [Coingecko API](https://docs.coingecko.com/v3.0.1/reference/introduction).

![Explore Page](image-1.png)

Swiping on a coin reveals options to add or remove a coin from your "watchlist".

![Swipe Actions](image-2.png)

#### Market Graph
Upon selection of a coin the page redirects to the graph page, which will display the selected cryptocurrency's historical data of 24 hours and additional data about the coin.

![Market Graph](image-3.png)

#### Add to Watchlist
When selected, the cryptocurrency currently being viewed will be added to your list of saved cryptocurrencies called "watchlist".

![Add to Watchlist Button](image-4.png)
![Watchlist Confirmation](image-5.png)

#### Learn More Feature
![Learn More Button](image-6.png)

Pressing this button opens up a web browser which will redirect the user to the Google explorer giving additional information about the cryptocurrency. This functionality is powered by Ionic's Capacitor [Browser module](https://capacitorjs.com/docs/apis/browser) which allows for the browser to be opened on all devices regardless of platform.

### Search
![Search Feature](image-7.png)

Pressing the search icon located on the nav bar will send you to a page with a search bar at the top of the screen. Select the searchbar then enter a valid cryptocurrency and press enter on your keyboard and a cryptocurrency matching your query will display. You can add the coin to your watchlist by swiping or view it by tapping or clicking just like on the explore page.

### Watchlist
![Watchlist Page](image-8.png)

This page displays a list of your saved coins that are associated with your account saved on Firebase. The functionalities are the same as on the explore page but when swiping a coin you are only given the option to delete from your watchlist.

![Account Page](image-9.png)

This page only displays a logout button at the bottom of the screen. Pressing it will redirect you back to the login page and disconnect your authentication to Firebase.

### AI Assistant
![AI Assistant](image-11.png)

Selecting the "i" icon will display a chatbot that specializes in conversational abilities with a vast array of knowledge on different subjects including cryptocurrencies. You can type in the input box then select "send" to forward the message to the chatbot and the bot will respond in seconds. This AI is powered by the [Gemini API](https://ai.google.dev/api/generate-content). To close the chatbox just press the i button again.

## Running the Application

Prerequisites:
- Install [Node.js](https://nodejs.org/en)

```bash
1. git clone <repository-url>
2. cd <repository-directory>
3. npm install -g @angular/cli
4. npm install -g @ionic/cli
5. npm install -g @capacitor/cli
6. npm install -g firebase-tools
7. npm install
8. ionic serve
```

## Minimum Project Requirements

### 1. Fully Contained Project
![Project Structure](image-12.png)

All necessary files are included in the Github repository including the ionic folder `crypto-app` as well as its config files and typescript files.

### 2. Working Ionic Angular App
![Working App](image-13.png)

The application is fully functional and aligned with the chosen topic of cryptocurrency tracking.

### 3. Use of Angular Router
![Router Configuration](image-14.png)

The typescript file defines the global routes that will render a page to the user. It uses Ionic RouterModule to configure the routes and lazy load the components for each page.

**Import:**
![Router Import](image-15.png)

**Inject:**
![Router Injection](image-17.png)

**Implementation:**
![Router Implementation](image-16.png)

### 4. Connection to Backend Service
The app uses Firebase for authentication and storing user information such as saved coins.

**Configuration:**
![Firebase Config](image-18.png)

**Firebase Storage:**
![Storage Implementation](image-19.png)
![Storage Function](image-20.png)

### 5. Use of Capacitor Native Plugin
The app implements Ionic's Browser Capacitor for native browser functionality.

**Import:**
![Capacitor Import](image-21.png)

**Implementation:**
![Capacitor Implementation](image-22.png)

### 6. Unique Project
This app is unique as it represents my first time working with the Coingecko API and creating a cryptocurrency application.

### 7. Code Compilation
![Successful Compilation](image-13.png)

The code compiles without any errors.

### 8. Code Commenting
![Code Comments](image-24.png)

### 9. Consistent Code Commits
![Commit History](image-23.png)

### 10. Code Formatting Standards
- **Encapsulation:** Services are encapsulated in separated files
- **Indentation:** Using Visual Studio's built-in code formatter
- **Naming Conventions:** Classes and services are named appropriately based on functionality

## Resources

* [YouTube Tutorial](https://www.youtube.com/watch?v=Y0vH5Cm3HAk)