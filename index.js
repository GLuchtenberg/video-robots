const readline = require('readline-sync');

function start() {
  const content = {};

  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ');
  }
  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of'];
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option');
    const textOfPrefix = prefixes[selectedPrefixIndex];
    return textOfPrefix;
  }

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  console.log(content);
}

start();
