const Lexed = require('lexed').Lexed

const endPunctuation = [".", "!", "?"]

const tree = new Lexed('Microsoft Co. released windows 10. But then everything fell apart (at least that\'s what they say)! Oh no.').lexer().tokens;

console.log(tree);