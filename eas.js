$(function()
{
    const isNumber = function isNumber(value) 
    {
   return typeof value === 'number' && isFinite(value);
    }
    function generateBoard(n)
    {
        // Allow for autogenerate on reload without input prompt
        if (n == null)
        {
            // Prompt user for number of sides
            var n = prompt("How many pixels per side would you like?");
        };
        // Check input for cancel button
        if (n != null)
        {
            // Check for blank input and set default to 16
            if (n === "")
            {
                n = 16;
            }
            // Make sure input is a number
            else if (!isNumber(n))
            {
                alert("Input must be a number between 1 and 100!");   
            }
            // Check for value over 100, if so set to 100
            else if (n > 100)
            {
                n = 100;
            };
            // Initialize gameBoard, assign game's <div>
            var gameBoard = document.getElementById("gameBoard");
            // Clear the gameboard
            gameBoard.innerHTML = "";
            // Iterate for n rows
            for (i=0;i<n;i++)
            {
                // Create row object
                var row = document.createElement("div");
                row.className = "row";
                // Iterate for n columns
                for (j=0;j<n;j++)
                {
                    // Create gameButton object
                    var gameButton = document.createElement("div");
                    gameButton.style.backgroundColor = "white";
                    gameButton.className = "button";
                    row.appendChild(gameButton);
                };
                // Append row to gameBoard
                gameBoard.appendChild(row);
            };
        };

        // Set button class object to random bgcolor on mouseover
        $(".button")
        .mouseover(function(){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(this).css("background-color","#"+randomColor);
        });
    };

    // Generate new board on reload
    generateBoard(16);
    document.getElementById("generate").onclick = function() {generateBoard()};
});

