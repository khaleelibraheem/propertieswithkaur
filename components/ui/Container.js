import clsx from "clsx";

export default function Container({ children, className, size = "default" }) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
