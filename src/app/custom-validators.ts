import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') return { invalidName: true };
    return null;
  }

  static asyncInvalidName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') resolve({ invalidName: true });
        else return resolve(null);
      }, 2000);
    });
    return promise;
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
