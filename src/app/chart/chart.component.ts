import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Result } from '../result';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  ngOnInit():void{
    
  }

  constructor(
  ){
    
  }
  @Input() chartType : ChartType = "line";
  
  @Input() lineChartData: ChartDataSets[] = [
  ];

  @Input() lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{ticks: {min: 0}}]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,200,255,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];

  public SetDataSet(result : Result) : ChartDataSets[]{
    let data : number[] = [];
    for(let i=0; i< result['data'].length; i++){
      data.push(result['data'][i]['total']);
    }
    let ChartData : ChartDataSets[] = [
      {
        data : data,
        label : "Total des Demandes depots"
      }
    ];
    console.log(ChartData);
    return ChartData;
  }
  SetChartLabels(result : Result) : Label[]{
    let data : string[] = [];
    for(let i=0; i< result['data'].length; i++){
      data.push(result['data'][i]['mois']);
    }
    let ChartLabels : Label[] = data;
    return ChartLabels;
  }

  
}
