import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css']
})
export class Query9Component implements OnInit {

  data_all: any [] = []
  constructor(private queryService: QueryService, private http: HttpClient) { }

  ngOnInit(): void {
    this.query9Data()
  }
  query9Data(): void {
    this.queryService.getQuery9().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
        }
        this.data_all = data;
      }
    )
  }

}
