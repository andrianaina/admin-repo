import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OffreService } from 'src/service/offre.service';
import { Result } from '../result';

@Component({
  selector: 'app-offerinsert',
  templateUrl: './offerinsert.component.html',
  styleUrls: ['./offerinsert.component.scss']
})
export class OfferinsertComponent implements OnInit {

  constructor(private service :OffreService) { }

  ngOnInit(): void {
  }
  
  addOffre(f:NgForm){
    console.log(f.value);
    this.service.addOffre(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        console.log(result);
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
