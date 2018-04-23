import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quotes(1,'Happiness  is not something you postpone for the future;it is something you design for the present','Jim Rohn', new Date(1999,6,12)),
  new Quotes(2,'The most important thing in this world is family','John Wooden',new Date(2010,3,3)),
  new Quotes(3,'Sometimes the heart sees what is invisible to the eye','Jackson Brown',new Date(1985,5,16)),
  new Quotes(4,'It is during our darkest moments that we must focus to see the light','Aristole',new Date(2001,8,25)),
  new Quotes(5,'Put your heart,mind,and soul into even your smallest acts.This is the secret of success.','Swami Sivananda',new Date(1560,9,20)),
  
]

  addNewQuote(quote){
    let quotesLength = this.quotes.length;
    quote.id=quotesLength+1
    this.quotes.push(quote)


  }







  constructor() { }

  ngOnInit() {
  }

}
