import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  Auth,
  User,
} from "firebase/auth";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import initializeAuthentication from "@/public/firebase/firebase.init";

export interface FirebaseHook {
  user: {};
  setUser: React.Dispatch<React.SetStateAction<User | {}>>;
  error: string;
  handleGoogleSignIn: () => Promise<void>;
  handleEmailSignIn: (email: string, password: string) => void;
  handleUpdatePassword: (newPassword: string) => void;
  handleSignOut: () => void;
  isLoading: boolean;
}
console.log("log firebase", firebase);

const useFirebase = (): FirebaseHook => {
  const [user, setUser] = useState<User | {}>({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize authentication
  initializeAuthentication();
  const googleProvider = new GoogleAuthProvider();
  const auth: Auth = getAuth();

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle login with email and password
  const handleEmailSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to handle update password
  const handleUpdatePassword = (newPassword: string) => {
    updatePassword(auth.currentUser!, newPassword)
      .then((result) => {
        console.log(result);
        alert("Updated password");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle log out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        router.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Remember the user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [auth]);

  // console.log("user", user);

  return {
    user,
    setUser,
    error,
    handleGoogleSignIn,
    handleEmailSignIn,
    handleSignOut,
    handleUpdatePassword,
    isLoading,
  };
};

export default useFirebase;
