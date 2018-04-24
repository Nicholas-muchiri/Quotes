import { Component } from '@angular/core';
import {Quotes} from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCount: number;
  btnText: string ='Add a Qoute'
  nameText: string =''
  quoteText: string =''
  authorText: string =''
  quotes = [];

  addItem(){
    this.quotes.push(this.nameText, this.quoteText, );
    this.nameText = ''
    this.quoteText =''
    this.authorText =''
    this.itemCount = this.quotes.length;

  }

}
