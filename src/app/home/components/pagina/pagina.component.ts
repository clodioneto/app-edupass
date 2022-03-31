import { Component, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as en } from './../../../../assets/i18n/en';
import { locale as pt } from './../../../../assets/i18n/pt';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  language: string = '';

  constructor(private translate: TranslateService){
    translate.setTranslation(en.lang, en.data,true);
    translate.setTranslation(pt.lang, pt.data,true);
    translate.addLangs(['en','pt']);
    translate.setDefaultLang('pt');

    const browserLang: any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  switchLanguage(language: string){
    this.translate.use(language);
    return this.language = language;
  }

  ngOnInit(): void {
  }



}
