import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {ImageListComponent} from './gallery/image-list/image-list.component';
import {ImageComponent} from './gallery/image-list/image.component';
import {ImageService} from "./services/image/image.service";
import {ImageDetailComponent} from './gallery/image-detail/image-detail.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/#', pathMatch: 'full'},
    {path: 'gallery', component: ImageListComponent},
    {path: 'detail/:id', component: ImageDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ImageListComponent,
        ImageComponent,
        ImageDetailComponent,
        ContactComponent,
        AboutComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ImageService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
