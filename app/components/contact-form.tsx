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
    return <p className="text-center mt-16 text-[var(--color-primary-900)] dark:text-[var(--color-primary-100)]">Thanks! I got your message.</p>;
  }

  return (
    <section className="text-base">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col border border-solid rounded-lg border-[var(--color-primary-200)] dark:border-[var(--color-primary-700)] p-4 max-w-lg w-full mb-16 mt-16"
      >
        <div>
          <label className="text-[var(--color-primary-900)] dark:text-[var(--color-primary-100)]">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-[var(--color-primary-200)] dark:border-[var(--color-primary-700)] bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)] text-[var(--color-primary-900)] dark:text-[var(--color-primary-100)] rounded-lg px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="text-[var(--color-primary-900)] dark:text-[var(--color-primary-100)]">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="border border-[var(--color-primary-200)] dark:border-[var(--color-primary-700)] bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)] text-[var(--color-primary-900)] dark:text-[var(--color-primary-100)] rounded-lg px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[var(--color-primary-900)] dark:bg-[var(--color-primary-300)] border border-solid rounded-lg border-[var(--color-primary-200)] dark:border-[var(--color-primary-700)] text-[var(--color-primary-50)] dark:text-[var(--color-primary-900)] px-4 py-2 rounded-lg my-2 hover:bg-[var(--color-primary-800)] dark:hover:bg-[var(--color-primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
}