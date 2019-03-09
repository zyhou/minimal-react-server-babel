install:
	yarn

start: server-start

build: server-build

clean:
	rm -rf dist/

### Server

server-start:
	cd src/server && BABEL_ENV=node ../../node_modules/.bin/babel-node index.js

server-build: clean
	BABEL_ENV=node node_modules/.bin/babel src/server -d dist/server
