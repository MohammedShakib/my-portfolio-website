const brandColors: Record<string, string> = {
  docker: "#2496ed",
  express: "#ffffff",
  firebase: "#ffca28",
  github: "#ffffff",
  java: "#f89820",
  javascript: "#f7df1e",
  nodejs: "#5fa04e",
  python: "#3776ab",
  railway: "#ffffff",
  react: "#61dafb",
  redis: "#ff4438",
  springboot: "#6db33f",
  supabase: "#3ecf8e",
  tailwindcss: "#06b6d4",
};

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
  const src = `/assets/logos/${id}.svg`;

  return (
    <span
      aria-label={label}
      role="img"
      title={label}
      className={`inline-block shrink-0 bg-current text-accent/60 transition-all duration-300 group-hover:scale-105 group-hover:[color:var(--brand-color)] ${sizeClass}`}
      style={{
        maskImage: `url("${src}")`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        ["--brand-color" as string]: brandColors[id] ?? "#d5b083",
      }}
    />
  );
}

export const techLogoColor = (id: string) => brandColors[id] ?? "#d5b083";
