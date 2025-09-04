import { AfterViewInit, Component, computed, effect, OnInit, signal, untracked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals implements OnInit, AfterViewInit {
  // Writable Signals
  count = signal(0);
  userName = signal('John Doe');
  userProfile = signal({ id: 1, theme: 'dark' });
  tasks = signal(['Tâche 1', 'Tâche 2']);
  prenom = signal('Mouhamed');
  nom = signal('Mar')

  // Computed Signals
  fullName = computed(() => `${this.prenom()} ${this.nom()}`);
  isNameTooLong = computed(() => this.fullName().length > 20);

  @ViewChild('var') var!: any;

  constructor() {
    effect(() => {
      console.log(`Le nom d'utilisateur a changé : ${this.fullName()}`);
      localStorage.setItem('userName', this.fullName());
      untracked(() => {
        console.log(`Message associé : ${this.nom()}`);
      });
    })
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.var);

  }

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
