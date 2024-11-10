import { AuthOptions }  from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";


export const authOptions: AuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_CLIENT_ID!,
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
            issuer: process.env.KEYCLOAK_ISSUER,
        }),

    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
                // Assuming the groups are returned in the access token's payload
                const payload = JSON.parse(Buffer.from(account.access_token!.split('.')[1], 'base64').toString())

                console.log(payload.resource_access.account);

                token.roles = payload.resource_access.account.roles || []
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.user.roles = token.roles
            //console.log(session)

            return session
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
        // async redirect({ url, baseUrl }) {
        //     // Allows relative callback URLs
        //     if (url.startsWith("/")) return `${baseUrl}${url}`
        //     // Allows callback URLs on the same origin
        //     else if (new URL(url).origin === baseUrl) return url
        //     return baseUrl
        // }

    },
    // pages: {
    //     signIn: '/sign-in/user-data', // Custom sign-in page
    // },
}
