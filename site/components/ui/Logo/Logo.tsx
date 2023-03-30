import Image from "next/image";

const Logo = ({ className = '', ...props }) => (
  <Image src={'/icon-192x192.png'} alt={"Icon"} width={40} height={40 }></Image>
)

export default Logo
