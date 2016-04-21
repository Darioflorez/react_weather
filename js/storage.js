/**
 * 
 * Favorites will be saved in the form of
 * key => "["asdas","sadasd","sadasd"]"
 * the list can be retrieved by calling JSON.parse
 * 
 */

import {
  AsyncStorage,
} from 'react-native'

let setData = function(key,value){
  AsyncStorage.setItem(key, value);
}

let getAllData = function(){
  return AsyncStorage.getAllKeys().then(ks => {
    return Promise.all( ks.map( k => AsyncStorage.getItem(k) ));
  })
}

let getFavorites = function(){
  return AsyncStorage.getItem("favorites");
}

export { setData, getAllData, getFavorites };

/**
 * Usage
 * 
 *     getAllData()
      .then( items => console.log(items) )
      .catch( err => console.log("Error retrieving data: ", err) );
 */

