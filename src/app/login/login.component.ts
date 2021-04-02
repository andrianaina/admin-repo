
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/service/login.service';
import { Result } from '../result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private service : LoginService) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    alert("hello");
  }
  login(f:NgForm){
    localStorage.clear();
    this.service.login(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          localStorage.setItem('token',result.data[0])
          alert(result.meta['message']);
          window.location.reload();
        }
        else{
          alert(result.meta['message']);
        }
        window.location.reload();
      }
    );
  }
}
