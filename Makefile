# Define the image name and container name
IMAGE_NAME := gatsby-app
CONTAINER_NAME := gatsby-container

# Default command (can be overridden)
COMMAND ?= help

# Build the Docker image
build-image:
	docker build -t $(IMAGE_NAME) .

# Run the container in development mode (for `dev`)
dev: build-image
	docker run \
		--name $(CONTAINER_NAME) \
		-p 8080:8080 \
		-v $(PWD):/app \
		-it $(IMAGE_NAME) \
		npm run develop

# Run the container to build the app (for `build`)
build: build-image
	docker run \
		--name $(CONTAINER_NAME) \
		-v $(PWD):/app \
		-e NODE_ENV=production \
		$(IMAGE_NAME) \
		npm run build

# Run the container to deploy the app (for `deploy`)
deploy: build-image
	docker run \
		--name $(CONTAINER_NAME) \
		-v $(PWD):/app \
		-e NODE_ENV=production \
		-it $(IMAGE_NAME) \
		npm run deploy

# Gatsby clean, CLI version
clean: build-image
	docker run -d \
		--name $(CONTAINER_NAME) \
		-v $(PWD):/app \
		-e NODE_ENV=production \
		$(IMAGE_NAME) \
		./node_modules/bin/gatsby develop --port=8080

# npx --yes gatsby --help
# sleep 30 && echo done!
# rm -rf node_modules package-lock.json && gatsby clean && npm install --legacy-peer-deps --no-audit && echo done!

# Clean up the container after use
clean-container:
	docker rm -f $(CONTAINER_NAME) || true

# Help command to list available options
help:
	@echo "Available commands:"
	@echo "  make build-image   - Build the Docker image"
	@echo "  make dev           - Run the app in development mode"
	@echo "  make build         - Build the app for production"
	@echo "  make deploy        - Deploy the app using gh-pages"
	@echo "  make clean-container - Remove the container"
