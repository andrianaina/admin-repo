import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcontent',
  templateUrl: './navbarcontent.component.html',
  styleUrls: ['./navbarcontent.component.scss']
})
export class NavbarcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
