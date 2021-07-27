import chalk from "chalk"
import path from "path"
import { fileURLToPath } from "url"

console.log(process.argv)
const index = process.argv[2]
if (index == undefined) {
  console.log(chalk.red("❌ 请指定题目编号: yarn benchmark {code number}"))
} else {
  import(
    path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      `../src/${index}/benchmark.js`
    )
  )
}
