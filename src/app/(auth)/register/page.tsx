

import { RegisterForm } from "./register-form";

export default async function Register() {
  

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <h4 className="py-2 text-center text-xl">Sign up</h4>
        <p className="mb-3 text-center">Register account to enter</p>
        <RegisterForm />
      </div>
    </section>
  );
}
