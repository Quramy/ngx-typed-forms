# ngx-typed-forms [![wercker status](https://app.wercker.com/status/1b1a639ac430358b93ea3960352ea758/s/master "wercker status")](https://app.wercker.com/project/byKey/1b1a639ac430358b93ea3960352ea758) [![npm version](https://badge.fury.io/js/ngx-typed-forms.svg)](https://badge.fury.io/js/ngx-typed-forms)

Provides wrapped [Angular's FormBuilder](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html) to write `AbstractControl<T>`. 
It's a workaround for [issue#13721](https://github.com/angular/angular/issues/13721).

## Install

```sh
yarn add ngx-typed-forms
```

or

```sh
npm install ngx-typed-forms
```

### Remarks
**This module requires TypeScript v2.3.2 or later because using [Generics defaults](https://github.com/Microsoft/TypeScript/pull/13487) feature**.

## Usage
First, import module into your app:

```ts
import { NgxTypedFormsModule } from 'ngx-typed-forms';

@NgModule({
  imports: [NgxTypedFormsModule],
})
export class AppModule { }
```

And you can build some form group with `FormBuilder` provided by this module. For example:

```ts
// import { FormBuilder } from '@angular/forms';
import { FormBuilder } from 'ngx-typed-forms';

@Component({...})
export MyFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const group = this.formBuilder.group({
      firstName: 'Yosuke',
      lastName: 'Kurami',
    });

    group.valueChanges().subscrive(user => {
      /* the user argument has a type, { firstName: string; lastName: string } */
    });
  }
}
```

Or more complex example:

```ts
interface ComplexForm {
  name: {
    first: string;
    last: string;
  };
  age: number;
  favoriteDishes: string[];
};

const form = formBuilder.group<ComplexForm>({
  name: fb.group({ first: 'Yosuke', last: 'Kurami' }),
  age: 32,
  favoriteDishes: fb.array<string>([fb.control('faboriteDish')]),
});

const nameCtrl = form.get('name'); // returns AbstractControl<{ first: string; last: string; }>
nameCtrl.valueChanges.subscribe(({ last, first }) => console.log(last, first));
```

# License
This software is released under the MIT License, see LICENSE under the this repository.

