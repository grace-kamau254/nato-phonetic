import { useState } from "react";
const natoPhonetic = {
  "a":"alpha"  
 "b": "bravo"  
"c": "charlie"   
"d": "delta",
"e": "echo", 
"f": "foxtrot",  
"g": "golf",  
"h": "hotel",  
"i": "india",  
"j": "juliett",  
"k": "kilo",
"l": "lima"  
"m": "mike"  
"n": "november" 
"o": "oscar"  
p": "papa"   
"q": "quebec"  
"r": "romeo"   
"s": "sierra"  
"t": "tango" 
"u": "uniform"   
"v": "victor"   
"w": "whiskey"  
"x": "xray"   
"y": "yankee"   
"z": "zulu"   
"0": "zero"   
"1": "one"   
"2": "two"   
"3": "three"  
"4": "four"   
"5": "five",  
"6": "six",  
"7": "seven",
"8": "eight",
"9": "nine",
"!": "exclamation mark",  
" - "double quote"  
"#": "hash",
"$": "dollar sign"  
"%": "percent sign"  
"&" :"ampersand" 
"'":"apostrophe" 
"(": "left parenthesis"  
")": "right parenthesis"  
"*":"asterisk" 
"+" : "plus sign"  
"," :"comma"  
"-":"hyphen"  
 ".": "period"  
"/" :"slash"  
":" : "colon"  
";" : "semicolon"  
"<" : "less than"  
"=" : "equals sign"  
">" : "greater than"  
? : "question mark"  
@ : "at symbol"  
[ : "left square bracket"  
\ : 'backslash'  
] : "right square bracket"  
^ : "caret"  
 _: "underscore" 
` : "grave accent"  
{ : "left curly brace"  
| : "vertical bar"  
} : "right curly brace"  
~ : 'tilde'  

}
const phoneticTranslator = () => {
  const [text, setText] = useState("");
  const [phonetic, setPhonetic] = useState("");
  
  const handleChange = (event) => {
    setText(event.target.value);
    setPhonetic(natoPhonetic[event.target.value]);
  };
  const handleReset = () => {
    setText("");
    setPhonetic("");
  };
  return (
    <div className="container">
      <h1 className="title">NATO PHONETIC ALPHABET</h1>
      <input type="text" onChange={handleChange} value={input}Placeholder="Enter yor text here..."className="input" />
      <button onClick={handleReset} className="reset">Reset</button>
      < className="phonetic">{Convert text to NATO PHONETIC AlPHABET}</h2>