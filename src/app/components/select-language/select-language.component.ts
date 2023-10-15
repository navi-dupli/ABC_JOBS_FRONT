import { Component, OnInit } from '@angular/core';

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
  selectedLanguage: LanguageOptions;

  constructor() { }

  ngOnInit(): void {
    this.languages = [
      {name: 'Español - COL', code: 'spanish'},
      {name: 'Ingles - USA', code: 'english'},
    ];
  }

}
