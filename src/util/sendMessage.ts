import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";



export const sendMessage = (value: string, email: string, ChatID: string) => {
  if (value !== '') {
    let messageText = value.trimStart();
    const newMassage = doc(db, `${ChatID}`, `${Date.now()}${email}`);
    setDoc(newMassage, {
      name: `${email}`,
      text: messageText,
      createAt: serverTimestamp(),
    }, { merge: true });
  }
}