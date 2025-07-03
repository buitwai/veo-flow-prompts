// Test Firebase configuration
const { initializeApp } = require('firebase/app');
const { getAuth, connectAuthEmulator } = require('firebase/auth');
const { getFirestore, connectFirestoreEmulator } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBGlUW7fo5-wxXFYRjXvteMKKPwgYmABhM",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "veofl-e408a.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "veofl-e408a",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "veofl-e408a.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "470062316455",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:470062316455:web:e43fc568e28f075ccc1482",
};

try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  console.log('✅ Firebase initialized successfully');
  console.log('📱 App name:', app.name);
  console.log('🔐 Auth configured');
  console.log('💾 Firestore configured');
  console.log('\n🎉 Firebase setup is complete!');
  
  process.exit(0);
} catch (error) {
  console.error('❌ Firebase initialization failed:', error.message);
  process.exit(1);
}