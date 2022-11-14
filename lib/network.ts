import { Persona, User } from "../data";
import { MessageSchema, SupportLocales } from "../plugin/i18n";

export const fetchPersona = () =>
  fetch(`${process.env.API_SERVER}/data/personas.json`)
    .then((data) => data.json())
    .then((data) => data.personas as Persona[])
    .catch(() => null);

export const login = () =>
  fetch(`${process.env.API_SERVER}/data/user.json`)
    .then<User>((data) => data.json())
    .catch(() => null);

export const loadLocale = (locale: SupportLocales) =>
  fetch(`${process.env.API_SERVER}/locales/${locale}.json`).then<MessageSchema>(
    (data) => data.json()
  );
