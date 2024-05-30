# Examenopdracht Front-end Web Development

> Schrap hierboven wat niet past

- Student: Quinten Van Wiele (pkwiki333 op Github)
- Studentennummer: 202184153
- E-mailadres: quinten.vanwiele@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## Opstarten

1. typ het commando 'yarn install' in de terminal
2. Maak een .env bestand in de root van het project.
3. Vervoledig het .env de dingen die er in moeten zijn:

- REACT_APP_BASEURL = base url van de applicatie
- REACT_APP_BASEURL_IMAGES = base url om de images van de exercises mee op te halen
- REACT_APP_AUTH0_DOMAIN = auth0 domein van de applicatie
- REACT_APP_AUTH0_CLIENT_ID = auth0 client id van de applicatie
- REACT_APP_AUTH0_API_AUDIENCE = auth0 audience van de applicatie

4. Typ 'yarn start' in de terminal om de applicatie te starten.

## Testen

1. Voer de stappen van opstarten uit. Zorg dat de applicatie gestart is.
2. Start de web server zoals de instructies in de README van web services.
3. Typ het commando 'npx cypress open' in de terminal om een nieuw venster van cypress te openen.
