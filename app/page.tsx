import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col p-10 lg:flex-row">
      <div className=" lg:basis-1/2 p-5 md:p-20">

        {/* Title */}
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl md:m-5">
          LinguaConnect
        </h1>

        {/* Extra text description */}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The one spot stop for all your language tutor needs.
        </p>
        {/* Login and SignUp buttons */}
        <div className="flex flex-row gap-3 m-5 justify-center md:justify-start">
          <Link href={'/login'}>
            <Button variant={'default'}>
              Login
            </Button>
          </Link>
          <Link href={'/signup'}>
            <Button variant={'default'}>
              Sign Up
            </Button>
          </Link>
        </div>
        
      </div>

      {/* Landing Image */}
      <div className="lg:basis-1/2 p-5">
      <Image 
        src="/LandingImage.svg"
        alt="Landing image" 
        height={1000} 
        width={1000} />
      </div>
      
      
    </div>
  );
}
