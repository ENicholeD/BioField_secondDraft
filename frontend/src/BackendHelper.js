export default class BackendHelper {
    backendPostNewUser(newUser){
        let url = 'http://localhost:5000/Account/Create';
        let request = new XMLHttpRequest(); 
        let body = JSON.stringify(newUser);
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/JSON');
        request.onreadystatechange = function () { // Call a function when the state changes.
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log('Successfully created new user');
        }
    };
    request.send(body);
}

    backendAttemptLogin(user) {
    console.log('USER ATTEMPTING LOGIN: ', user);
        return new Promise(function(resolve, reject) {
            let url = 'http://localhost:5000/Account/Authenticate';
            let request = new XMLHttpRequest();
            let body = JSON.stringify(user);
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/JSON');
            request.onload = function() {
            if (this.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
        request.send(body);
        });
    }
    backendGetUserJournals(token) {
        return new Promise(function (resolve, reject) {
          let url = 'http://localhost:5000/Journal';
          let request = new XMLHttpRequest();
          request.open('GET', url, true);
          request.setRequestHeader('Content-Type', 'application/JSON');
          request.setRequestHeader('Authorization', 'Bearer ' + token);
          request.onload = function () {
            if (this.status === 200) {
              resolve(request.response);
              console.log('Successful backend call to get user\'s journals');
            } else {
              reject(Error(request.statusText));
            }
          };
          request.send();
        });
    }
    backendPostNewJournal(newJournal, token) {
        return new Promise(function(resolve, reject) {
          let url = 'http://localhost:5000/Journal/Create';
          let request = new XMLHttpRequest();
          let body = JSON.stringify(newJournal);
          request.open('POST', url, true);
          request.setRequestHeader('Content-Type', 'application/JSON');
          request.setRequestHeader('Authorization', 'Bearer ' + token);
          request.onload = function () {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.send(body);
        });
    }
    backendPostNewEntry(newEntry, token) {
        console.log(newEntry);
        return new Promise(function(resolve, reject) {
          let url = 'http://localhost:5000/Entries';
          let request = new XMLHttpRequest();
          let body = JSON.stringify(newEntry);
          request.open('POST', url, true);
          request.setRequestHeader('Content-Type', 'application/JSON');
          request.setRequestHeader('Authorization', 'Bearer ' + token);
          request.onload = function () {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.send(body);
        });
    }
}