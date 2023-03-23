function generateBoard(n = 16)
{
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
            // Append gameButton to row
            row.appendChild(gameButton);
        };
        // Append row to gameBoard
        gameBoard.appendChild(row);
    };
    // Populate objects to html

};