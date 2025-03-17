import React, { useState } from 'react';
import './index.css';

const natoPhonetic = {
  a: 'Alpha', b: 'Bravo', c: 'Charlie', d: 'Delta', e: 'Echo',
  f: 'Foxtrot', g: 'Golf', h: 'Hotel', i: 'India', j: 'Juliett',
  k: 'Kilo', l: 'Lima', m: 'Mike', n: 'November', o: 'Oscar',
  p: 'Papa', q: 'Quebec', r: 'Romeo', s: 'Sierra', t: 'Tango',
  u: 'Uniform', v: 'Victor', w: 'Whiskey', x: 'X-ray', y: 'Yankee',
  z: 'Zulu', '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three',
  '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight',
  '9': 'Nine', '!': '"Exclamation Mark"', '"': '"Double Quote"', '#': '"Hash"',
  '$': '"Dollar Sign"', '%': '"Percent Sign"', '&': '"Ampersand"', "'": '"Apostrophe"',
  '(': '"Left Parenthesis"', ')': '"Right Parenthesis"', '*': '"Asterisk"',
  '+': '"Plus Sign"', ',': '"Comma"', '-': '"Hyphen"', '.': '"Period"',
  '/': '"Slash"', ':': '"Colon"', ';': '"Semicolon"', '<': '"Less Than"',
  '=': '"Equals Sign"', '>': '"Greater Than"', '?': '"Question Mark"',
  '@': '"At Symbol"', '[': '"Left Square Bracket"', '\\': '"Backslash"',
  ']': '"Right Square Bracket"', '^': '"Caret"', '_': '"Underscore"',
  '`': '"Grave Accent"', '{': '"Left Curly Brace"', '|': '"Vertical Bar"',
  '}': '"Right Curly Brace"', '~': '"Tilde"'
};

const PhoneticTranslator = () => {
  const [text, setText] = useState('');
  const [phonetic, setPhonetic] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    setText(inputText);
    const phoneticArray = inputText.split('').map((char) => natoPhonetic[char] || char);
    setPhonetic(phoneticArray.join(' '));
  };

  const handleReset = () => {
    setText('');
    setPhonetic('');
  };

  return (
    <div className="container">
      <h1 className="title">NATO Phonetic Alphabet Translator</h1>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Enter your text here..."
        className="input"
      />
      <button onClick={handleReset} className="reset">Reset</button>
      <h2 className="phonetic">{phonetic}</h2>
    </div>
  );
};

export default PhoneticTranslator;
