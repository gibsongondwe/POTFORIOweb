
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA_vChFCFW3UgK1aRo9K36EfTTSjdGzSUk",
  authDomain: "potforio2023.firebaseapp.com",
  projectId: "potforio2023",
  storageBucket: "potforio2023.appspot.com",
  messagingSenderId: "252414438378",
  appId: "1:252414438378:web:ac8c217b506a7381d92093",
  measurementId: "G-2TEV6K32ZJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);