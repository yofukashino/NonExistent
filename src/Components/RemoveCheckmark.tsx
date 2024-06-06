export default ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <circle
      cx="12"
      cy="12"
      r="10"
      style={{
        fill: "white",
      }}
    />
    <path
      style={{
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z"
    />
    {children}
  </svg>
);
