PseudoCode Calculator 
. Create index.html, calculator.js, style.css
. index.html => link stylesheet and script file
. create tags div container calculator with input display (index.html .12)
. div tag for buttons - (index.html .14)
.. javaScript to populate with buttons 


. calculator.js contains symbols in arrays separated by top and side buttons,
.. operators on the right side (calculator .1 => .10)
. iterate through array of symbols to create button tag for each symbol (calculator .13)
. add button tags inside div tag (calculator .28)

.style.css style up the calculator
. arrange buttons in a grid (style.css .27)
. style buttons (style.css .35)
. style div calculator (style.css .7)
.. (calculator.js .19) - style colours for different type of button, operators and symbols 
. style buttons to highlight hover and click (style.css .47)
. style display (style.css .17)
. center calculator with flex (style.css .2)


. calculator.js
. create three variables, one for each part of the operation. (calculator .14)
. get display element (calculator .12)
. add event listener for display ID (calculator .43)
. if right symbols (calculator .43)
. if top symbols
. if numbers or decimal place
. split group if numbers only
. if decimal point single onlyor if display value is 0 then replace value to limit to single
. before number string
. if percentage and + / - value
. if clear button call clear function
. operators if value === to = else an operator
.  
