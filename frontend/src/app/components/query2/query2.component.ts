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

  data_all: any [] = []
  constructor(private queryService: QueryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.query2Data()
  }
  query2Data(): void {
    this.queryService.getQuery2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all = data;
      }
    )
  }
}
