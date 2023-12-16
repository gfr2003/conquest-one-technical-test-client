import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IAsset } from '../../../../common/types/asset.type';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
@Component({
  selector: 'app-asset-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './asset-chart.component.html',
  styleUrl: './asset-chart.component.scss',
})
export class AssetChartComponent implements AfterViewInit {
  @ViewChild('canvasChart') canvasChart!: ElementRef;

  @Input() assetData!: IAsset;
  chart!: Chart;
  canvas!: HTMLCanvasElement;

  ngAfterViewInit(): void {
    if (this.assetData) {
      this.createAssetPriceChart();
    }
  }

  public createAssetPriceChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const timestamp = this.assetData.timestamp;
    const openPrice = this.assetData.indicators.quote[0].open;
    const canvas: HTMLCanvasElement = this.canvasChart.nativeElement;
    this.chart = new Chart(canvas.getContext('2d')!, {
      type: 'line',

      data: {
        labels: timestamp.map((timestamp: number) =>
          new Date(timestamp * 1000).toLocaleDateString()
        ),
        datasets: [
          {
            label: 'Variação de Preço',
            data: openPrice,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              font: {
                size: 20,
              },
              color: 'white',
              display: true,
            },
          },
          y: {
            title: {
              font: {
                size: 15,
              },
              color: 'white',
              display: true,
              text: 'Preço de Abertura',
            },
          },
        },
      },
    });
  }
}
