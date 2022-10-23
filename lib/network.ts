import { Persona, User } from "../data";

export const fetchPersona = () =>
  fetch(`${process.env.API_SERVER}/personas.json`)
    .then((data) => data.json())
    .then((data) => data.personas as Persona[])
    .catch(() => null);

export const login = () =>
  fetch(`${process.env.API_SERVER}/users.json`)
    .then((data) => data.json())
    .then((data) => data.users[0] as User)
    .catch(() => null);
