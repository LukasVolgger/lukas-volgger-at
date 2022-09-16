import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'legal-notice', component: LegalNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
