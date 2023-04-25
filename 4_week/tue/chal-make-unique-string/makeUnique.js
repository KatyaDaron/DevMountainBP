// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// helowrd

// >>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu

const makeUnique = string => {
    const arr = string.split('');
    const uniqueStr = [...new Set(arr)].join('');
    console.log(uniqueStr);
}

makeUnique('iwanttoclimbamountain');