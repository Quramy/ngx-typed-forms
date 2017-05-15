import { TestBed, inject } from "@angular/core/testing";
import {
  FormControl as NgFormControl,
  FormGroup as NgFormGroup,
  FormArray as NgFormArray,
} from "@angular/forms";
import { 
  FormControl,
  FormGroup,
  FormArray,
} from "./model";
import { FormBuilder } from "./form_builder";
import { NgxTypedFormsModule } from "./ngx_typed_forms_module";
import * as assert from "assert";

describe("FormBuilder", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxTypedFormsModule]
    });
  });

  describe(".control()", () => {
    it("should return original formControl instance", inject([FormBuilder], (builder: FormBuilder) => {
      const fc: FormControl<string> = builder.control("some value");
      assert(fc instanceof NgFormControl);
    }));

    it("should get value from created formControl", inject([FormBuilder], (builder: FormBuilder) => {
      const fc: FormControl<string> = builder.control("some value");
      assert.deepStrictEqual(fc.value, "some value");
    }));
  });

  describe(".group()", () => {
    it("should return original formGroup instance", inject([FormBuilder], (builder: FormBuilder) => {
      const fg: FormGroup<{ name: string }> = builder.group({ name: "hoge" });
      assert(fg instanceof NgFormGroup);
    }));

    it("should get value from created formGroup", inject([FormBuilder], (builder: FormBuilder) => {
      const fg: FormGroup<{ name: string }> = builder.group({ name: "hoge" });
      assert.deepStrictEqual(fg.value, { name: "hoge" });
    }));
  });

  describe(".array()", () => {
    it("should return original formArray instance", inject([FormBuilder], (builder: FormBuilder) => {
      const fa: FormArray<string> = builder.array([
        builder.control("hoge"),
        builder.control("foo"),
      ]);
      assert(fa instanceof NgFormArray);
    }));

    it("should get value from created formArray", inject([FormBuilder], (builder: FormBuilder) => {
      const fa: FormArray<string> = builder.array<string>([
        builder.control("hoge"),
        builder.control("foo"),
      ]);
      assert.deepStrictEqual(fa.value, ["hoge", "foo"]);
    }));
  });

  describe("complex pattern", () => {
    it("should create formGroup with controls, array, group methods", inject([FormBuilder], (builder: FormBuilder) => {
      const fg = builder.group<ComplexForm>({
        name: builder.group({ first: "Yosuke", last: "Kurami" }),
        age: 32,
        favoriteDishes: builder.array([
          builder.control("pizza"),
          builder.control("sushi"),
        ]),
      });
      assert.deepStrictEqual(fg.value, {
        name: {
          first: "Yosuke",
          last: "Kurami",
        },
        age: 32,
        favoriteDishes: ["pizza", "sushi"],
      });
      assert.deepStrictEqual(fg.get("name").value, { first: "Yosuke", last: "Kurami" }, "group.get returns nested control");
    }));
  });
});

interface ComplexForm {
  name: {
    last: string;
    first: string;
  }
  age: number;
  favoriteDishes: string[];
}
