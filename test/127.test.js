import { describe, expect, test } from "@jest/globals"
import { fuzzyLike, ladderLength } from "../src/127.js"

describe("127", () => {
  test("fuzzyLike", () => {
    expect(fuzzyLike("abc", "bbc")).toBe(true)
    expect(fuzzyLike("abc", "aac")).toBe(true)
    expect(fuzzyLike("abc", "aba")).toBe(true)
    expect(fuzzyLike("acc", "aba")).toBe(false)
    expect(fuzzyLike("abc", "def")).toBe(false)
    expect(fuzzyLike("abc", "abc")).toBe(true)
  })

  test("ladderLength", () => {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toBe(5)

    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
    ).toBe(0)
  })
})
