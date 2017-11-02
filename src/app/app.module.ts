import {Routes,RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes:Routes=[
    {
    path:'home',
    component:HomeComponent
    },
    {
    path:'sign',
    component:SignComponent
    },
    {
     path:'guest',
     component:GuestComponent
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
    path:'order',
    component:OrderComponent
    },
    {
    path:'user',
    component: UserComponent
    },
    {
    path:'menu',
    component:MenuComponent
    },
    
    {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
    }
    
];
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    GuestComponent,
    LoginComponent,
    OrderComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
