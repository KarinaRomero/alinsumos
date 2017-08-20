import { RoutingModule } from './routing/routing.module';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ProductsInformationService } from './main-content/services/products-information.service';
import { ServicesComponent } from './main-content/components/services/services.component';
import { ServicesInformationService } from './main-content/services/services-information.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProductsComponent } from './main-content/components/products/products.component';
import { ContactComponent } from './main-content/components/contact/contact.component';
import { MapComponent } from './main-content/components/map/map.component';
import { DirectoryComponent } from './main-content/components/directory/directory.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainContentComponent,
    ServicesComponent,
    ProductsComponent,
    TruncateTextPipe,
    ContactComponent,
    MapComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  providers: [
    ServicesInformationService,
    ProductsInformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
