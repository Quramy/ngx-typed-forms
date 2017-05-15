import { FormBuilder } from "./";

const fb = new FormBuilder();

const g = fb.group({
  firstName: "Yosuke",
  lastName: "Kurami",
});

g.valueChanges.subscribe(user => console.log(user.firstName));
g.valueChanges.subscribe(user => console.log(user.name));
