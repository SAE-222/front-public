import Image from "next/image";

const Logo = () => {
  return (
    <Image src="/logo.svg" width={55} height={55} className="rounded-xl" />
  );
};

export default Logo;
