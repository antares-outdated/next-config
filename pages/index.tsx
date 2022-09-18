import { styled } from "../styles/stitches.config.ts";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Button = styled("button", {});

export default function IndexPage() {
  const { t } = useTranslation("common");

  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "ru" : "en";

  return (
    <div>
      <h1>{t("h1")}</h1>
      <Button onClick={toggleTheme}>{t("change-theme")}</Button>
      <button onClick={() => onToggleLanguageClick(changeTo)}>
        {t("change-locale", { changeTo })}
      </button>
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
