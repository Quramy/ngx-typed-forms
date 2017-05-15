import { NgModule } from "@angular/core";
export { AbstractControl, FormControl, FormArray, FormGroup } from "./model";
export { FormBuilder } from "./form_builder";
import { FormBuilder } from "./form_builder";

@NgModule({
  providers: [ FormBuilder ],
})
export class NgxTypedFormsModule {
}
