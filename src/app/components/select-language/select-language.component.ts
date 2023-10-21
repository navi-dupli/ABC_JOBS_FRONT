import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface LanguageOptions {
  name: string, 
  code: string
}

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})

export class SelectLanguageComponent implements OnInit {

  languages: LanguageOptions[];
  selectedLanguage: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.languages = [
      { name: 'Español - COL', code: 'es_col' },
      { name: 'Ingles - USA', code: 'en_us' },
    ];
  }

  onLanguageChange(event: any) {
    this.translate.use(event.code);
  }

}
