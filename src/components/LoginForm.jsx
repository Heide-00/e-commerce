import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../store/actions/clientActions';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true })}
        className="border p-2 rounded"
      />
      {errors.email && <span className="text-red-500">Geçerli bir e-posta girin</span>}

      <input
        type="password"
        placeholder="Şifre"
        {...register('password')}
        className="border p-2 rounded"
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register('rememberMe')} />
        Beni Hatırla
      </label>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Giriş Yap
      </button>
    </form>
  );
}
