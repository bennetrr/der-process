#######################################################
# Step 1: Environment                                 #
#######################################################
FROM node:lts-alpine as deps
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

#######################################################
# Step 2: Building                                    #
#######################################################
FROM node:lts-alpine AS builder
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

#######################################################
# Step 3: Running                                     #
#######################################################
FROM node:lts-alpine AS runner
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV NEXT_SHARP_PATH /app/node_modules/sharp
CMD ["node", "server.js"]
