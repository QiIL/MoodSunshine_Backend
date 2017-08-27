TEST_NODE_ENV = unit_test

test:
	node_modules/.bin/mocha

.PHONY: test