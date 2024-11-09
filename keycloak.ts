import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: "localhost:8080",
    realm: "Hackaton",
    clientId: "nextjs-app"
};

const keycloak = typeof window !== 'undefined' ? new Keycloak(keycloakConfig) : null;

export default keycloak;