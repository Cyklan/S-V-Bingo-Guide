import { useEffect, useState } from "preact/hooks";
import { checkConsent } from "../util/thirdPartyConsent";

export const useConsent = () => {
  const [consent, setConsent] = useState(checkConsent);

  useEffect(() => {
    const handler = ({ detail }) => {
      setConsent(detail.cookie.categories.includes("thirdPartyContent"))
    };
    window.addEventListener("cc:onChange", handler);
    window.addEventListener("cc:onFirstConsent", handler);

    return () => {
      window.removeEventListener("cc:onChange", handler);
      window.addEventListener("cc:onFirstConsent", handler);
    };
  }, []);

  return consent;
};
