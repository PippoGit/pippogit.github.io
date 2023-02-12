import { Send } from "lucide-react";
import { api } from "../utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldErrors, FieldValues, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ReactNode } from "react";

import { z } from "zod";

const contactsSchema = z.object({
  name: z.string().min(1, "Full name is required.").max(255),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Email address is invalid.")
    .max(255),
  body: z
    .string()
    .min(1, "The message is required.")
    .max(1000, "Your message is a bit long, isnt it? Use at most 1000 chars."),
});

type ContactsSchemaInput = z.TypeOf<typeof contactsSchema>;

export function ContactForm() {
  const sendMessageMutation = api.mail.send.useMutation();
  const methods = useForm<ContactsSchemaInput>({
    resolver: zodResolver(contactsSchema),
  });

  const { handleSubmit } = methods;
  const onSubmitHandler: SubmitHandler<ContactsSchemaInput> = (values) => {
    sendMessageMutation.mutate(values);
  };

  if (sendMessageMutation.isSuccess) {
    return (
      <div className="text-lg text-zinc-400">Message sent! Thank you!</div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col gap-4"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormInput name="name" label="Your name" />
        <FormInput name="email" label="Your email" type="email" />
        <FormTextarea name="body" label="Your message" />

        <button
          disabled={sendMessageMutation.isLoading}
          className="text-md flex flex-grow-0 items-center justify-center gap-4 rounded-lg bg-pink-700 p-2 font-semibold tracking-wide text-pink-100 hover:bg-pink-800"
        >
          {sendMessageMutation.isLoading ? (
            <>
              <Spinner />
              <span>Sending</span>
            </>
          ) : (
            <>
              <Send size="1em" className="text-pink-200" />
              <span>Send your message</span>
            </>
          )}
        </button>
      </form>
    </FormProvider>
  );
}

interface FormBaseInputProps {
  label: string;
  name: string;
  errors: FieldErrors<FieldValues>;
  children?: ReactNode;
}

interface FormInputProps
  extends Omit<FormBaseInputProps, "children" | "errors"> {
  type?: string;
}

type FormTextareaProps = Omit<FormBaseInputProps, "children" | "errors">;

function FormInput({ label, name, type = "text" }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormBaseInput label={label} name={name} errors={errors}>
      <input
        className="rounded-lg bg-zinc-800 p-2 px-3 font-medium tracking-wide text-zinc-400"
        type={type}
        {...register(name)}
      />
    </FormBaseInput>
  );
}

function FormTextarea({ label, name }: FormTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormBaseInput label={label} name={name} errors={errors}>
      <textarea
        className=" min-h-[10rem] resize-none rounded-lg bg-zinc-800 p-2 px-3 font-medium tracking-wide text-zinc-400"
        {...register(name)}
      />
    </FormBaseInput>
  );
}

function FormBaseInput({ label, name, errors, children }: FormBaseInputProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={name} className="text-sm font-semibold text-zinc-600">
        {label}
      </label>
      {children}
      {errors[name] && (
        <span className="block pt-1 text-xs font-medium tracking-wide text-red-600">
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 animate-spin fill-pink-200 text-pink-900"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}
