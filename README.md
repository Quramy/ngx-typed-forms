# ngx-typed-forms

## Install

```sh
yarn ngx-typed-forms
```

or

```sh
npm install ngx-typed-forms
```

## Usage

```
import { FormBuilder } from 'ngx-typed-forms';

const group = FormBuilder.group({
  firstName: 'Yosuke',
  lastName: 'Kurami',
});

group.valueChanges().subscrive(user => {
  /* the user argument has a type, { firstName: string; lastName: string } */
});
```

#License
This software is released under the MIT License, see LICENSE under the this repository.

