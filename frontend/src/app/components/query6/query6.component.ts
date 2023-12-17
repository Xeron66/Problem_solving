import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {

  data_all: any [] = []
  store: string[] = [];
  item: any[] = [];
  quantity: number[] = [];

  chartData: ChartDataset[] = [{ data: [], label: 'Total Sales' }];
  chartLabels: string[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    indexAxis: 'y',
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
    this.query6Data()
  }
  query6Data(): void {
    this.queryService.getQuery6().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.store.push(d.Store);
          this.item.push(d.Item);
          this.quantity.push(d.Quantity);
        }
        this.chartData = [
        {
          data: this.quantity, // Assigning quantity to data
          label: 'Total Sales',
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Adjust bar colors as needed
          borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
          borderWidth: 1 // Border width for bars
        }];
        this.chartLabels = this.store; // Set store names as labels
        this.data_all = data;
      }
    )
  }
}
