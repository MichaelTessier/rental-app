import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

type Props = {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}

const Loader = ({ size = 30, className, fullScreen }: Props) => {
  const Icon = <LoaderCircle className={cn('animate-spin', className)} size={size}/>

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center h-screen">
        {Icon}
      </div>
    )
  }

  return Icon
}
export default Loader