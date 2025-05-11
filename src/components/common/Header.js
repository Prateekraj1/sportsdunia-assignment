"use client";

import { useUser } from "@/contexts/User";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { isLoggedInUser } = useUser();
  const router = useRouter();

  const handleSignUpNavigation = () => {
    router.push("/register");
  };
  const handleSignInNavigation = () => {
    router.push("/login");
  };
  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("User signed out");
  };
  return (
    <header className="bg-white shadow h-[70px]">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">News Payout Dashboard</div>
        <div>
          {!isLoggedInUser ? (
            <div className="flex gap-[5px]">
              <button
                onClick={handleSignInNavigation}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUpNavigation}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-[15px]">
              <ThemeToggle />
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded"
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
