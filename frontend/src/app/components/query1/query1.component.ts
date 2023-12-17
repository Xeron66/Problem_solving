import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {

  data_all: any[] = [];
  division: any[] = [];
  sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: "Sales in Taka",
      data: this.sales,
    }
  ];

  chartLabels: string[] = this.division;

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,

    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor: '#ffeaff',
        displayColors: true,
        padding: 18,

        titleColor: '#0B4AD2',
        titleFont: {
          size: 18
        },

        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query1Data();
  }

  query1Data(): void {
    this.queryService.getQuery1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.sales.push(d.sales)
        }
        this.chartData = [{
          type: "pie",
          label: "Sales in Taka",
          data: this.sales,
          }];
        this.chartLabels = this.division;
        this.data_all = data;
      }
    )
  }

}
