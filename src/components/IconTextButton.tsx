import { Button, ButtonProps } from "./ui/button";

interface Props extends ButtonProps {
  text: string;
}

export default function IconTextButton(props: Props) {
  const { text, children, ...rest } = props;
  return (
    <Button {...rest}>
      <div className="flex items-center gap-2">
        {children}
        <span>{text}</span>
      </div>
    </Button>
  );
}
