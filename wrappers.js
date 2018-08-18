const wrappers = [
	{
		a: "'",
		z: "'",
	},
	{
		a: "(",
		z: ")"
	},
	{
		a: "[",
		z: "]"
	},
	{
		a: "{",
		z: "}"
	},
	{
		a: "<",
		z: ">"
	},
	{
		a: "/",
		z: "/"
	},
	{
		a: "\\",
		z: "\\"
	},
	{
		a: "`",
		z: "`"
	},
	{
		a: "\"",
		z: "\"",
	},
	{
		a: "*",
		z: "*"
	},
	{
		a: "“",
		z: "”"
	},
	{
		a: "„",
		z: "“"
	},
	{
		a: "»",
		z: "‏«"
	},
	{
		a: "«",
		z: "»"
	},
	{
		a: "”",
		z: "”"
	},
	{
		a: "„",
		z: "”"
	},
	{
		a: "「",
		z: "」"
	},
	{
		a: "»",
		z: "«"
	},
	{
		a: "﹁",
		z: "﹂"
	},
	{
		a: "‘",
		z: "’"
	},
	{
		a: "⟦",
		z: "⟧"
	},
	{
		a: "‹",
		z: "›"
	},
	{
		a: "⸤",
		z: "⸥"
	},
	{
		a: "【",
		z: "】"
	},
	{
		a: "⁅",
		z: "⁆"
	},
	{
		a: "﴾",
		z: "﴿"
	},
	{
		a: "｛",
		z: "｝"
	},
	{
		a: "〝",
		z: "〞"
	},
	{
		a: "｟",
		z: "｠"
	},
	{
		a: "〈",
		z: "〉"
	},
	{
		a: "《",
		z: "》"
	},
	{
		a: "（",
		z: "）"
	},
];

const setOfAllWrappers = []

wrappers.forEach(wrapper => {
	if (!setOfAllWrappers.includes(wrapper.a)) {
		setOfAllWrappers.push(wrapper.a)
	}
	if (!setOfAllWrappers.includes(wrapper.b)) {
		setOfAllWrappers.push(wrapper.b)
	}
})

console.log(setOfAllWrappers)