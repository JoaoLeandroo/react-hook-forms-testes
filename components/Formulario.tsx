"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputProps {
  example: string;
  exampleRequired: string;
}

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({});

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-sky-900 w-[400px] h-52 p-5 rounded-lg flex flex-col gap-4 shadow-lg"
      >
        <div className="flex flex-col gap-y-0">
          <label className="text-lg text-white">Nome Completo</label>
          <input
            type="text"
            placeholder="Seu nome..."
            className="h-11 px-2 rounded-md placeholder:text-sm outline-none focus:border-2 border-zinc-300 shadow-lg"
            {...register("exampleRequired", { required: true })}
          />
          {errors.exampleRequired && (
            <span className="text-red-500 font-">
              Você precisa preencher o campo nome
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-zinc-100 text-zinc-900 rounded-md h-11 hover:bg-zinc-200 transition duration-200 text-2xl font-semibold uppercase"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
