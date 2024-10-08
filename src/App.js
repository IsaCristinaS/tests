import { useForm } from "react-hook-form";
import "./App.css";

// interface FormData {
//   name: string
//   email: string
//   birthDate: number
// }

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (d) => alert(JSON.stringify(d));

  const name = watch("name")
  const email = watch("email")
  const birthDate = watch("birthDate")

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome:</label>
        <input
          {...register("name", {
            required: "Este campo é obrigatório",
            minLength: {
              value: "4",
              message: "Tamanho mínimo de 4 caracteres",
            },
          })}
          placeholder="Nome"
        />
        {errors.name?.message}
        <p>{name}</p>

        <label>Email:</label>
        <input
          {...register("email", { required: "O email é obrigatório" })}
          placeholder="Email"
        />
        {errors.email?.message}
        <p>{email}</p>

        <label>Data de nascimento: </label>
        <input
          {...register("birthDate", { required: 'Este campo é obrigatório' })}
          placeholder="Data de nascimento"
        />
        {errors.birthDate?.message}
        <p>{birthDate}</p>

        <input type="submit" />
        
      </form>
    </div>
  );
}

export default App;