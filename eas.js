/* eslint-disable linebreak-style */
$(() => {
  function isNumber(val) {
    return !isNaN(val);
  }

  function generateBoard(n) {
    // Allow for autogenerate on reload without input prompt
    if (n == null) {
      // Prompt user for number of sides
      n = prompt('How many pixels per side would you like?');
    }
    // Check input for cancel button
    if (n != null) {
      // Check for blank input and set default to 16
      if (n === '') {
        n = 16;
      }
      // Make sure input is a number
      else if (!isNumber(n)) {
        alert('Input must be a number.');
        n = 16;
      }
      // Check for value over 100, if so set to 100
      else if (n > 100) {
        alert('Max size is 100x100.');
        n = 100;
      }
      // Initialize gameBoard, assign game's <div>
      const gameBoard = document.getElementById('gameBoard');
      // Clear the gameboard
      gameBoard.innerHTML = '';
      // Iterate for n rows
      for (let i = 0; i < n; i += 1) {
        // Create row object
        const row = document.createElement('div');
        row.className = 'row';
        // Iterate for n columns
        for (let j = 0; j < n; j += 1) {
          // Create gameButton object
          const gameButton = document.createElement('div');
          gameButton.style.backgroundColor = 'white';
          gameButton.className = 'button';
          row.appendChild(gameButton);
        }
        // Append row to gameBoard
        gameBoard.appendChild(row);
      }
    }

    // Set button class object to random bgcolor on mouseover
    $('.button')
      .mouseover(function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        $(this).css('background-color', `#${randomColor}`);
      });
  }

  // Generate new board on reload
  generateBoard(16);
  document.getElementById('generate').onclick = function () { generateBoard(); };
});
