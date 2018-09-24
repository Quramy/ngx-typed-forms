import {
  AbstractControl as NgAbstractControl,
  FormControl as NgFormControl,
  FormGroup as NgFormGroup,
  FormArray as NgFormArray,
} from "@angular/forms";
import { Observable } from "rxjs";

export interface AbstractControl<T = any> extends NgAbstractControl {
  readonly valueChanges: Observable<T>;
  readonly value: T;
  setValue(value: T, options?: Object): void;
  get<K extends Extract<keyof T, string>>(path: K): AbstractControl<T[K]>;
  get<S>(path: (string | number)[]): AbstractControl<S>;
  get(path: (string | number)[]): AbstractControl<any>;
}

export interface FormControl<T = any> extends NgFormControl {
  readonly valueChanges: Observable<T>;
  readonly value: T;
  setValue(value: T, options?: Object): void;
  get<K extends Extract<keyof T, string>>(path: K): AbstractControl<T[K]>;
  get<S>(path: (string | number)[]): AbstractControl<S>;
  get(path: (string | number)[]): AbstractControl<any>;
}

export interface FormGroup<T = any> extends NgFormGroup {
  readonly controls:{ [P in keyof T]: AbstractControl<T[P]> };
  readonly valueChanges: Observable<T>;
  readonly value: T;
  get<K extends Extract<keyof T, string>>(path: K): AbstractControl<T[K]>;
  get<S>(path: (string | number)[]): AbstractControl<S>;
  get(path: (string | number)[]): AbstractControl<any>;
  registerControl<K extends Extract<keyof T, string>>(name: K, control: AbstractControl<T[K]>): AbstractControl<T[K]>;
  addControl<K extends Extract<keyof T, string>>(name: K, control: AbstractControl<T[K]>): void;
  setControl<K extends Extract<keyof T, string>>(name: K, control: AbstractControl<T[K]>): void;
  removeControl<K extends Extract<keyof T, string>>(name: K): void;
  setValue(value: T, options?: Object): void;
  patchValue(value: T, options?: Object): void;
  getRawValue(): T;
}

export interface FormArray<T = any> extends NgFormArray {
  readonly valueChanges: Observable<T[]>;
  readonly value: T[];
  push(control: AbstractControl<T>): void;
  insert(index: number, control: AbstractControl<T>): void;
  setValue(value: T[], options?: Object): void;
  patchValue(value: T[], options?: Object): void;
  getRawValue(): T[];
}
