import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={225}
        height={50}
        className="w-[150px] md:w-[225px] h-auto"
      />
    </div>
  )
}

export default Logo
