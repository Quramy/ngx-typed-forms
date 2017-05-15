import { Injectable } from "@angular/core";
import {
  FormBuilder as NgFormBuilder,
  ValidatorFn,
  AsyncValidatorFn,
} from "@angular/forms";

import { FormControl, FormGroup, FormArray } from "./model";

@Injectable()
export class FormBuilder {

  static create() {
    return new FormBuilder(new NgFormBuilder());
  }

  constructor(public _delegate: NgFormBuilder) { }

  group<T>(value: T): FormGroup<T>;
  group<S>(controlsConfig: {[key: string]: any}, extra?: {[key: string]: any}): FormGroup<S>;
  group(controlsConfig: {[key: string]: any}, extra?: {[key: string]: any}) {
    return this._delegate.group(controlsConfig, extra);
  }

  control<S>(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControl<S>;
  control(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    return this._delegate.control(formState, validator, asyncValidator);
  }

  array<S>(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): FormArray<S>;
  array(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null) {
    return this._delegate.array(controlsConfig, validator, asyncValidator);
  }
}
