import Head from "next/head";
// import { Container, Input, Button } from 'nextui';
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";
import { Checkbox } from "@nextui-org/checkbox";
const open_sans = Open_Sans({ subsets: ["latin"] });
import Divider from "../components/Divider";

export default function ForgotPassword() {
  return (
    <div className="signInTotalContent forgotPassword">
      <h1 className="text-3xl font-semibold mb-4 mt-8 signinTitle">
        {" "}
        Forgot Password{" "}
      </h1>

      <form className="text-left form-container">
        <p className="infoText">
          {" "}
          Kindly enter your email address tied to your account, we would help
          you reset your password.
        </p>
        <Input
          label="Email"
          placeholder="Enter your email"
          className="formInput"
          type="email"
        />
        <Button color="success" className="signInButton">
          Recover Password
        </Button>
      </form>

      <div className="redirectLinkText">
        Back to{" "}
        <Link href="#" className="signUp">
          Sign in
        </Link>{" "}
      </div>
    </div>
  );
}
