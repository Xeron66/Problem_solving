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
  constructor(private queryService: QueryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.query8Data()
  }
  query8Data(): void {
    this.queryService.getQuery8().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all = data;
      }
    )
  }
}
