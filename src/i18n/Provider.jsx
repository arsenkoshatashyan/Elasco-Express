import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import LOCALES from "../i18n/locale";
import messages from "./messages";


export default function Provider({ children, locale }) {
  return (
    <IntlProvider textComponent={Fragment} defaultLocale={LOCALES.ENGLISH} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
