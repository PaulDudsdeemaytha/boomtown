export default function(app) {
  app.set("DEV_WEB_SERVER", "http://localhost:3001");
  app.set("PGUSER", process.env.PGUSER || "boomtown");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtown");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtown");
  app.set("PGHOST", process.env.PGHOST || "boomtown");
  //firebase
  app.set(
    "FIREBASE_API_KEY",
    process.env.FIREBASE_API_KEY || "AIzaSyDuUxieSRa879BBRTpfxOXkKndOqhetbOw"
  );
  app.set(
    "FIREBASE_AUTH_DOMAIN",
    process.env.AUTH_DOMAIN || "boomtown-f9274.firebaseapp.com"
  );
  app.set(
    "FIREBASE_DATABASE_URL",
    process.env.DATABASE_URL || "https://boomtown-f9274.firebaseio.com"
  );
  app.set("FIREBASE_PROJECT_ID", process.env.PROJECT_ID || "boomtown-f9274");
  app.set(
    "FIREBASE_STORAGE_BUCKET",
    process.env.STORAGE_BUCKET || "boomtown-f9274.appspot.com"
  );
  app.set(
    "FIREBASE_MESSAGING_SENDER_ID",
    process.env.MESSAGING_SENDER_ID || "1001106177684"
  );
}
