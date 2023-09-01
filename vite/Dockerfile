FROM node:18-alpine
WORKDIR /app/vite/
COPY package.json package-lock.json /app/vite/
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]