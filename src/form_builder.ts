import { Injectable } from "@angular/core";
import {
  FormBuilder as NgFormBuilder,
  ValidatorFn,
  AsyncValidatorFn,
} from "@angular/forms";

import { AbstractControl, FormControl, FormGroup, FormArray } from "./model";

@Injectable()
export class FormBuilder {

  private _delegate: NgFormBuilder;
  static create() {
    return new FormBuilder();
  }

  constructor() {
    this._delegate = new NgFormBuilder();
  }

  group<T>(value: T): FormGroup<T>;
  group<S>(controlsConfig: {[key: string]: any}, extra?: {[key: string]: any}): FormGroup<S>;
  group(controlsConfig: {[key: string]: any}, extra?: {[key: string]: any}) {
    return this._delegate.group(controlsConfig, extra);
  }

  control<T>(value: T, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControl<T>;
  control(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    return this._delegate.control(formState, validator, asyncValidator);
  }

  array<T>(controls: AbstractControl<T>[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): FormArray<T>;
  array<S>(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): FormArray<S>;
  array(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null) {
    return this._delegate.array(controlsConfig, validator, asyncValidator);
  }
}
