import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();
const docRef = db.collection("questions_test");

export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    const doc = await docRef.add({ hello: "world" });
    response.send(doc.id);
  }
);
