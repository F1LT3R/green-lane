import test from 'ava'
import wordCount from './word-count'

test('module loads', t => {
	t.is(typeof wordCount, 'object')
	t.is(typeof wordCount.sentence, 'function')
})

test('sentence', t => {
	const sentence = 'This is a sentence.'
	const count = wordCount.sentence(sentence)
	t.is(count, 4)
})

test('sentences', t => {
	const sentences = [
		'This is a sentence.',
		'This is another sentence'
	]
	const count = wordCount.sentence(sentences)
	t.is(count, 8)
})

