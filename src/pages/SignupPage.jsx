import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useHistory } from "react-router-dom";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm();

  const [roles, setRoles] = useState([]);
  const history = useHistory();
  const selectedRoleId = watch("role_id");

  useEffect(() => {
    axiosInstance.get("/roles").then((res) => {
      setRoles(res.data);
      const customer = res.data.find((r) => r.name === "Customer");
      if (customer) setValue("role_id", customer.id);
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      if (Number(data.role_id) === 2) {
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account
        };
      }

      delete data.store_name;
      delete data.store_phone;
      delete data.store_tax_no;
      delete data.store_bank_account;
      delete data.password_confirm;

      await axiosInstance.post("/signup", data);
      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      history.goBack();
    } catch (err) {
      alert("Kayıt başarısız: " + (err.response?.data?.message || "Bilinmeyen hata"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 max-w-md w-full mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

      <input
        {...register("name", { required: true, minLength: 3 })}
        placeholder="Adınız"
        className="border p-2 rounded w-full"
      />
      {errors.name && <span className="text-red-500 text-sm">En az 3 karakter gerekli</span>}

      <input
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+\.\S+$/
        })}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      {errors.email && <span className="text-red-500 text-sm">Geçerli bir email girin</span>}

      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
        })}
        placeholder="Şifre"
        className="border p-2 rounded w-full"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">
          Şifre en az 8 karakter, büyük/küçük harf, sayı ve özel karakter içermeli
        </span>
      )}

      <input
        type="password"
        {...register("password_confirm", {
          validate: (value) => value === watch("password")
        })}
        placeholder="Şifre Tekrar"
        className="border p-2 rounded w-full"
      />
      {errors.password_confirm && <span className="text-red-500 text-sm">Şifreler eşleşmiyor</span>}

      <select {...register("role_id", { required: true })} className="border p-2 rounded w-full">
        {roles.map((role) => (
          <option key={role.id} value={role.id}>{role.name}</option>
        ))}
      </select>

      {Number(selectedRoleId) === 2 && (
        <>
          <input
            {...register("store_name", { required: true, minLength: 3 })}
            placeholder="Mağaza Adı"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("store_phone", {
              required: true,
              pattern: /^05\d{9}$/
            })}
            placeholder="Telefon (05XXXXXXXXX)"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("store_tax_no", {
              required: true,
              pattern: /^T\d{4}V\d{6}$/
            })}
            placeholder="Vergi No (TXXXXVXXXXXX)"
            className="border p-2 rounded w-full"
          />
          <input
            {...register("store_bank_account", {
              required: true,
              pattern: /^TR\d{2}\d{5}\d{16}$/
            })}
            placeholder="IBAN (TR...)"
            className="border p-2 rounded w-full"
          />
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white py-2 px-4 rounded w-full"
      >
        {isSubmitting ? "Gönderiliyor..." : "Sign Up"}
      </button>
    </form>
  );
}