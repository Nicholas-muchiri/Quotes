import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  newQuote=new Quotes(0,"",0,0,"",new Date());
    @Output() addQuote=new EventEmitter<Quotes>();

    submitQuote(){
      this.addQuote.emit(this.newQuote);
    }
   


  constructor() { }

  ngOnInit() {
  }

}
