import { Send } from "lucide-react";
import { useState } from "react";
import { api } from "../utils/api";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const sendMessageMutation = api.mail.send.useMutation();

  const onSubmit = () => {
    sendMessageMutation.mutate({ name, email, body });
  };

  if (sendMessageMutation.isSuccess) {
    return (
      <div className="text-lg text-zinc-400">Message sent! Thank you!</div>
    );
  }

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold text-zinc-600">
          Your name
          <span className="align-super text-sm text-pink-600">*</span>
        </label>
        <input
          required
          name="name"
          value={name}
          maxLength={255}
          onChange={(event) => setName(event.target.value)}
          className="rounded-lg bg-zinc-800 p-2 px-3 font-medium tracking-wide text-zinc-400"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold text-zinc-600">
          Your email
          <span className="align-super text-sm text-pink-600">*</span>
        </label>
        <input
          required
          name="email"
          type="email"
          maxLength={255}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg bg-zinc-800 p-2 px-3 font-medium tracking-wide text-zinc-400"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="body" className="text-sm font-semibold text-zinc-600">
          Your message
          <span className="align-super text-sm text-pink-600">*</span>
        </label>
        <textarea
          required
          name="body"
          maxLength={1000}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className="min-h-[10rem] resize-none rounded-lg bg-zinc-800 p-2 px-3 font-medium tracking-wide text-zinc-400"
        />
      </div>

      <button
        disabled={sendMessageMutation.isLoading}
        className="text-md flex flex-grow-0 items-center justify-center gap-4 rounded-lg bg-pink-700 p-2 font-semibold tracking-wide text-pink-100 hover:bg-pink-800"
      >
        {sendMessageMutation.isLoading ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send size="1em" className="text-pink-200" />
            <span>Send your message</span>
          </>
        )}
      </button>
    </form>
  );
}
