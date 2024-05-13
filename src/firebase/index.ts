import {FirebaseOptions, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// import {getAnalytics} from 'firebase/analytics';

const {VITE_FIREBASE_CONFIG} = import.meta.env;

if (!VITE_FIREBASE_CONFIG) {
    throw new Error('Firebase config is missing!');
}

const firebaseConfig: FirebaseOptions = JSON.parse(VITE_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
