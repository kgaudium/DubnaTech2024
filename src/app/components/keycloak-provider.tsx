'use client'

import { ReactNode, useEffect, useState } from "react";
import keycloak from "../configs/keycloak";

function KeycloakProvider({children}: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        keycloak
            .init({
                onLoad: "check-sso",
                silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
            })
            .then(() => {
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <>Loading...</>;
    }

    return <>{children}</>;
}