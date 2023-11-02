# Car Dodge game 🚘

# Key Components:

# 1: Element Selection:

The code begins by selecting various HTML elements using the document.querySelector method. These elements include:
score: To display the player's score.
startScreen: The initial screen displayed before the game starts.
gameArea: The game area where elements are positioned.
level: An element that can be clicked to set the game level.

# 2: Initialization:

The game initializes with a player object and a set of keys for controlling the car's movement. The player's initial speed is set to 7, and the score starts at 0.

# 3: Game Start:

When the startScreen is clicked, the game initializes. The startScreen is hidden, the gameArea is cleared, and the player's properties are reset.
Five road lines and a player-controlled car are created and positioned.
Three enemy cars are created at random positions.

# 5: Collision Detection:

The onCollision function checks for collisions between the player's car and enemy cars based on their positions.

# 6: Game Over:

The onGameOver function is called when a collision occurs, resulting in the game ending. The startScreen is displayed again, showing the player's score and inviting them to play again.

# 7: Game Logic:

The gamePlay function controls the game's core logic.
The road lines move downward, creating the illusion of the road scrolling.
Enemy cars move down the screen, and collisions are detected.
The player's car is controlled using the arrow keys, and its position is updated.
The player's score is incremented as the game progresses.
The game uses the requestAnimationFrame to create a continuous game loop.

# 8:Keyboard Input:

The code listens for keydown and keyup events, allowing the player to control the car using the arrow keys.




