const fs = require('fs');
const ts = require('typescript');

const content = fs.readFileSync('constants.tsx', 'utf-8');

// Just replace EN_CONTENT's strings with empty strings, or translate them.
// Actually, it's easier to just use regex to replace all English strings with Uzbek.
