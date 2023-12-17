import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {

  data_all: any [] = []
  quarter: any[] = [];
  item: any[] = [];
  quantity: number[] = [];

  chartData: ChartDataset[] = [{ data: [], label: 'Worst Quarter' }];
  chartLabels: string[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Quarter', // X-axis label
          color: 'white'
        },
        grid: {
          color: 'black' // Color of x-axis grid lines
        },
        ticks: {
          color: 'black' // Color of x-axis labels
        }
      },
      y: {
        title: {
          display: true,
          text: 'Items', // Y-axis label
          color: 'black'
        },
        grid: {
          color: 'black' // Color of y-axis grid lines
        },
        ticks: {
          color: 'black' // Color of y-axis labels
        }
      }
    }
  };
  constructor(private queryService: QueryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.query8Data()
  }
  query8Data(): void {
    this.queryService.getQuery8().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.quarter.push(d.Quarter);
          this.item.push(d.Item);
          this.quantity.push(d.Quantity);
        }
      this.chartData[0].data = this.quantity; // Assign quantity to data for bars
      this.chartLabels = this.item; // Set store names as labels
      this.data_all = data;
      }
    )
  }
}
