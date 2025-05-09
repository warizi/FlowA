import { describe, it, expect } from "vitest";
import {
  TodoCreateSchema,
  TodoSchema,
  TodoLabelSchema,
  TodoSubSchema,
  TodoCateCreateSchema,
} from "./schema";

describe("TodoSchema", () => {
  it("should pass with valid todo", () => {
    const todo = {
      id: 1,
      title: "Test todo",
      isDone: false,
    };
    expect(TodoSchema.parse(todo)).toEqual(expect.objectContaining(todo));
  });

  it("should fail if title is empty", () => {
    expect(() =>
      TodoCreateSchema.parse({ title: "", isDone: false })
    ).toThrow("할일 제목은 필수입니다.");
  });

  it("should fill default values", () => {
    const result = TodoCreateSchema.parse({ title: "Test" });
    expect(result.order).toBe(0);
    expect(result.isDone).toBe(false);
    expect(result.isImportant).toBe(false);
  });

  it("should accept optional fields", () => {
    const result = TodoCreateSchema.parse({ title: "Test" });
    expect(result.memo).toBeUndefined();
    expect(result.label).toBeUndefined();
  });
});

describe("TodoLabelSchema", () => {
  it("should fail if name or color is empty", () => {
    expect(() =>
      TodoLabelSchema.parse({ id: 1, name: "", color: "", order: 0 })
    ).toThrow();
  });
});

describe("TodoSubSchema", () => {
  it("should fail if text is empty", () => {
    expect(() =>
      TodoSubSchema.parse({ text: "", isDone: false })
    ).toThrow("서브 할일은 필수입니다.");
  });
});

describe("TodoCateCreateSchema", () => {
  it("should parse without id", () => {
    const result = TodoCateCreateSchema.parse({ name: "Category", order: 2 });
    expect(result.order).toBe(2);
  });
});
