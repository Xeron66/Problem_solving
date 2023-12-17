import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {

  data_all: any [] = []
  year: string[] = [];
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
          text: 'Year', // X-axis label
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
    this.query4Data()
  }
  query4Data(): void {
    this.queryService.getQuery4().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.year.push(d.Year);
          this.totalSales.push(d.total_sales);
        }
        this.chartData[0].data = this.totalSales;
        this.chartLabels = this.year;
        this.data_all = data;
      }
    )
  }
}
