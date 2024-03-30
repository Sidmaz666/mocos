const input_elm = document.querySelector("#input-text")
const output_elm = document.querySelector("#output")

const morse_map = {
  "a" : ".-",
  "b" : "-...",
  "c" : "-.-.",
  "d" : "-..",
  "e" : ".",
  "f" : "..-.",
  "g" : "--.",
  "h" : "....",
  "i" : "..",
  "j" : ".---",
  "k" : "-.-",
  "l" : ".-..",
  "m" : "--",
  "n" : "-.",
  "o" : "---",
  "p" : ".--.",
  "q" : "--.-",
  "r" : ".-.",
  "s" : "...",
  "t" : "-",
  "u" : "..-",
  "v" : "...-",
  "w" : ".--",
  "x" : "-..-",
  "y" : "-.--",
  "z" : "--..",
  "1" : ".----",
  "2" : "..---",
  "3" : "...--",
  "4" : "....-",
  "5" : ".....",
  "6" : "-....",
  "7" : "--...",
  "8" : "---..",
  "9" : "----.",
  "0" : "-----",
  "," : "--..--",
  "." : ".-.-.-",
  "?" : "..--..",
  ";" : "-.-.-",
  ":" : "---...",
  "/" : "-..-.",
  "-" : "-....-",
  "'" : ".----.",
  "(" : "-.--.",
  ")" : "-.--.-",
  "_" : "..--.-",
  "@" : ".--.-.",
  "!" : "-.-.--",
  "&" : ".-...",
  "=" : "-...-",
  "+" : ".-.-.",
  '"' : ".-..-.",
  "$" : "...-..-"
}

function encode(){
  	const input_value = input_elm.value.toLowerCase().trim()
	if(input_value < 1) return
  	const words = input_value.split(/\s+/)
  	const transform = []
  	words.forEach(w => {
  		const letter = w.split('')
	  	const transform_w = []
	  	letter.forEach(l => {
			transform_w.push(
			  morse_map[`${l}`]
			)
		})
	     transform.push(transform_w.join(" "))
  	});
  	output_elm.textContent = transform.join("\t")
}

function decode(){
  	const input_value = input_elm.value.trim()
  	if(input_value < 1) return
  	const words = input_value.split("\t")
  	const reform = []
  	words.forEach(w => {
	  const words = []
	  const letter = w.split(" ")
	  letter.forEach(l => {
		words.push(get_key_from_map(l))
	  })
	  reform.push(words.join(""))
	})
  	output_elm.textContent = reform.join(" ")
}

function get_key_from_map(value) {
    return Object.keys(morse_map).find(key => morse_map[key] === value);
}
