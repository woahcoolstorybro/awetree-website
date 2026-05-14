import Image from "next/image";

type AwetreeMarkProps = {
  className?: string;
};

export function AwetreeMark({ className }: AwetreeMarkProps) {
  return (
    <Image
      aria-hidden="true"
      className={className}
      alt=""
      src="/awetree-mark-concept.png"
      width={1254}
      height={1254}
      priority
    />
  );
}
