//You will be provided with an initial array as the first argument to the destroyer function, 
//followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.
//The function must accept an indeterminate number of arguments, also known as a variadic function.
//You can access the additional arguments by adding a 
//rest parameter to the function definition or using the arguments object.



function destroyer(arr) {
        // The arguments object contains all arguments passed to the function.
        // We slice it from index 1 to get the values to be removed (2 and 3 in this case).
        const valuesToRemove = Array.prototype.slice.call(arguments, 1);

        let filterResult = arr.filter(item => !valuesToRemove.includes(item));

console.log(filterResult)
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);