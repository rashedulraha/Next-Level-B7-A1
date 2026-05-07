# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript is popular because it helps developers write safer and more predictable code using static types. However, TypeScript also provides special types like `any` and `unknown` for handling dynamic or unpredictable data.

Although both can store any kind of value, they behave very differently. The `any` type removes type checking completely, while `unknown` forces developers to verify data before using it. This is why `unknown` is considered the safer choice.

---

# What is `any`?

The `any` type disables TypeScript's type checking system. When a variable is declared as `any`, TypeScript allows any operation on it without checking for errors.

## Example of `any`

```ts
let userData: any = "Rashed";

userData = 25;
userData = true;

userData.toUpperCase();
```
