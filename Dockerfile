FROM node:18-alpine as build
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
RUN npm ci --only=production && npm cache clean --force
USER node


FROM node:18-alpine As production
WORKDIR /app
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
ENV PORT 5000
ENV POSTGRES_HOST 51.250.66.134
ENV POSTGRES_PORT 5432
ENV POSTGRES_DB db
ENV POSTGRES_USER softuser
ENV POSTGRES_PASSWORD 8B5DjYiE!PYr5y
EXPOSE 5000
CMD [ "node", "dist/main.js" ]