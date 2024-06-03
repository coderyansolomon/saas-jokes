import { LoginButton, LogoutButton, PricingLink, ProfileLink, SignedIn, SignedOut } from "@kobbleio/next/client"
import Link from "next/link"
import LoadingUser from "./LoadingUser"

const NavigationHeader: React.FC = async () => {
    return (
        <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
        <div className="container mx-auto flex items-center p-4 gap-4">
          <div className="text-lg font-semibold flex-grow">
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">
              Home
            </Link>
          </div>
          <nav className="flex gap-4">
              <LoadingUser>
                  <SignedIn>
                  <>
                  <ProfileLink>
                      <span className="hover:text-blue-500 dark:hover:text-blue-400">
                          View Profile
                      </span>
                  </ProfileLink>
                  <PricingLink>
                      <span className="hover:text-blue-500 dark:hover:text-blue-400">
                          View Pricing
                      </span>
                  </PricingLink>
                  <LogoutButton>
                      <button className="hover:text-blue-500 dark:hover:text-blue-400">
                      Sign Out
                      </button>
                  </LogoutButton>
                  </>
              </SignedIn>
              <SignedOut>
                  <LoginButton>
                  <button className="hover:text-blue-500 dark:hover:text-blue-400">
                      Sign In
                  </button>
                  </LoginButton>
              </SignedOut>
              </LoadingUser>
          </nav>
        </div>
      </header>
    )
}

export default NavigationHeader