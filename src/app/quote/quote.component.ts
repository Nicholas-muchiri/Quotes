import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
  new Quotes(1,'Happiness  is not something you postpone for the future;it is something you design for the present','Jim Rohn'),
  new Quotes(2,'The most important thing in this world is family','John Wooden'),
  new Quotes(3,'Sometimes the heart sees what is invisible to the eye','Jackson Brown'),
  new Quotes(4,'It is during our darkest moments that we must focus to see the light','Aristole'),
  new Quotes(5,'Put your heart,mind,and soul into even your smallest acts.This is the secret of success.','Swami Sivananda'),
  new Quotes(6,'Life isn’t about getting and having, it’s about giving and being.','Kevin Kruse'),
  new Quotes(7,'Whatever the mind of man can conceive and believe, it can achieve.','Napoleon Hill'),
  new Quotes(8,'Strive not to be a success, but rather to be of value.','Albert Einstein'),
  new Quotes(9,'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.','Robert Frost'),
  new Quotes(10,'I attribute my success to this: I never gave or took any excuse.','Florence Nightingale'),
  new Quotes(11,'You miss 100% of the shots you don’t take.','Wayne Gretzky'),
  new Quotes(12,'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.','Michael Jordan'),
  new Quotes(13,'The most difficult thing is the decision to act, the rest is merely tenacity.','Amelia Earhare'),
  new Quotes(14,'Every strike brings me closer to the next home run.','Babe Ruth'),
  new Quotes(15,'Definiteness of purpose is the starting point of all achievement.','W. Clement Stone')
]






  constructor() { }

  ngOnInit() {
  }

}
