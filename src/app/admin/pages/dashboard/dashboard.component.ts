import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries |any ;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | ApexYAxis[] |any;
  title: ApexTitleSubtitle | any;
  labels: string[] | any;
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  showDash = "";
  token: any;
  chart: any;

  @ViewChild("chart") 
  // chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Number of Shipment",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Number of Orders",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Analytics"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Number of Shipment"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };


  }

  ngOnInit(): void {

    this.token = localStorage.getItem('role_id');
    if (this.token == 2) {
      this.showDash = 'store';
    }
    else if (this.token == 3) {
      this.showDash = 'user';
    }
    else if (this.token == 4) {
      this.showDash = 'supplier';
    }
    else if (this.token == 5) {
      this.showDash = 'shipment';
    }
    else if (this.token == 6) {
      this.showDash = 'warehouse';
    }
    else {
      this.showDash = 'admin'
    }

  }






}
