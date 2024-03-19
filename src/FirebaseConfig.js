import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyABZRr0Nx4byPKH78poDPaeFmsJ6HW0a9M",
    authDomain: "fiberprime-fb24f.firebaseapp.com",
    databaseURL: "https://fiberprime-fb24f-default-rtdb.firebaseio.com",
    projectId: "fiberprime-fb24f",
    storageBucket: "fiberprime-fb24f.appspot.com",
    messagingSenderId: "332505324329",
    appId: "1:332505324329:web:007066a1f6c31eb15b7538",
    measurementId: "G-RQYFV0SXN0",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
