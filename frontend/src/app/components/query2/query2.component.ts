import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

  data_all: any[] = [];
  t_type: any[] = [];
  t_sales: any[] = [];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: "Transaction wise Sales",
      data: this.t_sales,
    }
  ];

  chartLabels: string[] = this.t_type;

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

  constructor(private queryService: QueryService, private http: HttpClient) { }
  ngOnInit(): void {
    this.query2Data()
  }

  query2Data(): void {
    this.queryService.getQuery2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.t_type.push(d.trans_type)
          this.t_sales.push(d.total_sales)
        }
        this.chartData = [{
          type: "pie",
          label: "Transaction wise Sales",
          data: this.t_sales,
        }];
        this.chartLabels = this.t_type;
        this.data_all = data;
      }
    )
  }
}
