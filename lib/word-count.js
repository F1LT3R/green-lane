const path = require('path')

const punctuation = require(path.join(__dirname, 'punctuation'))

module.exports = {
	sentence: sentence => {
		const words = sentence.split(' ')

		const remainingWords = words.map(word =>
			punctuation.includes(word) ?
				false : word
		)

		return remainingWords.length
	}
}
