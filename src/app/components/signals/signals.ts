import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  // Writable Signals
  count = signal(0);
  userName = signal('John Doe');
  userProfile = signal({ id: 1, theme: 'dark' });
  tasks = signal(['Tâche 1', 'Tâche 2']);

  changeCount() {
    this.count.set(this.count() + 1)
  }

  increment() {
    this.count.update(currentValue => currentValue + 1);

  }

  decrement() {
    this.count.update(val => val - 1);
  }


  addTask() {
    this.tasks.update(val => [...val, "Nouvelle Tache"])
  }
}
