# Voldy-Man 

## Goal

Design a grid-based game using HTML, CSS and JavaScript. The game should be playable for one player and the player must be able to win and lose. 


## Timeframe

Timeframe: 1 week.


## Project Overview

This was the first project on the General Assembly Software Engineering Immersive course and my first with JavaScript. Pac-Man was my choice because of lots of memories that I have from my childhood. The theme is inspired in Harry Potter World, with Lord Voldemort as the main character.

https://user-images.githubusercontent.com/60261970/148057784-1fc59e3e-d340-482a-a800-6d3b46ce8e60.mp4


## Deployment

The game has been deployed with GitHub Pages and is available [here](https://moniafavaro.github.io/pac-man/)
          
          
## Getting Started

1. Access the source code via the 'Clone or download' button.
2. Open the index.html file in your browser of choice to start the game.


## Technologies Used

* JavaScript
* CSS3
* HTML5
* Google Fonts
* VS Code
* Chrome
* Git and GitHub


## Planning and Pseudocode

To start the project I firstly used pseudo code, where I wrote step by step how I wanted my code to work, or what I wanted my code to have.

In the beginning it had a maze and a voldy-man.

Then the voldy-man should be able to walk through the maze, not being able to pass through the walls. So the walls should be solid and the player will not pass through them.

After that I added the 'scars' or the 'get points' in all empty spaces in the maze.

The hardest part was to add the 'noses'. I started with one nose, and made it walk freely in the maze. But it wasn't too smart.

With the first nose running free, the next challenge was when the nose is in the same 'block' as the player, the player loses one life and goes back to the initial point.

When this first nose was working 'perfectly' and removing one life from the player I added two more noses.

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148057997-e2012c60-e356-45ba-9a88-c4394057e77e.png'>
</p>

So the NVP was done, but I wasn't happy, I wanted more levels.

The second level starts when voldy-man catches all 'scars'.

On the second level I added more noses and made them walk faster.

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148058652-b4f0ceca-8df1-4133-8ee8-1615acafbf17.png'>
</p>

The third and last level has more noses and they walk even faster.

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148058666-79bfd880-fec5-46b5-9363-783bec81b0bc.png'>
</p>

To finish the game you just need to catch all 'scars' of all levels and have at least one life.

And you can see your score and how many lives you still have on the scoreboard.

<p align='center'>
    <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148058815-917f42fd-0af3-49b9-b095-2096639132f4.png'>
</p>

## Build

I started developing the game part by part. The first one was the maze, the easiest part, and then I added a function to display the grid.

* The function added walls where 0's are, so that was 'sqm-disable'.
* Where 1's in the path that enemies and hero can walk freely, 'sqm-enable'.
* The numbers 420, 440, 20 and 21, on the if statement, are the border of the maze, and how the function adds walls and/or paths.

<p align='center'>
    <img width='410' height='300' src='https://user-images.githubusercontent.com/60261970/149932569-124ef07d-9942-4b29-a711-bb692594e6dd.png'>
    <img width='410' height='300' src='https://user-images.githubusercontent.com/60261970/149932577-d7521c22-b920-432e-873a-9c2ab2a95064.png'>
</p>

The hardest part, for me, was to make the enemies move in different directions:

* Starts with enemies in the initial position, then the function checks if they can move to a certain direction.
* If the 'hero' is in one of the squares, the hero loses one life, if not emeny continues to the next square.
* The enemies were, kind of, walking in circles, so I added a switch/case that makes the enemy only walk to a square that it wasn't before.

<p align='center'>
    <img width='410' height='350' src='https://user-images.githubusercontent.com/60261970/149933233-c53cf7d2-7cd8-4f8b-8a9b-94f7580cdf39.png'>
    <img width='410' height='350' src='https://user-images.githubusercontent.com/60261970/149933238-2bd53dc4-9640-456e-8400-2dbc26a9882c.png'>
</p>


## How to play

Click the start button.

Use the arrow keys on your keyboard to navigate through the maze.

Lord Voldemort, as Pac-Man, needs to run away from the 'noses' and collect all the scars(in the shape of a lightning bolt). 

The mission is to pass all three levels.


## Known Bugs

I really wanted to have more levels on my game, but for some reason I have a bug on it and no one was able to help me to fix it. 

When you pass to the next level, the player appears in the same place that it was when it caught the last 'food' and also appears a 'shadow' of it where it was supposed to start. 

When the player loses one life, it starts again from the right position:

https://user-images.githubusercontent.com/60261970/148065456-2212a40a-44cb-4b8c-a721-be02118977cf.mov

But when the level starts, only the enemies are able to start from the right position:

https://user-images.githubusercontent.com/60261970/148072625-25665f02-d66a-41f3-8325-b40df0988345.mp4

When the course ended I came back to have a look at this bug, but I couldn't find a way to fix it.

## Challenges

* With only a few weeks into the bootcamp, having to build a game in one week was the biggest challenge.
* Make the enemies run in different directions from each other.


## Wins

For me it was a big win to create this project after only 3 weeks into the course and be able to deliver the MVP.

## Future Features 

* To start I want to be able to fix the bugs.
* Make the enemies and the hero run smoothly through the maze.
* Change the wall, so they can be more rounded.
* Add a passage from one side to the other.
* Add bonus food.

## Key Learnings

* Always start with pseudocode, that makes coding easier.
 * General planning techniques for code based projects.
* Event Listeners.
* Flexbox.
* Debugging, I have to spend some time trying to bebug my project with no success, but I learned a lot through this.
