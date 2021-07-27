import b from "benny"
import { ladderLength as ladderLength1 } from "./127-1.js"
import {
  ladderLength as ladderLength2,
  fuzzyLike as fuzzyLike2,
} from "./127-2.js"
import {
  ladderLength as ladderLength3,
  fuzzyLike as fuzzyLike3,
} from "./127-3.js"
import {ladderLength as ladderlength80ms} from "./127-80ms.js"

b.suite(
  "127 word-ladder",

  b.add("127-1", () => {
    ladderLength1("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  }),

  b.add("127-2", () => {
    ladderLength2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  }),

  b.add("127-3", () => {
    ladderLength3("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  }),

  b.add('127-80ms', () => {
    ladderlength80ms("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "127", version: "1.0.0" }),
  b.save({ file: "127", format: "chart.html" })
)

b.suite(
  "127 fuzzyLike",

  b.add("127-2", () => {
    fuzzyLike2("abcdefghijklmn", "abcdefghijklma")
  }),

  b.add("127-3", () => {
    fuzzyLike3("abcdefghijklmn", "abcdefghijklma")
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "127.fuzzyLike", version: "1.0.0" }),
  b.save({ file: "127.fuzzyLike", format: "chart.html" })
)
