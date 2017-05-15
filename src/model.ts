import {
  AbstractControl as NgAbstractControl,
  FormGroup as NgFormGroup,
} from "@angular/forms";
import { Observable } from "rxjs/Observable";

export interface AbstractControl<T> extends NgAbstractControl {
  readonly valueChanges: Observable<T>;
  setValue(value: T, options?: Object): void;
}

export interface FormGroup<T> extends NgFormGroup {
  readonly valueChanges: Observable<T>;
  setValue(value: T, options?: Object): void;
}
