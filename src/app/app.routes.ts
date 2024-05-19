import { Routes } from '@angular/router';
import { TourpackagesComponent } from './tourpackages/tourpackages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooktourComponent } from './booktour/booktour.component';
import { TourbookingsComponent } from './tourbookings/tourbookings.component';
import { OfficeComponent } from './office/office.component';
import { AddofficeComponent } from './addoffice/addoffice.component';
import { EditofficeComponent } from './editoffice/editoffice.component';
import { LogoutComponent } from './logout/logout.component';
import { universalGuard } from './universal.guard';



export const routes: Routes = [
    {path:'', redirectTo:'tours',pathMatch:'full'},
    {path:'tours',component:TourpackagesComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[universalGuard]},
    {path:'book',component:BooktourComponent},
    {path:'tourbookings',component:TourbookingsComponent},
    {path:'offices',component:OfficeComponent},
    {path:'addoffice',component:AddofficeComponent},
    {path:'editoffice/:id',component:EditofficeComponent},

    
    

    


];
