import {FirebaseOptions, initializeApp} from 'firebase/app';
import {connectAuthEmulator, getAuth} from 'firebase/auth';

let {VITE_FIREBASE_CONFIG, PROD} = import.meta.env;

const firebaseConfig: FirebaseOptions = VITE_FIREBASE_CONFIG
    ? JSON.parse(VITE_FIREBASE_CONFIG)
    : {apiKey: 'MOCK_KEY'};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

if (!PROD) {
    connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
}
