import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerupdate',
  templateUrl: './offerupdate.component.html',
  styleUrls: ['./offerupdate.component.scss']
})
export class OfferupdateComponent implements OnInit {
  id: string | null='';

  constructor(private service :OffreService,private Aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe(params=>
      {
        this.id=params.get('id');
      }
    );
  }
  update(f:NgForm){
    f.value['id']=this.id;
    this.service.update(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          alert(result.meta['message']);
        }
        else{
          alert(result.meta['message']);
        }
      }
    );
  } 
}
