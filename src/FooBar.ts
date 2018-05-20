export class FooBar {
  private foo: string= 'foo';
  constructor(newFoo: string) {
    this.foo = newFoo;
  }
  private abc(): string {
    return this.foo + " called";
  }

  public input(): void{
    console.log(this.abc());
  }
}

export const fooBar = new FooBar("foobar");
