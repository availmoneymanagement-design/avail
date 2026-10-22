import * as React from "react";
import { Mic, MicOff } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { toSpeechLocale, useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { cn } from "@/lib/utils";

type VoiceInputProps = Omit<React.ComponentProps<"input">, "value" | "onChange"> & {
  value: string;
  onValueChange: (value: string) => void;
  wrapperClassName?: string;
  // "append" adds dictated text after existing text; "replace" overwrites it.
  voiceMode?: "append" | "replace";
};

// Text input with a mic button: tap to speak, and the transcript is written into the field.
const VoiceInput = React.forwardRef<HTMLInputElement, VoiceInputProps>(
  ({ value, onValueChange, className, wrapperClassName, voiceMode = "append", ...props }, ref) => {
    const { translateLang } = useApp();
    const valueRef = React.useRef(value);
    valueRef.current = value;

    const { supported, listening, interim, error, start, stop } = useSpeechRecognition({
      lang: toSpeechLocale(translateLang),
      onFinal: (text) => {
        const current = valueRef.current;
        onValueChange(voiceMode === "replace" || !current.trim() ? text : `${current.trimEnd()} ${text}`);
      },
    });

    const shown = listening && interim ? (value ? `${value.trimEnd()} ${interim}` : interim) : value;
    const errorText =
      error === "not-allowed" || error === "service-not-allowed"
        ? "Microphone access was blocked. Allow it in your browser settings."
        : error
          ? "Couldn't capture speech. Please try again."
          : null;

    return (
      <div className={cn("relative", wrapperClassName)}>
        <div className="relative">
          <input
            ref={ref}
            value={shown}
            onChange={(e) => onValueChange(e.target.value)}
            className={cn(className, supported && "pr-11")}
            {...props}
          />
          {supported && (
            <button
              type="button"
              onClick={listening ? stop : start}
              aria-label={listening ? "Stop voice input" : "Start voice input"}
              title={listening ? "Stop listening" : "Speak to type"}
              className={cn(
                "absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full transition",
                listening
                  ? "bg-money-out text-money-out-foreground animate-pulse"
                  : "text-muted-foreground hover:bg-accent hover:text-primary",
              )}
            >
              {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
          )}
        </div>
        {listening && <p className="mt-1 text-xs text-primary">Listening… speak now</p>}
        {errorText && !listening && <p className="mt-1 text-xs text-destructive">{errorText}</p>}
      </div>
    );
  },
);
VoiceInput.displayName = "VoiceInput";

export default VoiceInput;
