import { MainContentComponent } from '../main-content/main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
