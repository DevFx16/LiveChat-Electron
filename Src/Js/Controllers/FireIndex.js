var config = {
    apiKey: "AIzaSyBxlTgDg99WfICIkX4TqiccNTqfndCnjoY",
    authDomain: "livechat-6e105.firebaseapp.com",
    databaseURL: "https://livechat-6e105.firebaseio.com",
    projectId: "livechat-6e105",
    storageBucket: "livechat-6e105.appspot.com",
    messagingSenderId: "419137203609"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const Auth = firebase.auth();
const Database = firebase.database();
const StorageImages = firebase.storage();
const Firebase = firebase;

module.exports = { Auth, Database, StorageImages, Firebase }