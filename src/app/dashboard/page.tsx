import { auth, signOut } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/signin" });
        }}
      >
        <button>Sign out</button>
      </form>
      <div>{JSON.stringify(session)}</div>
    </main>
  );
}
