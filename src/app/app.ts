import { Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterA } from "./counter-a/counter-a";
import { TemplateDrivenForm } from "./template-driven-form/template-driven-form";
import { Conditionals } from "./conditionals/conditionals";
import { NewSyntax } from "./new-syntax/new-syntax";
import { Signals } from './components/signals/signals';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [CounterA, TemplateDrivenForm, Conditionals, NewSyntax, Signals, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected title = 'Bonjour'
  public value: number = 0;
  ngOnInit() {
    
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
