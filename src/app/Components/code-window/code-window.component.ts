import { Component, OnInit } from '@angular/core';
import { Tokenizer } from 'src/app/BuntLangCompiler/Models/Tokenizer/tokenizer';

@Component({
  selector: 'app-code-window',
  templateUrl: './code-window.component.html',
  styleUrls: ['./code-window.component.scss']
})
export class CodeWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tokenizer: Tokenizer = new Tokenizer("main.bl");
  }

}
