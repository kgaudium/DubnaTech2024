import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: "localhost:8080",
    realm: "Hackaton",
    clientId: "nextjs-app"
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;