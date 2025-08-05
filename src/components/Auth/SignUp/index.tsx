"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useContext, useState } from "react";
import Loader from "@/components/Common/Loader";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully registered");
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });

    setTimeout(() => {
      signUpOpen(false);
    }, 1200);
    authDialog?.setIsUserRegistered(true);

    setTimeout(() => {
      authDialog?.setIsUserRegistered(false);
    }, 1100);
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <div className="mb-8">
        <SocialSignUp />
      </div>

      <div className="relative my-8 text-center">
        <div className="absolute left-0 top-1/2 w-full border-t border-border dark:border-dark_border"></div>
        <span className="relative z-10 bg-white dark:bg-darklight px-4 text-gray-500 text-sm">
          OR
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-white dark:bg-dark rounded-lg p-6 shadow-lg border border-border dark:border-dark_border"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-white text-black px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-white text-black px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-white text-black px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-5 py-3 text-base text-white font-medium transition duration-300 ease-in-out hover:bg-darkprimary"
        >
          {loading ? <Loader /> : "Sign Up"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        By creating an account you agree to our
        <Link
          href="/#"
          className="text-primary ml-1 underline hover:no-underline"
        >
          Privacy Policy
        </Link>
      </p>

      <p className="text-sm text-gray-500 mt-2 text-center">
        Already have an account?
        <Link
          href="/"
          className="ml-1 text-primary underline hover:no-underline"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
