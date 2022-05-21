import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { DatePipe } from '@angular/common';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  purchasesChart: any;
  purchases: any;
  dataLabels: Array<string | null> = [];
  dataDatasetsData: Array<number> = []

  constructor(private transactionService: TransactionService, private datePipe: DatePipe) {
    this.transactionService.getPurchasesChart().subscribe(data => {
      this.purchasesChart = data;
      this.purchases = this.purchasesChart.sort((a : any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
      this.purchases.forEach((element: any) => {
        this.dataLabels.push(this.datePipe.transform(element.day, 'MM-dd'));
        this.dataDatasetsData.push(element.value);
      });
    });
    this.chartOptions = {
      chart: {
        /* height: 350, */
        type: "bar"
      },
      colors: ['#0F77F0'],
      fill: {
        type: ['gradient'],
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          opacityFrom: 0.8,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: this.dataLabels
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '10px',
          colors: ['#304758'],
        },
      },
      series: [
        {
          name: "Purchases",
          data: this.dataDatasetsData
        }
      ],
    };
  }

  ngOnInit(): void {
  }

}
