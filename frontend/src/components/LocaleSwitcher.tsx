"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeCookieName, type Locale } from "@/i18n/config";

// Fonction utilitaire hors composant : le compilateur React n'applique ses
// règles de pureté qu'aux composants/hooks, pas aux fonctions "normales".
function writeLocaleCookie(next: Locale) {
  document.cookie = `${localeCookieName}=${next}; path=/; max-age=31536000; samesite=lax`;
}

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    writeLocaleCookie(next);
    startTransition(() => router.refresh());
  };

  return (
    <div className="locale-switcher" aria-label={t("label")}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={`locale-switcher-btn${code === locale ? " is-active" : ""}`}
          disabled={isPending}
          aria-pressed={code === locale}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
