import Image from "next/image";

export default function ContactPage() {
  const styles = {
    formInput:
      "rounded bg-slate-600 p-4 px-6 outline-none placeholder:text-slate-400",
  };

  return (
    <div className="m-auto gap-10 lg:grid lg:grid-cols-2">
      <Image className="bg-red-200" />
      <div>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Name and surname"
            className={styles.formInput}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={styles.formInput}
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number (Optional)"
            className={styles.formInput}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className={`${styles.formInput} resize-none`}
            rows={9}
          />
          <button className="rounded bg-blue-600 py-7">Send</button>
        </form>
      </div>
    </div>
  );
}
