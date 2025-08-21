import { Loader2 } from "lucide-react";

interface FullPageSpinnerProps {
  message?: string;
}

export function FullPageSpinner({ message = "Loading..." }: FullPageSpinnerProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {message}
        </h2>
        <p className="text-gray-600">
          Please wait while we verify your credentials...
        </p>
      </div>
    </div>
  );
}
