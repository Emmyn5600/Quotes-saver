import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] = [
    new Quote(1, 'Life Quotes', 'All that we are is the result of what we have thought','Serena Williams'),
    new Quote(2, 'Health Quotes', 'A few germs never hurt anyone','Serena Williams'),
    new Quote(3, 'Wisdom Quotes', 'A great man is always willing to be little','Serena Williams'),
  ];
showAuthor(index){
  this.myQuotes[index].moreDetails = !this.myQuotes[index].moreDetails;
}
  constructor() { }

  ngOnInit() {
  }

}
