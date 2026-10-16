.PHONY: install dev build preview check clean

install:
	npm ci

dev:
	npm run dev -- --open

build:
	npm run build

preview: build
	npm run preview -- --open

check:
	npm run check

clean:
	rm -r build .svelte-kit
