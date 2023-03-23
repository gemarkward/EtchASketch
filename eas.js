$(function()
{
    function generateBoard(n = 16)
    {
        if (n > 100)
        {
            n = 100;
        };
        // Initialize gameBoard, assign game's <div>
        var gameBoard = document.getElementById("gameBoard");
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
    };
    generateBoard();
    $(".button")
    .mouseover(function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color","#"+randomColor);
    });
});

