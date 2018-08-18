const endPunctuation = ['.', '!', '?']

const midPunctuation = [',', ':', ';', '…', '-']

const wrappers = [
	'\'',
	'(',
	'[',
	'{',
	'<',
	'/',
	'\\',
	'`',
	'"',
	'*',
	'“',
	'„',
	'»',
	'«',
	'”',
	'「',
	'﹁',
	'‘',
	'⟦',
	'‹',
	'⸤',
	'【',
	'⁅',
	'﴾',
	'｛',
	'〝',
	'｟',
	'〈',
	'《',
	'（'
]

const setOfAllPunctuation = [
	...endPunctuation,
	...midPunctuation,
	...wrappers
]

module.exports = setOfAllPunctuation
