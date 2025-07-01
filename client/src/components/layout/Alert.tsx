import { AlertCircleIcon, CheckCircle2Icon, Info } from "lucide-react";
import { Alert as AlertShadcn, AlertTitle, AlertDescription } from "../shadcn/alert";
import { AlertVariant } from "./Alert.model";

type Props = {
  variant?: AlertVariant;
  title: string;
  description?: string;
}  

function Alert({ variant = AlertVariant.Default, title, description }: Props) {
  function Icon () {
    switch (variant) {
      case AlertVariant.Destructive:
        return <AlertCircleIcon />;
      case AlertVariant.Success:
        return <CheckCircle2Icon />;
      default:
        return <Info />;
    }
  }

  return (
     <AlertShadcn
      variant={variant}
     >
        <Icon />
        <AlertTitle>{title}</AlertTitle>
        { description && (
          <AlertDescription>
            {description}
          </AlertDescription>
        )}
      </AlertShadcn>
  )
} 

export default Alert;