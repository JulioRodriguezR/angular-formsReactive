import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') return { invalidName: true };
    return null;
  }
  static invalidEmail(control: FormControl): { [s: string]: boolean } {
    let email_regexp = new RegExp(
      /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    );

    if (control.value === email_regexp) return { invalidName: true };
    return null;
  }

  static invalidPw(control: FormControl): { [s: string]: boolean } {
    let pw_regexp = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    );

    if (control.value === pw_regexp) return { invalidName: true };
    return null;
  }
}
