Here’s a **Dockerfile** tailored for a **Node.js 16** environment to run a **Gatsby.js** app with the specified `package.json` commands. This setup ensures compatibility with the `deploy` script, which includes `gh-pages` for deployment.

---

```dockerfile
# Use the official Node.js 16 image
FROM node:16-alpine

# Install Python 3 and pip
RUN apk add --no-cache make python3 py3-pip vips-dev binutils gcc g++ libc6-compat autoconf automake libtool

# --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install dependencies (including devDependencies for build/deploy)
RUN npm install

RUN npm install --save-dev gatsby-cli@2

# Copy the rest of the application files
COPY . .

# Expose the port Gatsby runs on (default: 8000, but you're using 8080)
EXPOSE 8080

# Command to run the app in development mode
CMD ["npm", "run", "develop"]
```

---

### Key Notes:
1. **Node.js 16**: Uses the `node:16-alpine` image for a lightweight and efficient setup.
2. **Multi-stage builds**: Not strictly necessary here, but you could optimize further by separating build and runtime stages if needed.
3. **Ports**:
   - `EXPOSE 8080` matches your `develop` script (`--port=8080`).
   - Ensure your hosting environment maps this port correctly.
4. **Dependencies**:
   - `gh-pages` must be listed in your `package.json` under `devDependencies` for the `deploy` script to work.
   - The `deploy` script assumes `gh-pages` is installed globally or as a local dependency.
5. **Environment**:
   - If you need environment variables (e.g., for `gatsby build`), use `ARG` or `ENV` directives.
   - Example:
     ```dockerfile
     ARG GATSBY_ENV
     ENV GATSBY_ENV=$GATSBY_ENV
     ```

---

### Example `package.json` (for reference):
Ensure your `package.json` includes:
```json
{
  "scripts": {
    "build": "gatsby build",
    "deploy": "npm run clean && npm run task:copy && gatsby build && gh-pages -d public -b master",
    "develop": "gatsby develop --port=8080"
  },
  "devDependencies": {
    "gh-pages": "^3.2.3",
    "gatsby": "^4.24.0"
  }
}
```

---

### Building and Running the Docker Image:
1. **Build**:
   ```bash
   docker build -t gatsby-app .
   ```
2. **Run**:
   ```bash
   docker run -p 8080:8080 gatsby-app
   ```
   - For production (e.g., `gatsby build`), override the `CMD`:
     ```bash
     docker run -e NODE_ENV=production gatsby-app npm run build
     ```

---
### Next Steps:
- If you need help with **environment variables** or **optimizing the Dockerfile** further, let me know!
- If you’re deploying to a platform like **Netlify** or **Vercel**, their build environments may handle some of this automatically.

Here’s a **Makefile** that lets you run each of the three commands (`build`, `deploy`, and `develop`) from the same Docker container. This approach avoids rebuilding the container for each command and ensures consistency.

---

### **Makefile**

```makefile
# Define the image name and container name
IMAGE_NAME := gatsby-app
CONTAINER_NAME := gatsby-container

# Default command (can be overridden)
COMMAND ?= help

# Build the Docker image
build-image:
	docker build -t $(IMAGE_NAME) .

# Run the container in development mode (for `develop`)
develop: build-image
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

# Clean up the container after use
clean-container:
	docker rm -f $(CONTAINER_NAME) || true

# Help command to list available options
help:
	@echo "Available commands:"
	@echo "  make build-image   - Build the Docker image"
	@echo "  make develop       - Run the app in development mode"
	@echo "  make build         - Build the app for production"
	@echo "  make deploy        - Deploy the app using gh-pages"
	@echo "  make clean-container - Remove the container"
```

---

### **How to Use the Makefile**
1. **Build the Docker image** (if not already built):
   ```bash
   make build-image
   ```

2. **Run in development mode** (hot-reloading enabled):
   ```bash
   make develop
   ```
   - Access the app at `http://localhost:8080`.

3. **Build for production** (static files in `public`):
   ```bash
   make build
   ```

4. **Deploy to GitHub Pages** (requires `gh-pages` setup):
   ```bash
   make deploy
   ```

5. **Clean up the container** (after stopping it):
   ```bash
   make clean-container
   ```

---

### **Key Features**
- **Volume Mounting**: The `-v $(PWD):/app` flag ensures your local files are synced with the container, so changes are reflected immediately.
- **Environment Variables**: The `NODE_ENV=production` flag is set for `build` and `deploy` to optimize the output.
- **Interactive Mode**: The `-it` flag allows you to see logs and interact with the container (useful for debugging).
- **Cleanup**: The `clean-container` target removes the container after use to avoid conflicts.

---
### **Notes**
- If you’re using **GitHub Pages**, ensure your `gh-pages` branch is correctly configured in the `deploy` script.
- For **Windows**, use `$(shell pwd)` instead of `$(PWD)` if `make` doesn’t recognize the path correctly.
- If you need to pass additional environment variables (e.g., for API keys), add them to the `docker run` command.
