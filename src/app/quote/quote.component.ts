import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quotes('Happiness  is not something you postpone for the future;it is something you design for the present','Jim Rohn', new Date(12,6,1999)),
  new Quotes('The most important thing in this world is family','John Wooden',new Date(3,3,2010)),
  new Quotes('Sometimes the heart sees what is invisible to the eye','Jackson Brown',new Date(16,5,1859)),
  new Quotes('It is during our darkest moments that we must focus to see the light','Aristole',new Date(25,8,2001)),
  new Quotes('Put your heart,mind,and soul into even your smallest acts.This is the secret of success.','Swami Sivananda',new Date(30,9,1678)),
  new Quotes('Life isn’t about getting and having, it’s about giving and being.','Kevin Kruse',new Date(23,6,2009)),
  new Quotes('Whatever the mind of man can conceive and believe, it can achieve.','Napoleon Hill',new Date(24,9,2013)),
  new Quotes('Strive not to be a success, but rather to be of value.','Albert Einstein',new Date(7,7,2007)),
  new Quotes('Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.','Robert Frost',new Date(14,11,2002)),
  new Quotes('I attribute my success to this: I never gave or took any excuse.','Florence Nightingale',new Date(12,5,2001)),
  new Quotes('You miss 100% of the shots you don’t take.','Wayne Gretzky',new Date(10,5,1998)),
  new Quotes('I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.','Michael Jordan',new Date(23,12,2001)),
  new Quotes('The most difficult thing is the decision to act, the rest is merely tenacity.','Amelia Earhare',new Date(24,9,1899)),
  new Quotes('Every strike brings me closer to the next home run.','Babe Ruth',new Date(4,6,1677)),
  new Quotes('Definiteness of purpose is the starting point of all achievement.','W. Clement Stone',new Date(16,7,2011)),
]






  constructor() { }

  ngOnInit() {
  }

}
