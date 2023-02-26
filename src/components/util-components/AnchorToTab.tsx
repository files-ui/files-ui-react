import * as React from "react";
type AnchorToTabProps = React.HTMLProps<HTMLAnchorElement>;
const AnchorToTab: React.FC<AnchorToTabProps> = (props: AnchorToTabProps) => {
  const { children, href, target, rel, ...rest } = props;
  return (
    <a
      href={href}
      target={target || "_blank"}
      rel={rel || "noopener noreferrer"}
      {...rest}
    >
      {children}
    </a>
  );
};
export default AnchorToTab;
