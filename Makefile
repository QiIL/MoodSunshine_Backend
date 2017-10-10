LOCAL_MONGO_URL = mongodb://127.0.0.1:27017/Mood_test
LOCAL_PGSQL_URL = postgresql://root@127.0.0.1:5432/mood_test
TEST_NODE_ENV = unit_test
NPM_REGISTRY="--registry=https://registry.npm.taobao.org/"

install:
	@npm install $(NPM_REGISTRY)

test:
	NODE_ENV=$(TEST_NODE_ENV) MOOD_MONGO_URL=$(LOCAL_PGSQL_URL) node_modules/.bin/mocha

.PHONY: test