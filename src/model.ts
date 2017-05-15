import {
  AbstractControl as NgAbstractControl,
  FormControl as NgFormControl,
  FormGroup as NgFormGroup,
  FormArray as NgFormArray,
} from "@angular/forms";
import { Observable } from "rxjs/Observable";

export interface AbstractControl<T> extends NgAbstractControl {
  readonly valueChanges: Observable<Partial<T>>;
  readonly value: T;
  setValue(value: Partial<T>, options?: Object): void;
}

export interface FormControl<T> extends NgFormControl {
  readonly valueChanges: Observable<T>;
  readonly value: T;
  setValue(value: T, options?: Object): void;
  get<K extends keyof T>(path: K): AbstractControl<T[K]>;
}

export interface FormGroup<T> extends NgFormGroup {
  // readonly controls:{ [P in K]: AbstractControl<T[P]> };
  readonly valueChanges: Observable<T>;
  setValue(value: T, options?: Object): void;
  get<K extends keyof T>(path: K): AbstractControl<T[K]>;
}

export interface FormArray<T> extends NgFormArray {
  readonly valueChanges: Observable<T[]>;
  readonly value: T[];
  setValue(value: T[], options?: Object): void;
  getRawValue(): T[];
}
