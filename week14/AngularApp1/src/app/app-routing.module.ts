import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OtherLinkComponent } from './other-link/other-link.component';
const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path: 'other-link', component: OtherLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
