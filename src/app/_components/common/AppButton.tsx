import Image from "next/image"

interface AppButtonProps {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const AppButton = ({ label, onClick, type = "button", className }: AppButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full text-base px-6 py-3 bg-[#CC4FAF] hover:bg-[#CC4FAF]/90 border-0 text-white flex items-center justify-center max-w-fit ${className}`}
    >
      {label}
      <Image
        src="/icons/arrow.svg"
        alt="arrow right"
        width={14}
        height={12}
        className="inline-block ml-2"
      />
    </button>
  )
}

export default AppButton
