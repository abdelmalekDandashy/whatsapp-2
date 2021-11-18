import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { updateDoc, serverTimestamp } from "firebase/firestore";
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      // db.collection("users").doc(user.uid).set(
      //   {
      //     email: user.email,
      //     lastSenn: firebase.firestore.Fieldvalue.serverTimestamp(),
      //     photoURL: user.photoURL,
      //   },
      //   { merge: true }
      // );
      console.log(serverTimestamp());
      // try {
      //   const docRef = setDoc(collection(db, "users"), {
      //     email: user.email,
      //     lastSenn: serverTimestamp(),
      //     photoURL: user.photoURL,
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }

      const usersRef = doc(db, "users", user.uid);
      setDoc(
        usersRef,
        {
          email: user.email,
          lastSenn: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
