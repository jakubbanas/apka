import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { google } from "googleapis";

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  const sheets = google.sheets({ version: "v4" });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1inQBXFZakZgGYF__bdsfE6_HBrVaLL3__E1e4fz7wgs",
      range: "Class Data!A2:E"
    },
    (err: Error | null, res: any) => {
      if (err) return response.send("The API returned an error: " + err);
      const rows = res.data.values;
      if (rows.length) {
        return response.send(JSON.stringify(rows));
      } else {
        return response.send("No data found.");
      }
    }
  );
});
