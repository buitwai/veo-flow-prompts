const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyBGlUW7fo5-wxXFYRjXvteMKKPwgYmABhM",
  authDomain: "veofl-e408a.firebaseapp.com",
  projectId: "veofl-e408a",
  storageBucket: "veofl-e408a.firebasestorage.app",
  messagingSenderId: "470062316455",
  appId: "1:470062316455:web:e43fc568e28f075ccc1482",
};

try {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  console.log('✅ Firebase Storage client initialized');
  console.log('🪣 Storage bucket:', storage._bucket || 'veofl-e408a.firebasestorage.app');
  console.log('\n📋 Next steps:');
  console.log('1. Go to: https://console.firebase.google.com/project/veofl-e408a/storage');
  console.log('2. Click "Get Started" to activate Storage');
  console.log('3. Choose your location (us-central1 recommended)');
  console.log('4. After activation, run: firebase deploy --only storage:rules');
  
} catch (error) {
  console.error('❌ Error:', error.message);
}