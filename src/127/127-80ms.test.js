import { describe, expect, test } from "@jest/globals"
import { ladderLength } from "./127-80ms.js"

describe("127 word-ladder 3", () => {
  test(`ladderLength`, () => {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toBe(5)

    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
    ).toBe(0)

    expect(
      ladderLength("leet", "code", [
        "lest",
        "leet",
        "lose",
        "code",
        "lode",
        "robe",
        "lost",
      ])
    ).toBe(6)
  })
})
