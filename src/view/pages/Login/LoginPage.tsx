import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { userLoginSchema } from "@/services/zodSchemas";
import ConectaSeinfraIcon from "@/assets/ConectaSeinfra.svg";
import LogoPrefeitura from "@/assets/LogoPrefeitura.svg";
import pinkLine from "@/assets/pinkLine.svg";
import yellowLine from "@/assets/yellowLine.svg";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

function LoginPage() {
  const form = useForm<z.infer<typeof userLoginSchema>>({
    defaultValues: {
      password: "",
      cpf: "",
    },
    resolver: zodResolver(userLoginSchema),
  });

  function onSubmit() {
    console.log("logado");
  }

  return (
    <div className="relative flex min-h-screen h-auto font-semibold flex-col overflow-hidden">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute z-[-10] left-0 -top-10"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center"
      >
        <div className="text-center mt-20">
          <h1 className="text-5xl text-seinfra-blue-light-700 mb-4 px-4">
            Login
          </h1>
          <p className="text-seinfra-blue-light-500 px-4">
            Informe seu CPF e senha para entrar na sua conta
          </p>
        </div>
        <FieldGroup className="flex felx-col gap-8">
          <Controller
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <Field orientation={"seinfra"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                  CPF
                </FieldLabel>
                <Input {...field} id={field.name} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"seinfra"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                  Senha
                </FieldLabel>
                <Input {...field} id={field.name} type="password" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Button className="mt-14">Entrar</Button>
              </Field>
            )}
          />
        </FieldGroup>
        <footer className="flex mt-4 text-center justify-center flex-col gap-8 items-center">
          <h1 className="text-seinfra-blue-light-500">
            Não tem uma conta? <br />
            <Link to="/" className="text-seinfra-yellow-300 underline">
              Criar conta
            </Link>
          </h1>
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row flex-col">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
          </div>
        </footer>
        <img
          src={yellowLine}
          alt="Yellow Line"
          className="absolute right-0 bottom-0"
        />
      </form>
    </div>
  );
}
export default LoginPage;
