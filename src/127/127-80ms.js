export var ladderLength = function (beginWord, endWord, wordList) {
  const dictionary = new Set(wordList)
  if (!dictionary.has(endWord)) return 0

  const ans = bfs(beginWord, endWord, dictionary)
  return ans == -1 ? 0 : ans + 1
}

var bfs = function (beginWord, endWord, dictionary) {
  var update = function (queue, cur, other) {
    const curWord = queue.shift()

    for (let i = 0; i < curWord.length; i++) {
      for (let j = 0; j < 26; j++) {
        const newChar = String.fromCharCode(97 + j)
        const nextWord = curWord.slice(0, i) + newChar + curWord.slice(i + 1)
        if (dictionary.has(nextWord)) {
          if (cur.has(nextWord)) {
            continue
          }
          if (other.has(nextWord)) {
            return cur.get(curWord) + 1 + other.get(nextWord)
          } else {
            queue.push(nextWord)
            cur.set(nextWord, cur.get(curWord) + 1)
          }
        }
      }
    }
    return -1
  }

  // q1 starts from beginWord, q2 starts from endWord
  const q1 = [beginWord],
    q2 = [endWord]
  const m1 = new Map(),
    m2 = new Map()
  // curWord -> steps from original word
  m1.set(beginWord, 0)
  m2.set(endWord, 0)

  while (q1.length > 0 && q2.length > 0) {
    let t = -1
    if (q1.length <= q2.length) {
      t = update(q1, m1, m2)
    } else {
      t = update(q2, m2, m1)
    }
    if (t != -1) return t
  }

  return -1
}
