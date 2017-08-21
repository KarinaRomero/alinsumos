import { PostComponent } from '../main-content/components/post/post.component';
import { GrainsComponent } from '../main-content/components/products/components/grains/grains.component';
import { DirectoryComponent } from '../main-content/components/directory/directory.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'productos/granos',
    redirectTo: '/productos/granos/maiz-forrajero',
    pathMatch: 'full'
  },
  {
    path: 'productos/granos', component: GrainsComponent, children: [
      { path: ':product', component: PostComponent }
    ]
  }
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
