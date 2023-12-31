import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useTranslation } from "react-i18next";

export const MarkDown = ({ option }: { option: string }) => {
  const { t } = useTranslation();
  return (
    <p>
      <ReactMarkdown>{t(option)}</ReactMarkdown>
    </p>
  );
};
