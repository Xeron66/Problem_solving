import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css']
})
export class Query5Component implements OnInit {

  data_all: any [] = []
  division: string[] = [];
  totalSales: number[] = [];

  chartData: ChartDataset[] = [{ data: [], label: 'Total Sales' }];
  chartLabels: string[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Division', // X-axis label
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // Color of x-axis grid lines
        },
        ticks: {
          color: 'white' // Color of x-axis labels
        }
      },
      y: {
        title: {
          display: true,
          text: 'Total Sales', // Y-axis label
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)' // Color of y-axis grid lines
        },
        ticks: {
          color: 'white' // Color of y-axis labels
        }
      }
    }
  };
  constructor(private queryService: QueryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.query5Data()
  }
  query5Data(): void {
    this.queryService.getQuery5().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.Division)
          this.totalSales.push(d.total_sales)
        }
        this.chartData[0].data = this.totalSales;
        this.chartLabels = this.division;
        this.data_all = data;
      }
    )
  }
}
