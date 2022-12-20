import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFireBase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAjBiaBBQ3K4oz2OiOaIYII7BHwpmmoOsA",
        authDomain: "travel-2022-686cf.firebaseapp.com",
        databaseURL: "https://travel-2022-686cf-default-rtdb.firebaseio.com",
        projectId: "travel-2022-686cf",
        storageBucket: "travel-2022-686cf.appspot.com",
        messagingSenderId: "361435468846",
        appId: "1:361435468846:web:6065e6a5a884fb641dfbbf",
        measurementId: "G-8K3LENPHC8"
      };

      const app = initializeApp(firebaseConfig);
      return getDatabase(app);
}

export default StartFireBase;