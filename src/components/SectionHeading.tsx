type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      {body ? <p className="muted-copy mt-5 text-lg leading-8">{body}</p> : null}
    </div>
  );
}
