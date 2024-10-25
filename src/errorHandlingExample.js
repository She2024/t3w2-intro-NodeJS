// try, catch, throw, finally

try {
 //experiment or execution
 //throw some error message
    let a = 15, b = 0;
  //  const result = a / b;
   // console.log(result);
   if (b === 0){
        // throw "Try to dived by zero...";
        throw new Error("New Error: Division by Zero!");
        // console.error("will this run?"); this will not run because of the throw command.
   }
}

catch (error) {
    // statements
    console.error("Cannont divide by zero!");
    console.log(error);
}

finally {
    // always runs even if their is an error
    console.error("I alwasy run!");
}
