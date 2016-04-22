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

let addToFavorites= function(value){
  getFavorites().then((data) => {
    //console.log(data);
    let stringList = JSON.parse(data);
    stringList.push(value);
    AsyncStorage.setItem('favorites', JSON.stringify(stringList));
  })
}

let removeFromFavorites = function(value){
  getFavorites().then((data) => {
    let stringList = JSON.parse(data);
    console.log(stringList);
    stringList.splice(stringList.indexOf(value), 1); // at position index remove 1 item
    AsyncStorage.setItem('favorites', JSON.stringify(stringList));
  })
}

export { setData, getAllData, getFavorites, addToFavorites, removeFromFavorites };

/**
 * Usage
 * 
 *     getAllData()
      .then( items => console.log(items) )
      .catch( err => console.log("Error retrieving data: ", err) );
 */

