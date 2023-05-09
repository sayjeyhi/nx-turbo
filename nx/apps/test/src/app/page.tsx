import Button from "./Button";
// import { secrets } from './secrets';
function fetchSomeSecretVar() {
  return {}
}
export default async function Home() {
  /**
   * A BIG COMPONENT
   */
  const someSecretVar = fetchSomeSecretVar();

  async function handleClick() {
    "use server";
    console.log("Running server action", someSecretVar);
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div>
        <h3>Next.js 13.4</h3>
        <form action={handleClick}>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >Run Server action</button>
        </form>
      </div>
    </main>
  );
}
