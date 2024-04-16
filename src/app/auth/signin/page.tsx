import { auth, signIn } from "@/auth";

export default async function Signin() {
  const session = await auth();
  return (
    <main>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <button>Sign In</button>
      </form>
      <div>{JSON.stringify(session)}</div>
    </main>
  );
}
