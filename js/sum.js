'use strict';
const summation = (a, b) => {
	if (typeof a !== 'number' || isNaN(a)) {
	  a = 0;
	} else if (typeof b !== 'number' || isNaN(b)) {
	  b = 0;
	}
  return a+b;
  
  };
  
  const subtraction = (a, b) => {
	if (typeof a !== 'number' || isNaN(a)) {
	  a = 0;
	} else if (typeof b !== 'number' || isNaN(b)) {
	  b = 0;
	}
	return a-b;
  };