import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerdetailsupdate',
  templateUrl: './offerdetailsupdate.component.html',
  styleUrls: ['./offerdetailsupdate.component.scss']
})
export class OfferdetailsupdateComponent implements OnInit {
  id: any;
  idoffre:any;
  constructor(private router: Router ,private service :OffreService,private Aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe(params=>
      {
        this.id=params.get('id');
        this.idoffre=params.get('idoffre');
      }
    );
  }
  updateDetails(f:NgForm){
    f.value['id']=this.id;
    f.value['idoffre']=this.idoffre;

    console.log(f.value);
    this.service.updateDetails(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert(result.meta['message']);
        }
        else{
          alert(result.meta['message']);
        }
        this.router.navigateByUrl('offerdetails/'+this.idoffre);
      }
    );
  }
}
