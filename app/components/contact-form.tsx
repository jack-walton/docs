"use client";

import { useForm, ValidationError } from "@formspree/react";

type FormId = string;

interface FormData {
  email: string;
  message: string;
  [key: string]: string;
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm<FormData>(
    process.env.NEXT_PUBLIC_FORM as FormId
  );

  if (state.succeeded) {
    return <p className="text-center mt-16">Thanks! I got your message.</p>;
  }

  return (
    <section className="text-base">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col border border-solid rounded-lg border-gray-300 dark:border-neutral-700 p-4 max-w-lg w-full mb-16 mt-16"
      >
        <div>
          <label>Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 dark:text-neutral-900 px-4 py-2 rounded-lg my-2 hover:bg-neutral-700 dark:hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
}
