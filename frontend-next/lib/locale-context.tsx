"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { getMessages, type Locale, type Messages } from "./messages";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, messages: getMessages(locale), toggleLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useMessages(): Messages {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useMessages must be used within LocaleProvider");
  return ctx.messages;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, toggleLocale: ctx.toggleLocale };
}
