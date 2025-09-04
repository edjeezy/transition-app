import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-signal-input-output',
  imports: [],
  templateUrl: './signal-input-output.html',
  styleUrl: './signal-input-output.css'
})
export class SignalInputOutput {
  @Input() monnom!: string;
  nom = input.required<string>();
}
