import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.color';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32, 15, 46, 23, 38, 56], label: 'Sentiment Analysis'},
  {data: [15, 55, 48, 75, 45, 45], label: 'Image Recognition'},
  {data: [70, 10, 20, 30, 48, 70], label: 'Forecasting'},
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLegend: true;
  public lineChartColors = LINE_CHART_COLORS;
  public lineChartType = 'line';

  ngOnInit() {
  }

}
