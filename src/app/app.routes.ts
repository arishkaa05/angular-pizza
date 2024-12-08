import { Routes } from '@angular/router'; 
import { LandingComponent } from './pages/website/landing/landing.component'; 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizza',
    pathMatch: 'full'
  }, 
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'pizza',
        component: LandingComponent,
        title: 'pizza'
      },
    ]
  },

];
