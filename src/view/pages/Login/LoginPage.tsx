import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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
import { userLoginSchema } from "@/services/zodSchemas";
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
    console.log("patapim");
  }

  return (
    <div className="relative flex min-h-screen h-auto flex-col overflow-hidden">
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
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-700 mb-4 px-4">
            Login
          </h1>

          <p className="text-seinfra-blue-light-500 font-semibold px-4">
            Informe seu CPF e senha para entrar na sua conta
          </p>
        </div>
        <FieldGroup className="flex felx-col gap-8">
          <Controller
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start max-w-[600px]"
                >
                  CPF
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  className="max-w-[600px] font-semibold"
                />
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-semibold"
                  />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start max-w-[600px]"
                >
                  Senha
                </FieldLabel>
                <Input
                  type="password"
                  {...field}
                  id={field.name}
                  className="max-w-[600px] font-semibold"
                />
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-semibold"
                  />
                )}
                <Button className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]">
                  Entrar
                </Button>
              </Field>
            )}
          />
        </FieldGroup>

        <footer className="flex items-center mt-4 text-center justify-center flex-col gap-8 items-center">
          <h1 className="text-seinfra-blue-light-500">
            Não tem uma conta? <br />{" "}
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
