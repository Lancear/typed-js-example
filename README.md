# typed-js-example
A simple example how to use the full freedom of Javascript within functions
while still being able to type their parameters and return value.

It's a middle-ground between full robustness and flexability.
And it has the nice side effect of splitting function definitions + docs and 
implementation into two easy to read files.

From my experience, most type errors lie in bigger picture, the interaction 
between interfaces like functions as you don't see the implementation when
calling a function and thus make assumptions. Therefore it makes a lot of sense
to type these parts of the code. 

However, when inside the function, you can see the full code and all data from 
the outside is typed already, thus the chance of errors slipping in is
significantly lower. Therefore I prefer that little bit more freedom from 
Javascript and not having to worry about every single variable's type.

One big downside to this approach however is that it doesn't work well with
generics as you cannot pass the generic type argument when calling the function
thus it is infered, which is sometimes only the partial type.
