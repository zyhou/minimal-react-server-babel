install:
	yarn

start-server:
	cd src/server && ../../node_modules/.bin/babel-node index.js

start-client:
	node_modules/.bin/webpack-dev-server --open --mode development

build: build-server build-client

build-server:
	rm -rf dist/server
	BABEL_ENV=node node_modules/.bin/babel src/server -d dist/server

build-client:
	rm -rf dist/client
	node_modules/.bin/webpack --mode production

clean:
	rm -rf dist/
