import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerdetails',
  templateUrl: './offerdetails.component.html',
  styleUrls: ['./offerdetails.component.scss']
})
export class OfferdetailsComponent implements OnInit {
  id: string | null ='';
  public offerheader=["idtype" ,"domain","value","update/delete",];

  public contentoffers=[
  ];
  constructor(private Aroute : ActivatedRoute, private service : OffreService){ }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe(params=>
      {
        this.id=params.get('id');
      }
    );
    this.getDetails(this.id);
  }

  getDetails(ids:any){
    this.service.getDetails(ids).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          this.contentoffers= result.data;
        }
        else{
          alert(result.meta['message']);
        }
      }
    );
  }
  
  transformType(idtype : any){
    if(idtype==1){
      return 'appel';
    }
    if(idtype==2){
      return 'sms';
    }  
    if(idtype==3){
      return 'internet';
    }
    return 'not none';
  } 
  
  delete(ids:any){
    this.service.deleteDetails(ids).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert(result.meta['message']);
        }
        else{
          alert(result.meta['message']);
        }
        window.location.reload();
      }
    );
  }
}
