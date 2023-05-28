import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const useCollection = (uid) => {
  const [reservation, setReservation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "reservation"),
      where("uid", "==", uid),
      orderBy("date", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        var results = [];
        querySnapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setReservation(results);
        console.log(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch data");
      }
    );

    // when page unmounts, the function is called to stop fetching from the database
    return () => unsubscribe();
  }, []);

  return { error, reservation };
};

export default useCollection;
