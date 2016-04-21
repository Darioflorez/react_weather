'use strict';

function getCurrentPosition(){
  return new Promise(function(resolve, reject){
    
    resolve("hello");
  });
}

module.exports = {
  getCurrentPosition: getCurrentPosition
}
