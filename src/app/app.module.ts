import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { JwtconfigInterceptor } from './interceptors/jwtconfig.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'products', component: ProductOverviewComponent, canActivate: [AuthGuard]},
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtconfigInterceptor,
      multi:true
    },
    {
      provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
