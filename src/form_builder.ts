import {
  FormBuilder as NgFormBuilder,
} from "@angular/forms";

import { FormGroup } from "./model";

export class FormBuilder {
  private _delegate: NgFormBuilder;
  constructor() {
    this._delegate = new NgFormBuilder();
  }

  group<T>(value: T): FormGroup<T> {
    return this._delegate.group(value) as FormGroup<T>;
  }
}
