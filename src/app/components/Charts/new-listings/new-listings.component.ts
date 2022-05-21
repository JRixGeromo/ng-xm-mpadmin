import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
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
  selector: 'app-new-listings',
  templateUrl: './new-listings.component.html',
  styleUrls: ['./new-listings.component.scss']
})
export class NewListingsComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  newListingsData: any;
  newListings: any;
  dataLabels: Array<string | null> = [];
  dataDatasetsData: Array<number> = [];

  constructor(private productService: ProductService, private datePipe: DatePipe) {
    this.productService.getNewlistingCharts().subscribe(data => {
      this.newListingsData = data;
      this.newListings = this.newListingsData.sort((a : any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
      this.newListings.forEach((element: any) => {
        this.dataLabels.push(this.datePipe.transform(element.day, 'MM-dd'));
        this.dataDatasetsData.push(element.value);
      });
    });
    this.chartOptions = {
      chart: {
        /* height: 350, */
        type: "bar"
      },
      colors: ['#F0890F'],
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
          name: "New Listings",
          data: this.dataDatasetsData
        }
      ],
    };
  }

  ngOnInit(): void {
  }

}
