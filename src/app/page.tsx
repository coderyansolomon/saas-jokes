import GenerateJoke from "./components/GenerateJoke";
import NavigationHeader from "./components/NavigationHeader";

export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <NavigationHeader />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="container flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-4xl font-bold mb-2">Welcome to the most average SaaS product but GREAT Next.js tutorial application</h1>
          <p className="text-xl mb-4">Generate hilarious Chuck Norris jokes that really aren't even that funny</p>
          <GenerateJoke />
        </div>
      </div>
    </main>
  );
}
