$(function()
{
    function generateBoard()
    {
        // Prompt user for number of sides
        var n = prompt("How many pixels per side would you like?")
        // Make sure n is a maximum of 100
        if (n > 100)
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
                gameButton.className = "button";
                row.appendChild(gameButton);
            };
            // Append row to gameBoard
            gameBoard.appendChild(row);
        };
        $(".button")
        .mouseover(function(){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(this).css("background-color","#"+randomColor);
        });
    };
    generateBoard();
    document.getElementById("generate").onclick = function() {generateBoard()};
});

