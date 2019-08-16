import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] = [
    {id:1, title:'Life Quotes', quote:'All that we are is the result of what we have thought',author:"Serena Williams"},
    {id:2, title:'Health Quotes', quote:'A few germs never hurt anyone',author:"Serena Williams"},
    {id:3, title:'Wisdom Quotes',quote: 'A great man is always willing to be little',author:"Serena Williams"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
