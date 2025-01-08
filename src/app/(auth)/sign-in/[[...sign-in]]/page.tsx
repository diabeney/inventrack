import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className=" grid place-content-center h-screen">
      <SignIn />;
    </div>
  );
}
