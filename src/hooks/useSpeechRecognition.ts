import { useCallback, useEffect, useRef, useState } from "react";

// Minimal typings for the Web Speech API (not in lib.dom for all TS versions).
type SpeechRecognitionResultLike = { isFinal: boolean; 0: { transcript: string } };
type SpeechRecognitionEventLike = { resultIndex: number; results: ArrayLike<SpeechRecognitionResultLike> };
type SpeechRecognitionErrorEventLike = { error: string };
type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

const getCtor = (): SpeechRecognitionCtor | null => {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
};

// Map the app's Google Translate language code to a BCP-47 speech locale.
const SPEECH_LOCALES: Record<string, string> = {
  en: "en-US",
  hi: "hi-IN",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  "zh-HK": "zh-HK",
  yue: "yue-Hant-HK",
};

export const toSpeechLocale = (code?: string) => {
  if (!code) return "en-US";
  return SPEECH_LOCALES[code] ?? code;
};

type Options = {
  lang?: string;
  onFinal: (text: string) => void;
};

export const useSpeechRecognition = ({ lang = "en-US", onFinal }: Options) => {
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const onFinalRef = useRef(onFinal);
  onFinalRef.current = onFinal;

  const supported = getCtor() !== null;

  const stop = useCallback(() => {
    recRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    const Ctor = getCtor();
    if (!Ctor) {
      setError("not-supported");
      return;
    }
    recRef.current?.abort();
    const rec = new Ctor();
    rec.lang = lang;
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      let finalText = "";
      let interimText = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interimText += r[0].transcript;
      }
      setInterim(interimText);
      if (finalText.trim()) onFinalRef.current(finalText.trim());
    };
    rec.onerror = (e) => {
      if (e.error !== "aborted" && e.error !== "no-speech") setError(e.error);
    };
    rec.onend = () => {
      setListening(false);
      setInterim("");
      if (recRef.current === rec) recRef.current = null;
    };

    recRef.current = rec;
    setError(null);
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }, [lang]);

  useEffect(() => () => recRef.current?.abort(), []);

  return { supported, listening, interim, error, start, stop };
};
