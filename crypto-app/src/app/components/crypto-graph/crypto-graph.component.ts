import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CrpytoService } from 'src/app/services/crpyto.service';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { chevronBackOutline } from "ionicons/icons";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-crypto-graph',
  templateUrl: './crypto-graph.component.html',
  styleUrls: ['./crypto-graph.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton]
})
export class CryptoGraphComponent implements OnInit, OnDestroy {
  @ViewChild('cryptoChart') cryptoChart?: ElementRef;
  private chartInstance: Chart | null = null;
  private lineColor?: string;
  constructor(private crypto: CrpytoService) {
    addIcons({ chevronBackOutline });
    Chart.register(...registerables);
  }

  ngOnInit() {
    if(this.crypto.getmarketStatus()){
      this.lineColor = 'green';
    }
    else{
      this.lineColor = 'red';
    }
    this.createChart();
    this.beforePrintHandler();
    
  }

 


 beforePrintHandler () {
    for (let id in Chart.instances) {
        Chart.instances[id].resize();
    }
}

  createChart() {
    this.crypto.getChartdata().subscribe(data => {
      // Destroy existing chart if it exists
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

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
    });
  }

  // Method to clean up the chart when component is destroyed
  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}