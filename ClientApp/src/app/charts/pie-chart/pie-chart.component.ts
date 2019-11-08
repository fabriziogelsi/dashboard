import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit: number;

  public pieChartData: number[];
  public pieChartLabels: string[];

  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166']
    }
  ];
  public pieChartType = 'pie';

  ngOnInit() {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number) {
    const allData = res.slice(0, limit);
    this.pieChartData = allData.map( x => _.values(x)[1]);
    this.pieChartLabels = allData.map(x => _.vaues(x)[0]);
  }

}
