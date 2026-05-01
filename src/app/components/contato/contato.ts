import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  form: FormGroup;
  sending = false;
  sent = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome:      ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      telefone:  [''],
      servico:   [''],
      mensagem:  [''],
    });
  }

  touched(field: string) {
    return this.form.get(field)?.touched;
  }

  maskPhone(event: Event) {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').slice(0, 11);
    if (v.length >= 7) {
      v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    } else if (v.length >= 3) {
      v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    this.form.get('telefone')!.setValue(v, { emitEvent: false });
    input.value = v;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      this.form.reset();
    }, 1500);
  }
}

