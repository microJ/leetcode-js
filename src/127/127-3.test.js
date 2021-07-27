import { describe, expect, test } from "@jest/globals"
import { fuzzyLike, ladderLength } from "./127-3.js"

describe("127 word-ladder 3", () => {
  test(`fuzzyLike`, () => {
    //   length 3
    expect(fuzzyLike("abc", "bbc")).toBe(true)
    expect(fuzzyLike("abc", "aac")).toBe(true)
    expect(fuzzyLike("abc", "aba")).toBe(true)
    expect(fuzzyLike("acc", "aba")).toBe(false)
    expect(fuzzyLike("abc", "def")).toBe(false)
    expect(fuzzyLike("abc", "abc")).toBe(true)
    // length 4
    expect(fuzzyLike("abcd", "abca")).toBe(true)
    expect(fuzzyLike("abcd", "abaa")).toBe(false)
  })

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
