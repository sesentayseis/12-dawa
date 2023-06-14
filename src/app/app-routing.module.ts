import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts', component: PostListComponent, outlet: 'postsOutlet' }, // Ruta para el componente PostListComponent en el outlet "postsOutlet"
  { path: 'post-details', component: PostDetailsComponent, outlet: 'postsOutlet' }, // Ruta para el componente PostDetailsComponent en el outlet "postsOutlet"
  { path: 'users', component: UserListComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
