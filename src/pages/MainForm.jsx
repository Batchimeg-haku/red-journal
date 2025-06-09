import { useForm } from "react-hook-form"

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log("Мэдээлэл:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4 border rounded-lg">
      <div>
        <label className="block text-sm font-medium">Нэр</label>
        <input
          {...register("name", { required: "Нэр оруулна уу" })}
          className="w-full mt-1 p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">И-мэйл</label>
        <input
          type="email"
          {...register("email", {
            required: "И-мэйл шаардлагатай",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "И-мэйл буруу байна"
            }
          })}
          className="w-full mt-1 p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Зурвас</label>
        <textarea
          {...register("message", { required: "Зурвас бичнэ үү", minLength: 10 })}
          className="w-full mt-1 p-2 border rounded"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message || "Хэт богино байна"}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Илгээх
      </button>
    </form>
  )
}
