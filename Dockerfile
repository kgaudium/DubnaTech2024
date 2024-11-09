FROM node:lts AS builder

WORKDIR /dubnatech2024
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:lts
WORKDIR /dubnatech2024
ENV NODE_ENV=production

COPY --from=builder /dubnatech2024/public ./public
COPY --from=builder /dubnatech2024/package.json ./package.json
COPY --from=builder /dubnatech2024/.next ./.next
COPY --from=builder /dubnatech2024/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]