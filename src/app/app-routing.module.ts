import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositmanagerComponent } from './depositmanager/depositmanager.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OfferdetailsmanagerComponent } from './offerdetailsmanager/offerdetailsmanager.component';
import { OfferdetailsupdatemanagerComponent } from './offerdetailsupdatemanager/offerdetailsupdatemanager.component';
import { OffermanagerComponent } from './offermanager/offermanager.component';
import { OfferupdatemanagerComponent } from './offerupdatemanager/offerupdatemanager.component';
import { StatisticmanagerComponent } from './statisticmanager/statisticmanager.component';

const routes: Routes = [
  {path:'', component: LoginpageComponent},
  {path:'offer', component: OffermanagerComponent},
  {path:'depositvalidation', component: DepositmanagerComponent},
  {path:'statistic', component: StatisticmanagerComponent},
  {path:'updateoffer/:id', component: OfferupdatemanagerComponent},
  {path:'offerdetails/:id', component: OfferdetailsmanagerComponent},
  {path:'offerdetailsupdate/:id/:idoffre', component: OfferdetailsupdatemanagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
