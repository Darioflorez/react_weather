'use-strict';

import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

var FacebookSDK = {

  login(){
    return new Promise((resolve, reject) => {
      LoginManager.logInWithReadPermissions(['public_profile','email'])
      .then((result) =>{
        if (result.isCancelled) {
          reject('Login cancelled');
        } else {
          resolve(result);
        }
      })
      .catch((error) => {
        reject(error);
      });
    });
  },

  getUserData(callback){
    const path = '/me'
    const args = {fields: 'name,email'};
    const request = new GraphRequest(path, args, processResponse);
    new GraphRequestManager().addRequest(request).start();

    function processResponse(error: ?Object, result: ?Object) {
      // FIXME: RNFBSDK bug: result is Object on iOS and string on Android
      if (!error && typeof result === 'string') {
        try {
          result = JSON.parse(result);
        } catch (e) {
          error = e;
        }
      }

      const data = error ? {error} : result;
      callback(data);
    }
  }

}

module.exports = FacebookSDK;
