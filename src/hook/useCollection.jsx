import { useEffect, useState, useRef } from "react";
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
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
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
        setError(null);
        setPending(false);
      },
      (error) => {
        console.log(error);
        setError("could not fetch data");
        setPending(false);
      }
    );

    // when page unmounts, the function is called to stop fetching from the database
    return () => unsubscribe();
  }, []);

  return { error, reservation, pending };
};

export default useCollection;
