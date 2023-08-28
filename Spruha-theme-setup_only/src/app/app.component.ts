import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';
import { GlobalService } from './shared/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  browserLang
  constructor(
    public translate: TranslateService,
    private _global: GlobalService,
  ){
/**this function will set default language of system */
    translate.addLangs(['en', 'fr','ar']);
    if (localStorage.getItem("lang")) {
    	this.browserLang = localStorage.getItem("lang");
    } else {
    	this.browserLang = translate.getBrowserLang();
    }
    translate.use(this.browserLang.match(/en|fr|ar/) ? this.browserLang : "en");
    translate.setDefaultLang(this.browserLang);
/**If we need to set default language */
    // translate.addLangs(['en', 'fr']);
    // if (localStorage.getItem("lang")) {
    //   this.browserLang = localStorage.getItem("lang");
    // } else {
    //   this.browserLang = 'fr';
    //   localStorage.setItem("lang", 'fr');
    // }
    // translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : "fr");
  }
  ngOnInit() {
    fromEvent(window, 'load').subscribe(() => document.querySelector('#glb-loader')?.classList.remove('loaderShow'));
  }


}
