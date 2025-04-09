# Use the official Bun image from Docker Hub
FROM oven/bun:1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first to leverage Docker caching
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .
# Build the Next.js application for production
RUN bun run next build

# Expose port 3000 (default for Next.js)
EXPOSE 3000

# Start the production Next.js server using Bun
CMD ["bun", "run", "next", "start"]