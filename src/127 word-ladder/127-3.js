// ============================== Info ==============================
// https://leetcode-cn.com/problems/word-ladder/
// https://leetcode-cn.com/submissions/detail/191112488/
// 执行用时: 352 ms, 内存消耗: 41.1 MB
// ============================== 原理 ==============================
// BFS
// 把树的每一层当成一个队列进行处理
// 比 127-2 时间缩减 8ms
// ============================== 复杂度 ==============================
// 时间复杂度: O(i + n * m * l)
//    endWord 所在位置i
//    wordList.length n
//    word.length m
//    level l
// 空间复杂度: O(n)

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

  let queue = [beginWord]
  let level = 1

  while (queue.length) {
    const newQueue = []

    for (var i = queue.length - 1; i >= 0; i--) {
      for (var j = wordList.length - 1; j >= 0; j--) {
        const word = wordList[j]

        if (word === beginWord) {
          wordList.splice(j, 1)
          continue
        }

        // 找到满足变换条件的单词
        if (fuzzyLike(word, queue[i])) {
          // 已找到
          if (word === endWord) {
            return level + 1
          }

          wordList.splice(j, 1)
          newQueue.push(word)
        }
      }
    }

    queue = newQueue
    level++
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
