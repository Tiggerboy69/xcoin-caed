
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4JM9e8DGTpEPwuzaVQbcu9PH008MeuVQ",
  authDomain: "xcoin-pwa.firebaseapp.com",
  projectId: "xcoin-pwa",
  messagingSenderId: "628331107420",
  appId: "1:628331107420:web:a32ee0116737efa072c299"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  const notificationTitle = payload.notification.title || 'แจ้งเตือนจาก XCOIN';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: "/icon.png"
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
