# Eloquent-Javascript

## Eloquent Javascript by Marijin Haverbeke

revisiting the most fundamental javacript programing concepts

# Switch Statement

compares one value to multiple different options. it will continue executing, every cases until it reaches a break statement.

switch (expression) {
case value1:
statement1;
break;
case value2:
statement2;
break;
case value3:
statement3;
break;
default:
statement;
}

# Conditional Operator (Ternary Operator)

condition ? exprIfTrue : exprIfFalse

exprsIfTrue:
an expression which is executed if the condition evaluates to a truthy value

exprIfFalse:
an expression which is executed if the condition evaluates to a falsy value

# Calling a function inside another function

To call a function inside another function, define the inner function inside the outer function and invoke it. When using the function keyword, the function gets hoisted to the top of the scope and can access any of the available variables in the scope.
