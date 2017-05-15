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

interface ComplexFormType {
  hoge: string;
  foo: {
    age: number;
    city: string;
  }
};

const g2 = fb.group<ComplexFormType>({
  hoge: "Hoge",
  foo: fb.group({ age: 10, city: "tokyo" }),
});
