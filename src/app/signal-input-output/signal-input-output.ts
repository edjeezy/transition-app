import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-signal-input-output',
  imports: [],
  templateUrl: './signal-input-output.html',
  styleUrl: './signal-input-output.css'
})
export class SignalInputOutput {
  @Input() monnom!: string;
  simpleInput = input('Simple');
  nom = input.required<string>();
  // On accepte une chaîne ou un booléen, et on le transforme toujours en booléen.
  // C'est très utile pour les attributs HTML qui n'ont pas de valeur (ex: <comp disabled>).
  disabled = input(false, {
    transform: (value: boolean | string) => {
      // Si c'est une chaîne, on vérifie si elle est vide (attribut présent) ou égale à "true".
      return typeof value === 'string' ? value === '' || value.toLowerCase() === 'true' : value;
    }
  });

}
