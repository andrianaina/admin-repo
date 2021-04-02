import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { OffermanagerComponent } from './offermanager/offermanager.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OfferlisteComponent } from './offerliste/offerliste.component';
import { OfferinsertComponent } from './offerinsert/offerinsert.component';
import {MatIconModule} from '@angular/material/icon';
import { StatisticmanagerComponent } from './statisticmanager/statisticmanager.component';
import { DepositmanagerComponent } from './depositmanager/depositmanager.component';
import { DepositComponent } from './deposit/deposit.component';
import { OfferupdateComponent } from './offerupdate/offerupdate.component';
import { OfferupdatemanagerComponent } from './offerupdatemanager/offerupdatemanager.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarcontentComponent } from './navbarcontent/navbarcontent.component';
import { ChartComponent } from './chart/chart.component';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { OfferdetailsmanagerComponent } from './offerdetailsmanager/offerdetailsmanager.component';
import { OfferdetailsinsertComponent } from './offerdetailsinsert/offerdetailsinsert.component';
import { OfferdetailsupdatemanagerComponent } from './offerdetailsupdatemanager/offerdetailsupdatemanager.component';
import { OfferdetailsupdateComponent } from './offerdetailsupdate/offerdetailsupdate.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    OffermanagerComponent,
    LoginpageComponent,
    OfferlisteComponent,
    OfferinsertComponent,
    StatisticmanagerComponent,
    DepositmanagerComponent,
    DepositComponent,
    OfferupdateComponent,
    OfferupdatemanagerComponent,
    NavbarcontentComponent,
    ChartComponent,
    OfferdetailsComponent,
    OfferdetailsmanagerComponent,
    OfferdetailsinsertComponent,
    OfferdetailsupdatemanagerComponent,
    OfferdetailsupdateComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgxChartsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
