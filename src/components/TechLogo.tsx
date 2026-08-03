import Image from "next/image";

type TechLogoProps = {
  id: string;
  label: string;
  sizeClass?: string;
};

export default function TechLogo({
  id,
  label,
  sizeClass = "h-7 w-7",
}: TechLogoProps) {
  return (
    <Image
      src={`/assets/logos/${id}.svg`}
      alt={label}
      width={48}
      height={48}
      className={`shrink-0 object-contain opacity-65 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 ${sizeClass}`}
    />
  );
}
