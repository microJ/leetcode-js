// ============================== Info ==============================
// https://leetcode-cn.com/problems/word-ladder/
// ============================== 原理 ==============================
// BFS
// 改进 127-3，不创建新数组
// ============================== 复杂度 ==============================
// 时间复杂度:
// 空间复杂度:
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

  const queue = [beginWord]

  while (queue.length) {
    const length = queue.length
    for(var i = 0;i<length)
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
    if (word1[i] !== word2[i] && ++diffCount > 1) {
      return false
    }
  }
  return true
}
