import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { CrpytoService } from 'src/app/services/crpyto.service';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-crypto-graph',
  templateUrl: './crypto-graph.component.html',
  styleUrls: ['./crypto-graph.component.scss'],
  standalone: true,
  imports:[IonContent]
})
export class CryptoGraphComponent implements OnInit {
  @ViewChild('cryptoChart') cryptoChart?: ElementRef;
  id?: string;
  constructor(private crypto: CrpytoService) {
    Chart.register(...registerables); // Register all necessary components

   }


  //retrieve chart data
  //plug in to chart.js
  //display chart on page
  ngOnInit() {

    this.createChart();
  }

  createChart(){
    this.crypto.getChartdata().subscribe(data => {
      new Chart(this.cryptoChart?.nativeElement, {
        type: 'line',
        data: {
          labels: data.prices.map((price: any) => new Date(price[0]).toLocaleTimeString()),
          datasets: [
            {
              label: 'Price',
              data: data.prices.map((price: any) => price[1]),
              borderColor: 'blue',
              fill: false
            }
          ]
        }
      });
    });
  }

}


