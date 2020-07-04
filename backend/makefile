.PHONY: all build push deploy run stop

all: build push deploy

build:
	docker build -t umeshvjti/brandoz:latest -f .

build-docker:
	docker build -t umeshvjti/brandoz:latest -f .

push:
	docker push umeshvjti/brandoz:latest

deploy:
	eb deploy

run:
	docker-compose up -d

stop:
	docker-compose down