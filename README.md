I read about John Conway's Game of Life and thought it would be cool to see if I could make it using react.

These are the steps to play the game.

The grid is set up based on the dimensions of the viewport. 

1. Random Start: The button manupulates the grid previously set up and gives it a random state of 0 for dead and 1 for alive.

2. Start: The button repeats the algorith and call the function at an interval of 1 second.

3. Stop: The button stops the setInterval function.

4. Step: Generates the next generation on a step basis. You click the button for each succeeding generation.

The rules for the game of life are as follows: 

1. Any ‘alive’ cell (at time t-1) with fewer than two ‘alive’ neighbours (at t -1) transitions to a ‘dead’ state at time t.

2. Any ‘alive’ cell (t -1) with two or three ‘alive’ neighbours (t -1) remains ‘alive’ at time t.

3. Any ‘alive’ cell (t -1) with more than three ‘alive’ neighbours (t -1) transitions to a ‘dead’ state at time t.

4. Any ‘dead’ cell (t -1) with exactly three ‘alive’ neighbours (t -1) transitions to  an ‘alive’ state at time t.