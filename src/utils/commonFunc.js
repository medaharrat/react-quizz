/*
*   Common Functions
*/

export const deleteUndefined = (arr) => {
    /* This method removes undefined elements from an array 
    *  I am using it because I encontered a problem when
    *  adding a new question, it is adding many empty
    *  elements 
    * * * * * * * * * * * * * * * * * * * * * * * * * * *  */
   return arr.filter(function( el ) {
    return el !== undefined;
  });
}