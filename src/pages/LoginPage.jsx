import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
      <LoginForm />
    </div>
  );
}