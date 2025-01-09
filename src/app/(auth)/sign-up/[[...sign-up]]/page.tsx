import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className=" grid place-content-center h-screen">
      <SignUp />
    </div>
  );
}
