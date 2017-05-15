import { FormBuilder } from "./";

const fb = FormBuilder.create();

const g = fb.group({
  firstName: "Yosuke",
  lastName: "Kurami",
  age: 20,
});

g.valueChanges.subscribe(user => console.log(user.firstName));
// g.valueChanges.subscribe(user => console.log(user.name));

g.get("firstName");
g.get("age").valueChanges.subscribe(a => console.log(a));

interface ComplexForm {
  name: {
    first: string;
    last: string;
  };
  age: number;
  favoriteDishes: string[];
};

const form = fb.group<ComplexForm>({
  name: fb.group({ first: 'Yosuke', last: 'Kurami' }),
  age: 20,
  favoriteDishes: fb.array<string>([fb.control('faboriteDish')]),
});

const nameCtrl = form.get('name'); // returns AbstractControl<{ first: string; last: string; }>
nameCtrl.valueChanges.subscribe(({ last, first }) => console.log(last, first));

nameCtrl.get<string>([0]).valueChanges.subscribe(v => console.log(v));
