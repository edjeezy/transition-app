import { Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterA } from "./counter-a/counter-a";
import { TemplateDrivenForm } from "./template-driven-form/template-driven-form";
import { Conditionals } from "./conditionals/conditionals";

@Component({
  selector: 'app-root',
  imports: [CounterA, TemplateDrivenForm, Conditionals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, DoCheck, OnDestroy {
  protected title = 'Bonjour'
  public value: number = 0;
  ngOnInit() {
    
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  increment() {
    this.value+= 1;
  }

  changeTitle() {
    this.title = "Salut"
  }

  ngOnDestroy(): void {
    
  }
}
