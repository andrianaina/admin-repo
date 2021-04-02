
import { Component, OnInit } from '@angular/core';
import { DepotService } from 'src/service/depot.service';
import { Result } from '../result';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  public depositeheader=["Phone number","valeur" ,"Date and time of deposit", "Validation"];
  public depositecontent=[];

  constructor(private service :DepotService) { }

  ngOnInit(): void {
    this.setInvalidate();
  }
  setInvalidate(){
    this.service.getInvalidateDepot().subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          this.depositecontent=result.data;
        }
      }
    );
  }
  validIt(id:String){
    this.service.validIt(id).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert('depot validée');
          window.location.reload();
        }
      }
    );
    
  }
  declineIt(id:String){
    this.service.declineIt(id).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert('depot éffacée');
          window.location.reload();
        }
      }
    );
  }
}
