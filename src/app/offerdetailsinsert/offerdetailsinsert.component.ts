import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerdetailsinsert',
  templateUrl: './offerdetailsinsert.component.html',
  styleUrls: ['./offerdetailsinsert.component.scss']
})
export class OfferdetailsinsertComponent implements OnInit {
  id: any;

  constructor(private service :OffreService,private Aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe(params=>
      {
        this.id=params.get('id');
      }
    );
  }

  insertDetails(f:NgForm){
    f.value['idoffre']=this.id;
    this.service.insertDetails(f).subscribe(
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
