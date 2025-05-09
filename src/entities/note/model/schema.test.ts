import { describe, expect, it } from 'vitest';

import {
  NoteSchema,
  NoteCreateSchema,
  NoteCateSchema,
  NoteCateCreateSchema,
  NoteLabelSchema,
  NoteLabelCreateSchema,
} from "./schema";

describe("NoteSchema", () => {
  it("should pass with valid note", () => {
    const note = {
      id: 1,
      title: "Test",
      content: "Hello",
      isImportant: true,
    };
    expect(NoteSchema.parse(note)).toEqual(expect.objectContaining(note));
  });

  it("should fail if title is empty", () => {
    expect(() =>
      NoteCreateSchema.parse({ title: "", content: "a" })
    ).toThrow("노트 제목은 필수입니다.");
  });

  it("should fill default values", () => {
    const result = NoteCreateSchema.parse({ title: "x", content: "y" });
    expect(result.isImportant).toBe(false);
    expect(result.order).toBe(0);
  });

  it("should accept optional fields as undefined", () => {
    const result = NoteCreateSchema.parse({ title: "x", content: "y" });
    expect(result.cateId).toBeUndefined();
    expect(result.label).toBeUndefined();
  });

  it("should reject unknown fields", () => {
    expect(() =>
      NoteCreateSchema.parse({ title: "x", content: "y", extra: "wrong" })
    ).toThrow();
  });
});

describe("NoteLabelSchema", () => {
  it("should pass with valid label", () => {
    const label = {
      id: 1,
      name: "Urgent",
      order: 2,
      color: "#FF0000",
    };
    expect(NoteLabelSchema.parse(label)).toEqual(label);
  });

  it("should fail with empty name", () => {
    expect(() =>
      NoteLabelCreateSchema.parse({ name: "", color: "#000" })
    ).toThrow("라벨 이름은 필수입니다.");
  });

  it("should fail with empty color", () => {
    expect(() =>
      NoteLabelCreateSchema.parse({ name: "High", color: "" })
    ).toThrow("라벨 색상은 필수입니다.");
  });

  it("should set default order", () => {
    const label = NoteLabelCreateSchema.parse({
      name: "Default",
      color: "#ccc",
    });
    expect(label.order).toBe(0);
  });

  it("should reject unknown fields", () => {
    expect(() =>
      NoteLabelCreateSchema.parse({ name: "Test", color: "#fff", unknown: 123 })
    ).toThrow();
  });
});

describe("NoteCateSchema", () => {
  it("should pass with valid category", () => {
    const cate = {
      id: "abc",
      name: "Work",
      order: 1,
    };
    expect(NoteCateSchema.parse(cate)).toEqual(cate);
  });

  it("should fail with empty name", () => {
    expect(() =>
      NoteCateCreateSchema.parse({ name: "" })
    ).toThrow("카테고리 이름은 필수입니다.");
  });

  it("should set default order", () => {
    const cate = NoteCateCreateSchema.parse({ name: "Personal" });
    expect(cate.order).toBe(0);
  });

  it("should reject unknown fields", () => {
    expect(() =>
      NoteCateCreateSchema.parse({ name: "x", extra: 1 })
    ).toThrow();
  });
});
