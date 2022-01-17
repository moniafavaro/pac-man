# Voldy-Man - Game play

https://user-images.githubusercontent.com/60261970/148057784-1fc59e3e-d340-482a-a800-6d3b46ce8e60.mp4

# Description

This is my first project from the General Assembly course SEI-59.

Design a grid-based game using HTML, CSS and JavaScript. The game should be playable for one player and the player must be able to win and lose. Timeframe: 1 week.

# Deployment

Please follow the link to play the game: https://moniafavaro.github.io/pac-man/

Repository link: https://github.com/moniafavaro/pac-man

    
# Inspiration 

This project was my first one with JavaScript. Pac-Man was my choice because of lots of memories that I have from my childhood. The theme is inspired in Harry Potter World, with Lord Voldemort as the main character.

<p align='center'>
    <img width='500' height='300' src='https://user-images.githubusercontent.com/60261970/148057855-fd582438-67b8-457f-82cb-25713be1c4ec.png'>
</p>
          
# Getting Started

To start with this project I firstly used pseudo code, where I wrote step by step how I wanted my code to work, or what I wanted my code to have.

In the beginning it had a maze and a voldy-man.

Then the voldy-man should be able to walk through the maze, not being able to pass through the walls. So the walls should be solid and the player will not pass through them.

After that I added the 'scars' or the 'get points' in all empty spaces in the maze.

The hardest part was to add the 'noses'. I started with one nose, and made it walk freely in the maze. But it wasn't too smart.

With the first nose running free, the next challenge was when the nose is in the same 'block' as the player, the player loses one life and goes back to the initial point.

When this first nose was working 'perfectly' and removing one life from the player I added two more noses.

![voldyman-maze](https://user-images.githubusercontent.com/60261970/148057997-e2012c60-e356-45ba-9a88-c4394057e77e.png)

So the NVP was done, but I wasn't happy, I wanted more levels.

The second level starts when voldy-man catchs all 'scars'.

On the second level I added more noses and made them walk faster.

![voldyman-level-2](https://user-images.githubusercontent.com/60261970/148058652-b4f0ceca-8df1-4133-8ee8-1615acafbf17.png)

The third and last level has more noses and they walk even faster.

![voldyman-level-3](https://user-images.githubusercontent.com/60261970/148058666-79bfd880-fec5-46b5-9363-783bec81b0bc.png)

To finish the game you just need to catch all 'scars' of all levels and have at least one life.

And you can see your score and how many lives you still have on the scoreboard.

![voldyman-info](https://user-images.githubusercontent.com/60261970/148058815-917f42fd-0af3-49b9-b095-2096639132f4.png)

# Frameworks Used
* JavaScript
* CSS3
* HTML5
* Google Fonts
* VS Code
* Chrome
* Git and GitHub

# How to play

Click the start button.

Use the arrow keys on your keyboard to navigate through the maze.

Lord Voldemort, as Pac-Man, needs to run away from the 'noses' and collect all the scars(in the shape of a lightning bolt). 

The mission is to pass all three levels.

# Wins

For me it was a big win to made this project with only 3 weeks of the course and be able to delivered the MVP.

# Bugs

I really wanted to have more levels on my game, but for some reason I have a bug on it and no one was able to help me to fix it. 

When you pass to the next level, the player appears in the same place that it was when it caught the last 'food' and also appears a 'shadow' of it where it was supposed to start. 

When the player loses one life, it starts again from the right position:

https://user-images.githubusercontent.com/60261970/148065456-2212a40a-44cb-4b8c-a721-be02118977cf.mov

But when the level starts, only the enemies are able to start from the right position:

https://user-images.githubusercontent.com/60261970/148072625-25665f02-d66a-41f3-8325-b40df0988345.mp4

When the course ended I came back to have a look at this bug, but I couldn't find a way to fix it.
