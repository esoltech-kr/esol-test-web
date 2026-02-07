import ko from "@/messages/ko.json";
import en from "@/messages/en.json";

export type Messages = typeof ko;

const messagesMap = { ko, en } as const;

export type Locale = keyof typeof messagesMap;

export function getMessages(locale: Locale = "ko"): Messages {
  return messagesMap[locale];
}

const messages = ko;
export default messages;
