const httpHandler = require('./httpHandler');
const keypress = require('./keypressHandler');
const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  // keypress.initialize(message => messages.push(message));
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  // httpHandler.initialize(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};

module.exports.messages = messages;