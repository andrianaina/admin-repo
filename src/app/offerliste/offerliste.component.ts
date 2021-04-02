import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerliste',
  templateUrl: './offerliste.component.html',
  styleUrls: ['./offerliste.component.scss']
})
export class OfferlisteComponent implements OnInit {

  public offerheader=["name ","price", "Categorie","view details","update/delete",];
  public contentoffers=[];

  constructor(private service :OffreService) { }

  ngOnInit(): void {
    this.setListeOffre();
  }
  transformCategorie(idtype : any){
    if(idtype==1){
      return 'hebdomadaire';
    }
    if(idtype==2){
      return 'mensuel';
    }  
    return 'not none';
  }
  
  setListeOffre(){
    this.service.getList().subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          this.contentoffers=result.data;
        }
        else{
          alert(result.meta['message']);
        }
      }
    );
  }
  delete(id:string){
    this.service.delete(id).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert('success');
        }
        else{
          alert(result.meta['message']);
        }
        window.location.reload();
      }
    );
  }
}
