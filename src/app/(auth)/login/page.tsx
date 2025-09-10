import { LoginForm } from "./login-form";

export default function page() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <h4 className="py-2 text-center text-xl">Sign in</h4>
        <p className="mb-3 text-center">Login to access your account</p>
        <LoginForm />
      </div>
    </section>
  );
}
