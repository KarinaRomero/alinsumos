import { DirectoryComponent } from '../main-content/components/directory/directory.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'directory', component: DirectoryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
