# ngx-typed-forms

Provides wrapped [Angular's FormBuilder](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html) to write `AbstractControl<T>`.

It's a workaround for [issue#13721](https://github.com/angular/angular/issues/13721).

## Install

```sh
yarn ngx-typed-forms
```

or

```sh
npm install ngx-typed-forms
```

## Usage

You can use this as the original FormBuilder:

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

