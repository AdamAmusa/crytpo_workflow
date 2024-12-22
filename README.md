# Crypto Viewing Application

**Student Name:** Adam Amusa  
**Student ID:** G00400197  

## Application Function

### Authentication
Users must log in or signup in order to access the full functionalities of the application. User credentials are stored and validated through [Firebase](https://firebase.google.com/).

![Authentication Screen](images/image.png)

### Explore Page
In the explore page it displays a list of cryptocurrencies along with their market data. The crypto-currencies and their market data are fetched using the [Coingecko API](https://docs.coingecko.com/v3.0.1/reference/introduction).

![Explore Page](images/image-1.png)

Swiping on a coin reveals options to add or remove a coin from your "watchlist".

![Swipe Actions](images/image-2.png)

#### Market Graph
Upon selection of a coin the page redirects to the graph page, which will display the selected cryptocurrency's historical data of 24 hours and below it displays additional data about the coin.

![Market Graph](images/image-3.png)

#### Add to Watchlist
When selected, the cryptocurrency currently being viewed will be added to your list of saved cryptocurrencies called "watchlist".

![Add to Watchlist Button](images/image-4.png)
![Watchlist Confirmation](images/image-5.png)

#### Learn More Feature
![Learn More Button](images/image-6.png)

Pressing this button opens up a web browser which will redirect the user to the Google explorer giving additional information about the cryptocurrency. This functionality is powered by Ionic's Capacitor [Browser module](https://capacitorjs.com/docs/apis/browser) which allows for the browser to be opened on all devices regardless of platform.

### Search
![Search Feature](images/image-7.png)

Pressing the search icon located on the nav bar will send you to a page with a search bar at the top of the screen. Select the searchbar then enter a valid cryptocurrency and press enter on your keyboard and a cryptocurrency matching your query will display. You can add the coin to your watchlist by swiping or view it by tapping or clicking just like on the explore page.

### Watchlist
![Watchlist Page](images/image-8.png)

This page displays a list of your saved coins that are associated with your account saved on Firebase. The functionalities are the same as on the explore page but when swiping a coin you are only given the option to delete from your watchlist.

![Account Page](images/image-9.png)

This page only displays a logout button at the bottom of the screen. Pressing it will redirect you back to the login page and disconnect your authentication to Firebase.

### AI Assistant
![AI Assistant](images/image-11.png)

Selecting the "i" icon will display a chatbot that specialises in conversational abilities with a vast array of knowledge on different subjects including crypto-currencies. You can type in the input box then select "send" to forward the message to the chatbot and the bot will respond in seconds. This AI is powered by the [Gemini API](https://ai.google.dev/api/generate-content). To close the chatbox just press the i button again.

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
![Project Structure](images/image-12.png)

All necessary files are included in the Github repository including the ionic folder `crypto-app` as well as its config files and typescript files.

### 2. Working Ionic Angular App
![Working App](images/image-13.png)

From the image above you can see that the application is working and running and as you can see from the list of crypto currencies it aligns with the topic I chose which was a crypto app.

### 3. Use of Angular Router
![Router Configuration](images/image-14.png)

The typescript file above defines the global routes that will render a page to the user. It uses Ionic RouterModule to configure the routes and lazy load the componentes for each page. The routes include the paths for the home page as well as its children routes, the coinview page and the login page. The pages contain route guards which block users which arent signed in from accessing the page. These paths are then used when using Angular Router.

**Import:**
<br>
![Router Import](images/image-15.png)

**Inject:**
<br>
![Router Injection](images/image-17.png)

**Implementation:**
<br>
![Router Implementation](images/image-16.png)

### 4. Connection to Backend Service
The app uses firebase to handle authentication an store user information such as the user's saved coins.


**Configuration:**
<br>
![Firebase Config](images/image-18.png)

- In `main.ts` it initialises the connection to the firebase account and project and sets up the firebase services that will be implemented in the angular app.

**Firebase Storage:**
<br>
![Storage Implementation](images/image-19.png)

 - The service code stub above uses firestore services to fetch a document from the database and retrieve its data using an observable to receive up-to date data.

![Storage Function](images/image-20.png)

  - The code snippet of the function highlights the implementation of firebase's storage services to store coinId's under the user's unique id in the firestore document.


### 5. Use of Capacitor Native Plugin
This app uses Ionic's Browser Capacitor to access the native functionality of opening a browser on a mobile device.

**Import:**
<br>
![Capacitor Import](images/image-21.png)

**Implementation:**
<br>
![Capacitor Implementation](images/image-22.png)

### 6. Unique Project
  - This app shouldn't resemble any project that I have made as this is the first time I have ever used the coingecko API as well as creating a crypto application.

### 7. Code Compilation
![Successful Compilation](images/image-13.png)

The code compiles without any errors.

### 8. Code Commenting
![Code Comments](images/image-24.png)

### 9. Consistent Code Commits
![Commit History](images/image-23.png)

### 10. Code Formatting Standards
- **Encapsulation**: Services are encapsulated in seperated files to allow for convinient and easy use of them throughout the application.
- **Indentation**: I use Visual Studio's build in code formatter to indent my code in a readable format.
- **Naming Conventions**: Classes and services are named appropriately based on their functionality or page name, to allow for easy context gathering when reading over the code.

## Project Requirements above and beyond
### Crypto Graph
- In `crypto-graph.component.ts` I implemented [ChartJs's ](https://www.chartjs.org/) charting library to build a line graph representing historical data of a coin over the last 24 hours. The chart data is fetched from CoinGecko's API and mapped into the data properties.  I also implemented a custom plugin which displays a vertical dash line when a mouse or a finger is dragged along the canvas. That custum plugin solution was supplied by an answer from [Stack Overflow](https://stackoverflow.com/questions/56793332/add-horizontal-crosshairs-using-chart-js). 

      this.chartInstance = new Chart(this.cryptoChart?.nativeElement, {
        type: 'line',
        data: {
          labels: data.prices.map((price: any) => new Date(price[0]).toLocaleTimeString()),
          datasets: [
            {
              hoverBorderJoinStyle: 'round',
              borderJoinStyle: 'round',
              label: 'Price',
              data: data.prices.map((price: any) => price[1]),
              borderColor: this.lineColor,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: false,
              pointRadius: 0,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: this.lineColor,
              borderWidth: 2,

            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          layout: {
            
            padding: {
              left: 10,
              right: 10,
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              position: 'nearest',
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleColor: 'white',
              bodyColor: 'white',
              borderColor: 'blue',
              borderWidth: 1,
              callbacks: {
                title: (context) => {
                  return context[0].label; // Show the timestamp
                },
                label: (context) => {
                  return `Price: $${context.parsed.y.toFixed(2)}`;
                }
              }
            }
          },
          scales: {
            x: {
              title: {
                display: false,
                text: 'Time'
              },
              grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true
              },
              
            },
            y: {
              title: {
                display: true,
                text: 'Price ($)'
              },
              beginAtZero: false,
              grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true
              }
            }
          }
        },
        //Dashed line custom plugin
        plugins: [{
          id: 'customCrosshair',
          afterDraw: (chart) => {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const scales = chart.scales;

            // Get the active elements (hovered elements)
            const activeElements = chart.getActiveElements();

            if (activeElements.length > 0) {
              const dataIndex = activeElements[0].index;
              const xScale = scales['x'];

              // Draw vertical line
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(xScale.getPixelForValue(dataIndex), chartArea.bottom);
              ctx.lineTo(xScale.getPixelForValue(dataIndex), chartArea.top);
              ctx.strokeStyle = 'white';
              ctx.lineWidth = 1;
              ctx.setLineDash([5, 5]); // Dashed line
              ctx.stroke();
              ctx.restore();
            }
          }
        }]
      });
    

### Visual Demonstration
## ![alt text](<Screenshot 2024-12-22 162303.png>)

### Segmented page in the coin Explorer
- In the `explore.html` page the user is given a list of 500 crypto-coins which were fetched from [CoinGecko's API](https://www.coingecko.com), Rendering an ionic list of 500 contents takes a good while and scrolling through 500 crypto-coins can be mundain, Thus I implemented [Angular Paginator](https://material.angular.io/components/paginator/overview) to segment the response of 500 coins into 100 each to reduce load time and improve the design of the page. 

`<mat-paginator [length]="100"
              [pageSize]="10"
              [pageSizeOptions]="[5, 10, 25, 100]"
              aria-label="Select page">
</mat-paginator>`
- This is done by defining your preferred page size which would be the amount of data that will be rendered per page, and the length which is the total amount of data that will be partitioned.
### Visual Example
![alt text](image.png)

### Code Demonstration
```typescript
export class ExplorePage {

  cryptos: any[] = [];
  displayedCryptos: any[] = [];
  pageSize = 100;
  length = 0;
  pageIndex = 0;

  constructor(private crypto: CryptoService, private router: Router, private watchlist: WatchlistService) { }

  async ngOnInit() {
    this.crypto.getCoinList().subscribe(data => {
      this.cryptos = data;
      this.length = data.length;
      this.updateDisplayedCryptos();
    });
  }

  updateDisplayedCryptos() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCryptos = this.cryptos.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedCryptos();
  }

}
```


## Application Architecture
![alt text](images/Architecture-1.png)

## Roadblocks and Unfinished Functionality
- **Coin Validator**: I wanted to implement a function which would take in coin Ids from all of the coins from the explore page and validate if the coin is in the user's watchlist but unfortunately i encountered a problem where the page would freeze when the function is being called. I suspected the issue might have been due to the usage of the pipe() function or Observable type to constantly listen for updates in the users document. Perhaps I should have changed the function from a type observable to just an any type. 

## Resources
* [Coin Gecko ](https://www.coingecko.com/)
* [Google AI Studio](https://ai.google.dev/gemini-api/docs)
* [Ionic Framework](https://ionicframework.com/)
* [ChartJs ](https://www.chartjs.org/)
* [Angular Paginator](https://material.angular.io/components/paginator/overview)
