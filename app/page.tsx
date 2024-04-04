import Image from "next/image";
import "@/app/background.scss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="https://www.soliditypartners.com"
            rel="noopener noreferrer"
          >
            <Image
              src="/solidity.svg"
              alt="Solidity Logo"
              className="dark:invert"
              width={160}
              height={50}
              priority
            />
          </a>

          
        </div>
        <p className="fixed bottom-0 left-0 flex w-full items-end justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4">
          Finance, Grants and Contracts Management &nbsp;
          <code className="font-mono font-bold"></code>
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <h2 className="font-primary font-extrabold text-grayish text-3xl sm:text-4xl md:text-5xl md:leading-tight">
          WE ARE {' '}<span className="text-palette-indigo">
          UPDATING
          </span>  OUR WEBSITE
    
        </h2 >
        <p className="mt-4 font-secondary text-palette-gray text-base md:text-lg lg:text-xl">
          Meanwhile, you can contact us by email or by phone
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="mailto:info@soliditypartners.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`flex justify-center mb-3 lg:text-2xl sm:text-base font-semibold`}>
            Email{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            <p className={`flex ml-2 my-auto text-left max-w-[30ch] text-sm opacity-70`}>
            info@soliditypartners.com
          </p>
          </h2>

        </a>

        <a
          href="tel:+992555552777"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`flex justify-center mb-3 lg:text-2xl sm:text-base font-semibold`}>
            Phone{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            <p className={`flex ml-2 my-auto text-left max-w-[30ch] text-sm opacity-70`}>
            +995 555-552-777
          </p>
          </h2>
        </a>
      </div>
    </main>
  );
}
