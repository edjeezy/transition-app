import { Component, effect, ElementRef, model, viewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-signal-viewchild',
  imports: [],
  templateUrl: './signal-viewchild.html',
  styleUrl: './signal-viewchild.css'
})
export class SignalViewchild {
  // `nameInput` est un Signal<ElementRef | undefined>
  chartInput = viewChild<ElementRef>('chart');

  constructor() {
    Chart.register(...registerables);
    // `effect` est le moyen parfait pour réagir à la disponibilité de l'élément.
    effect(() => {
      new Chart(this.chartInput()?.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}
