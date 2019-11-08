import { Component, OnInit } from '@angular/core';

import { SalesDataService } from '../../services/sales-data.service';
import * as moment from 'moment';
/*
const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
  { data: [68, 21, 10, 89, 26, 78, 80], label: 'Q4 Sales'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];
*/

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _salesDataService: SalesDataService) { }

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100)
    .subscribe(res => {
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]).reverse();
      this.barChartData = [{ 'data': localChartData.map(x => x[1]), 'label': 'Sales'}]
    });
  }

  getChartData(res: Response){
    // tslint:disable-next-line: no-string-literal
    this.orders = res['page']['data'];
    /* tslint:enable:no-string-literal */
    const data = this.orders.map(o => o.total);

    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total])
      return r;
    }, []);

    const p = [];

    const chartData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if (!r[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;
    /*
    Realiza la suma de todos los elementos del array.
    En este caso 12.
    se accede como myData al final, tiene el valor 12.
    reduce aplica la función de callback (como 1er parámetro),
    y arrancando desde un valor inicial (2do parámetro).
    Usa como acumulador sum, y value va tomando los valores
    del arreglo.
    const myData = [3, 4, 5].reduce((sum, value) => {
      return sum + value;
    }, 0);
    */
  }

}
