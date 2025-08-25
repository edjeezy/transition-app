import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-a',
  imports: [],
  templateUrl: './counter-a.html',
  styleUrl: './counter-a.css',
})
export class CounterA implements OnChanges {
  @Input() valeur!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valeur']) {
      console.log(changes);
      
    } 
  }
}
