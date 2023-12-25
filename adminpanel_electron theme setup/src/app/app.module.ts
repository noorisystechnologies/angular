import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { DatabaseService } from './demo/service/database.service';

const dbConfig: DBConfig = {
  name: 'myDb',
  version: 2,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'firstName', keypath: 'firstName', options: { unique: false } },
      { name: 'lastName', keypath: 'lastName', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } }
    ]
  }]
};

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserAnimationsModule,
        NgxIndexedDBModule.forRoot(dbConfig),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService , DatabaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
