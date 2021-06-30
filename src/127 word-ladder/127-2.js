// ============================== Info ==============================
// https://leetcode-cn.com/problems/word-ladder/
// https://leetcode-cn.com/submissions/detail/191090983/
// 执行用时: 408 ms, 内存消耗: 41.1 MB
// ============================== 原理 ==============================
// BFS
// 使用变量存储 level，而不是每个都队列元素都存储一份，时间变快了20ms
// ============================== 复杂度 ==============================
// 时间复杂度: 同 127-1
// 空间复杂度: 同 127-1

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
export var ladderLength = function (beginWord, endWord, wordList) {
  // endword 不存在
  if (!wordList.some((v) => v === endWord)) {
    return 0
  }

  const _wordList = wordList.filter((v) => v !== beginWord)
  const queue = [beginWord]
  let level = 1
  let currentCount = 1
  let nextCount = 0

  while (queue.length) {
    const value = queue.shift()

    for (var i = _wordList.length - 1; i >= 0; i--) {
      const word = _wordList[i]

      // 找到满足变换条件的单词
      if (fuzzyLike(word, value)) {
        // 已找到
        if (word === endWord) {
          return level + 1
        }

        _wordList.splice(i, 1)
        queue.push(word)
        nextCount++
      }
    }

    currentCount--
    // 当前 level 元素都已出列
    if (currentCount === 0) {
      level++
      currentCount = nextCount
      nextCount = 0
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