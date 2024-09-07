FROM node:20-alpine
# node:version

# where it will run the image
WORKDIR /myapp
# myapp is a folder inside container where all thing run


COPY package.json .


RUN npm install

COPY . .
# second . refers to /myapp and first . refer to copy all in cwd

# optional
EXPOSE 5173

# RUN npm run dev
CMD [ "npm","run","dev" ]

