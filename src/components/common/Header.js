"use client";

import { useUser } from "@/contexts/User";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { toast } from "react-toastify";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const { isLoggedInUser } = useUser();
  const router = useRouter();

  const handleSignUpNavigation = () => {
    router.push("/register");
  };
  const handleSignInNavigation = () => {
    router.push("/login");
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
      toast.success("Signed out successfully!", { position: "top-center" });
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Error signing out. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow h-[70px] border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          News Payout Dashboard
        </div>
        <div>
          {!isLoggedInUser ? (
            <div className="flex gap-2">
              <button
                onClick={handleSignInNavigation}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUpNavigation}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
