# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. 

As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.



## Installation

### Installing the Server:

 - Before you can run this client, you will need to be running the server side which you can download and install from here:

        git clone https://github.com/lighthouse-labs/snek-multiplayer.git

        cd snek-multiplayer

        npm install

        npm run play



### Cloning the Snake Client Project

  - Copy HTTP or SSH link from this snake-client repository.
  - Make a directory to house this game on your local machine

        touch <directory name>
        cd <directory name>
        
  - Enter the following into your terminal:

        SSH:

        git clone git@github.com:charleysmithschofield/snake-client.git

        HTTP:

        git clone https://github.com/charleysmithschofield/snake-client.git



## Starting the Game:

### Starting the Server:

- Follow steps inside the snek server repo to run the server side

### Starting the Client Side:
  
- Start the game by running the play.js file with your own initials, like so:
      
      node play.js <your initials here>

    If playing multiplayer, repeat the step above for the second player. Ensure you do this in a second terminal and with the second player's initials.

## Playing the Game

  ### Movement:
  Navigate your snake to eat the red dot to grow your snake. 
  
  - Use the w, a, s, d keys to navigate the snake as per below. 

        'w' - moves the snake up
        'd' - moves the snake right
        's' - moves the snake down
        'a' - moves the snake left

      Note: Snakes cannot change direction by 180 degrees instantaneously

 ### Say Something:
  - Use the e, r, and f keys to have your snake say something as per below:

        'r': "Say: Ready to lose?",
        'e': "Say: Eat my dust!",
        'f': "Say: Fear my Feasting!"


## Game Over

  Game over will occur if:

  - Your snakes idle for too long, you will get the this message:

        "you ded cuz you idled"

  - Your snakes collide with the wall, you will get this message:

        "you crashed, so you ded"

  - Your snakes collide with their own tails, you will get this message:

        "you crashed, so you ded"

  - Your snakes collide with each other, you will get this message:

        "you hit another snake, so you ded"


## Exit the Game:
To exit the game press:

     CTRL + C

