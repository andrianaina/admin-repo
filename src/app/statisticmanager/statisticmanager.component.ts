import { DepotService } from 'src/service/depot.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-statisticmanager',
  templateUrl: './statisticmanager.component.html',
  styleUrls: ['./statisticmanager.component.scss']
})
export class StatisticmanagerComponent implements OnInit {
  
  lineChartData = [{
    data : [1,3],
    label : "Demandes depots"
  }]

  lineChartLabels = ["Janvier", "Fevrier"]

  
  constructor(private service:DepotService) { 
    
  }

  ngOnInit(): void {
    this.getStat();
  }
  getStat(){
    
    
    this.service.StatDepot().subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          this.lineChartData[0]['data']=[];
          this.lineChartLabels=[];
          for(let i=0;i<result.data.length;i++){
            this.lineChartData[0]['data'].push(result.data[i].valeur);
            this.lineChartLabels.push(result.data[i].nom);
          } 
        }
      }
    );
  }
}
