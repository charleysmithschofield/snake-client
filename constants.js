
// constant delaring the IP address
const IP = "localhost";
// constant declaring the PORT
const PORT = 50541;


// declare move object, containing logic for the snake's movement
const move = {
  'w': 'Move: up',
  'a': 'Move: left',
  'd': 'Move: right',
  's': 'Move: down'
};

// declare say object, containing logic for things for the snake's to say.
const say = {
  'r': "Say: Ready to lose?",
  'e': "Say: Eat my dust!",
  'f': "Say: Fear my Feasting!"
};
  
module.exports = {
  IP,
  PORT,
  move,
  say
};