// REACT
import { useReducer } from "react";
// FIREBASE
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// state
const initialState = {
  reservation: null,
  isPending: false,
  error: null,
  success: null,
};

// reducer function
const reservationReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        reservation: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "delete":
      return {
        error: null,
        success: true,
        document: null,
        isPending: false,
      };
    case "pending":
      return {
        reservation: null,
        isPending: true,
        error: null,
        success: false,
      };
    case "error":
      return {
        error: action.payload,
        success: false,
        document: null,
        isPending: false,
      };
    default:
      return state;
  }
};

export const useFirestore = () => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const addData = async (data) => {
    dispatch({ type: "pending" });
    try {
      const docRef = await addDoc(collection(db, "reservation"), {
        ...data,
        date: Timestamp.now(),
      });
      dispatch({ type: "success", payload: docRef });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", payload: "could not make a reservation" });
    }
  };

  const deleteData = async (id) => {
    dispatch({ type: "pending" });
    try {
      await deleteDoc(doc(db, "reservation", id));
      dispatch({ type: "delete" });
    } catch (error) {
      dispatch({ type: "error", payload: "could not delete reservation" });
    }
  };

  return { deleteData, addData, ...state };
};
