import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerdetailsmanager',
  templateUrl: './offerdetailsmanager.component.html',
  styleUrls: ['./offerdetailsmanager.component.scss']
})
export class OfferdetailsmanagerComponent implements OnInit {
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
}
