import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ANIMATION_MODULE_TYPE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { InterceptorTokenInterceptor } from '@data/services/loader/interceptor-token.interceptor';
import { InterceptorService } from '@data/services/loader/interceptor.service';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { SharedModule } from '@shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SkeletonComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenInterceptor,
      multi: true },
    {
      provide: ANIMATION_MODULE_TYPE,
      useValue: 'BrowserAnimations'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
