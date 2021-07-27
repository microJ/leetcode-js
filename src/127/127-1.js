// ============================== Info ==============================
// https://leetcode-cn.com/problems/word-ladder/
// https://leetcode-cn.com/submissions/detail/190743057/
// 执行用时：432 ms, 内存消耗：41 MB;
// ============================== 原理 ==============================
// 1. BFS
// 2. 列队元素存储 level 信息
// 3. 将当前单词与 wordList 中的单词做【是否相差一个字母】的匹配
// ============================== 复杂度 ==============================
// 1. 时间复杂度：O(m * n * q + n + i)
// 执行时间：word.length * wordList.length * queue.length
// 最坏情况下：
//    endWord 所在位置 i
//    word.length = m 一般不会很大;
//    wordList.length = n
//    queue.length = q 最坏情况下为 n
//
// 2. 空间复杂度: O(n)

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
export var ladderLength = function (beginWord, endWord, wordList) {
  // endword 不存在
  if (wordList.indexOf(endWord) < 0) {
    return 0
  }

  const _wordList = wordList.filter((v) => v !== beginWord)
  const queue = [
    {
      value: beginWord,
      level: 1,
      // path: [beginWord],
    },
  ]

  while (queue.length) {
    const {
      value,
      level,
      // path
    } = queue.shift()
    for (var i = _wordList.length - 1; i >= 0; i--) {
      const word = _wordList[i]

      // 找到满足变换条件的单词
      if (fuzzyLike(word, value)) {
        // 已找到
        if (word === endWord) {
          // console.log(path, word)
          return level + 1
        }

        _wordList.splice(i, 1)
        queue.push({
          value: word,
          level: level + 1,
          // path: path.concat(word),
        })
      }
    }
  }

  return 0
}

/**
 * 判断两个单词是否仅相差一个字母
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
export function fuzzyLike(word1, word2) {
  let diffCount = 0
  for (var i = word1.length - 1; i >= 0; i--) {
    if (word1[i] !== word2[i]) {
      diffCount++
    }
    if (diffCount > 1) return false
  }
  return true
}
