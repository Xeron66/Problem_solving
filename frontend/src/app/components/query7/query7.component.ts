import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.css']
})
export class Query7Component implements OnInit {

  private days_input: any;

  query7From = new FormGroup( {
    days: new FormControl('')
    }
  )

  constructor(private queryService: QueryService, private http: HttpClient) { }

  data_all: any [] = []
  dtOptions: DataTables.Settings = {};
  query7Form: any;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  search() {
    this.days_input = this.query7From.value.days
    this.queryService.getQuery7(this.days_input).subscribe((data:any) => {
      console.log(data)
      this.data_all = data
      }
    )
  }
}
