import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {
  user = {
    name: '',
    email: '',
  };

  onSubmit(_t5: NgForm) {
   console.log('Submit', this.user)
  }
}
