import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:"department",component:DepartmentComponent},
];
