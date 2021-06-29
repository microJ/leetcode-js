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

  const _wordList = wordList.slice()
  const queue = [
    {
      value: beginWord,
      level: 1,
    },
  ]

  while (queue.length) {
    const { value, level } = queue.shift()
    for (var i = _wordList.length - 1; i >= 0; i--) {
      const word = _wordList[i]

      // 找到满足变换的单词
      if (fuzzyLike(word, value)) {
        // 已找到
        if (word === endWord) return level + 1

        _wordList.splice(i, 1)
        queue.push({
          value: word,
          level: level + 1,
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
  return (
    word1.slice(0, 2) === word2.slice(0, 2) ||
    word1.slice(1) === word2.slice(1) ||
    word1.slice(0, 1) + word1.slice(2) === word2.slice(0, 1) + word2.slice(2)
  )
}
