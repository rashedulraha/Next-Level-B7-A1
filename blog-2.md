````
# How Generics Help Build Reusable and Strictly Typed Code in TypeScript

## Introduction

Generics are one of the most powerful features of TypeScript. They allow developers to create reusable functions, classes, and components while keeping full type safety.

Without generics, developers often need to write duplicate code for different data types. Generics solve this problem by making code flexible and reusable.

---

# What Are Generics?

Generics allow a function or class to work with multiple types while preserving type information.

Instead of writing separate logic for strings, numbers, or objects, developers can write one reusable solution.

---

# Generic Function Example

## Without Generics

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
````
