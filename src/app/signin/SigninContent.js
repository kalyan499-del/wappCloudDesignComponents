import Head from "next/head";
// import { Container, Input, Button } from 'nextui';
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";
import { Checkbox } from "@nextui-org/checkbox";
const open_sans = Open_Sans({ subsets: ["latin"] });
import Divider from "../components/Divider";

export default function SigninContent() {
  return (
    <div className="signInTotalContent">
      <h1 className="text-3xl font-semibold mb-4 mt-8 signinTitle">
        Sign In to your Account
      </h1>

      <form className="text-left form-container">
        <Input
          label="UserName"
          placeholder="Enter your UserName"
          className="formInput"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          className="formInput"
        />
        <div className="forgotWrapper flex justify-between">
          <Checkbox
            className="remember"
            defaultSelected
            size="sm"
            radius="sm"
            color="primary"
          >
            Remember me
          </Checkbox>
          <Link href="#" className="forgotLinkText">
            {" "}
            forgot passsword{" "}
          </Link>
        </div>
        <Button color="success" className="signInButton">
          Signin
        </Button>
      </form>

      <Divider>or</Divider>
      <div className="socialContainer flex justify-space-around">
        <Image src="/googleLogo.svg" width={200} height={100} />
        <Image src="/googleLogo.svg" width={200} height={100} />
      </div>
      <div className="redirectLinkText">
        {" "}
        No Account Yet <Link href="#" className="signUp"></Link>Signup{" "}
      </div>
    </div>
  );
}
