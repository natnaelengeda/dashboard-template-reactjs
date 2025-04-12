interface ITypography {
  type: string;
  text: string;
}

export default function Typography({ type, text }: ITypography) {
  switch (type) {
    case "h1":
      return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {text}
        </h1>
      );

    case "h2":
      return (
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          {text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {text}
        </h3>
      );

    case "h4":
      return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {text}
        </h4>
      );
    case "p":
      return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {text}
        </p>
      );
    default:
      return (
        <p>{text}</p>
      );
  }

}
