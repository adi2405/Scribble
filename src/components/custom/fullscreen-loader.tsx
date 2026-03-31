import { Spinner } from "../ui/spinner";

interface FullscreenLoaderProps {
  label?: string;
}

export function FullscreenLoader({ label }: FullscreenLoaderProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Spinner className="size-6 text-muted-foreground" />
      {label && (
        <p className="text-base font-medium text-muted-foreground">{label}</p>
      )}
    </div>
  );
}
