# Server-Side Development — Class 1: Intro to Backend Development

**Main tech of the course:** Node.js
**Duration:** 1h 40min

---

## 1. Course Purpose & Goals

Build a general understanding of backend development: how the server fits into a web app, how the HTTP request-response flow works, and why Node.js is the course's main technology.

By the end of this class, you should be able to:
- Explain the difference between frontend and backend
- Describe client-server architecture
- Explain what an API is and the flow of an HTTP request
- Define Node.js, its origin, and what problems it solves
- Explain the single-threaded model accurately
- Differentiate Node.js, NVM, NPM, Yarn, pnpm, and Bun
- Have a working dev environment ready

---

## 2. Course Overview

**Semester content (8 units):**
1. Intro to server-side development
2. Testing web services
3. Data storage & persistence
4. Server-managed features
5. Application security
6. Server-side frameworks
7. Deploying web services
8. Best practices in server-side development

**Grading:**
- 30% Homework (research, exercises, short deliverables)
- 30% Practicals (technical application of topics)
- 40% Final integrative project (build + present a working app)

**Expectations:** punctuality/participation, prep work, on-time deliverables, responsible AI use, academic integrity, documenting decisions/evidence.

**Official channels:** Canvas (announcements/materials/submissions), institutional email + Teams (formal communication).

---

## 3. Architecture Overview (teasers for the semester)

### Monolith vs. Microservices
| | Monolith | Microservices |
|---|---|---|
| **Structure** | Built & deployed as one unit (can have internal modules) | Split into autonomous services by business capability, communicating via APIs/events |
| **Pros** | Lower operational complexity, simpler initial dev, direct debugging | Independent deploy/scaling, clear responsibilities |
| **Cons** | Changes/scaling are coupled, harder to maintain over time | Distributed complexity: networking, observability, security, consistency, failures |

> Microservices ≠ automatically better. It depends on the domain, team, and operational needs.

### Omnichannel / Headless Commerce
A backend exposed via APIs (catalog, pricing, inventory, cart, checkout, orders) that serves multiple front-end channels (web, mobile, physical store) consistently. The backend isn't tied to one interface.

### Kafka & Event-Driven Architecture
Apache Kafka = distributed event streaming platform (producers, consumers, topics) that publishes/stores/consumes events in a decoupled way.
> Not a database replacement, nor mandatory for all inter-service communication — valuable for decoupling, high volume, or event reprocessing needs.

---

## 4. Frontend vs. Backend

**Frontend:**
- UI & navigation
- Initial data capture/validation
- Displaying information
- Managing UI state
- Communicating with APIs

**Backend:**
- Receiving/processing requests
- Applying business rules
- Validating/transforming data
- Authentication & authorization
- Querying/updating databases
- Exposing APIs for clients/systems

**Client-Server Architecture:**
Client (browser/app) sends a **request** → Server (API/backend app) decides, validates, executes, and returns a **response**.

> Key idea: the client requests an operation; the server decides how to handle it, validates permissions, runs the logic, and returns a result.

---

## 5. APIs & HTTP

**What is an API?** A contract that lets a system expose operations/data for other programs to use. A web API contract typically includes: URL/endpoint, HTTP method, params/body, required headers, response format, and possible status codes/errors.

**HTTP Methods covered:**
| Method | Purpose |
|---|---|
| GET | Retrieve information |
| POST | Create a resource or start an operation |
| PUT | Replace a resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

**Request-Response Flow (8 steps):**
1. Client builds a request
2. Includes method, URL, headers, sometimes body
3. Network transports request to server
4. Server receives and routes the request
5. Backend validates input & permissions
6. Executes logic & queries dependencies
7. Responds with status, headers, body
8. Client interprets response & updates UI

**Example:**
```
REQUEST:
GET /api/products/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json

RESPONSE:
HTTP/1.1 200 OK
Content-Type: application/json
{ "id": 42, "name": "Producto de ejemplo" }
```
> 200 = success, but APIs can also respond with 201, 400, 401, 403, 404, or 500 depending on the outcome.

---

## 6. Node.js

**Definition:** A JavaScript runtime for running code outside the browser. Built for network applications using an async, event-driven model with non-blocking I/O.

> ❌ Node.js is **not** a programming language. JavaScript is the language; Node.js provides the runtime, system APIs, and tooling for server-side apps.

**Origin (brief):**
1. Emerged in the late 2000s around the V8 JS engine
2. Aimed to handle many concurrent connections without spawning an OS thread per connection
3. Took ideas from event-driven architectures and made them the runtime's core
4. Evolved from a web server runtime into a general platform: tooling, APIs, automation, real-time, backend services

**Problems Node.js helps solve:**
- Building HTTP servers/APIs in JavaScript
- Handling many concurrent connections with efficient I/O
- Sharing language/tooling between frontend & backend
- Real-time apps with persistent connections
- Building dev tools & automation
- Integrating third-party packages via a registry/manager

**Node.js vs Java vs Python:**
| | Node.js | Java | Python |
|---|---|---|---|
| Runs on | JS on V8 | Java on JVM | Python runtime |
| Common model | Event loop, async/non-blocking | Threads, pools, frameworks | Varies: async, processes, or threads |
| Typical strength | I/O-intensive, real-time, JS ecosystem | Large enterprise systems | Productivity, data, web services |
| Watch out for | Blocking the event loop with CPU-bound work | Config/concurrency complexity | Performance depends on implementation |
| Tooling | npm, Yarn, pnpm, Bun | Maven, Gradle, Spring | pip, Poetry, uv, Django/FastAPI |

> No tech is universally "better" — depends on the problem, team, and operational constraints.

---

## 7. The Single-Threaded Model

JS app code runs on a **main thread** tied to the event loop — that doesn't mean the whole process is single-threaded (I/O work happens outside via libuv/OS).

**Analogy:** A barista coordinating orders at a coffee shop — can take many orders and set slow tasks in motion, but if they stop to handle one complex order without yielding, everyone else waits.

**Advantage:** While I/O waits, the main thread can keep serving other requests.

**Risk:** A CPU-heavy operation blocks the event loop and delays every other request.

**CPU-bound work to avoid on the main thread:**
- Heavy synchronous crypto calculations
- Large image/file processing
- Infinite loops or very costly algorithms
- Excessive use of synchronous methods

> Node.js can use `worker_threads`, `cluster`, or multiple replicas when needed — "single-threaded" describes normal JS execution, not a ban on using multiple cores.

---

## 8. Tooling

### NVM (Node Version Manager)
Installs and switches between Node.js versions. Useful because:
- Different projects may need different versions
- Enables testing compatibility across versions
- Avoids relying on a single global install
- Makes it easier to reproduce the team's expected environment

**Key commands:**
```bash
nvm install --lts
nvm use --lts
nvm alias default 'lts/*'
nvm ls
node --version
```
> macOS/Linux/WSL → nvm-sh/nvm · Native Windows → nvm-windows (or WSL)

### NPM
Refers to three related things:
- **Site & ecosystem** — the website and package ecosystem
- **Registry** — where packages are published/downloaded
- **CLI** — command-line interface for dependencies & scripts

Helps with: creating/managing `package.json`, installing dependencies, locking exact versions (`package-lock.json`), running scripts, publishing/consuming packages.

**Examples:**
```bash
npm init -y
npm install express
npm install --save-dev nodemon
npm run start
npm audit
```

### Alternatives to NPM
| Tool | Focus | Best for |
|---|---|---|
| **npm** | Built-in, widely adopted | Course's base option |
| **Yarn** | Dev experience, workspaces, caching, consistency | Workspaces, teams already using it |
| **pnpm** | Shared store & links — saves space, faster installs | Monorepos, efficient installs |
| **Bun** | JS/TS runtime that also bundles a package manager, bundler, and test runner | Experimentation, fast tooling |

> Choice is made per-project — respect the existing lockfile, don't mix package managers without good reason.

---

## 9. Live Demo — Basic `server.js`

```javascript
const http = require('node:http');
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify({
    message: 'Hola desde Node.js',
    method: request.method,
    url: request.url
  }));
});
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor en http://127.0.0.1:3000');
});
```

Run with: `node server.js`

- Browser = client
- `server.js` = backend
- Browser sends a GET
- Node.js receives it via `request`
- Node.js responds via `response`
- Status, headers, and body make up the response

---

## 10. Wrap-Up Questions (self-check)

1. What's the difference between Node.js and JavaScript?
2. Why can a CPU-bound operation be problematic in Node.js?
3. What problem does NVM solve that NPM doesn't?

---

## 11. Homework — Set Up Dev Environment

1. Install NVM for your OS
2. Install an LTS version of Node.js via NVM
3. Verify Node.js and NPM from the terminal
4. Install VS Code or WebStorm
5. Create the `hola-node` project
6. Create `server.js` that responds to an HTTP request
7. Run the server and check it in the browser
8. Create a `README.md` with commands and explanation

**Submit on Canvas:**
- `hola-node` project folder/repo
- Working `server.js`
- `README.md`: OS, Node/NPM version, IDE, commands, evidence
- Terminal + browser screenshots (or repo link)

---

## 12. Key Takeaways

- ✅ Node.js is **not** a framework — it's a runtime
- ✅ JavaScript ≠ Node.js
- ✅ NPM ≠ Node.js and ≠ NVM
- ✅ Single-threaded doesn't prevent using multiple cores/processes
- ✅ CPU-bound work requires special design considerations
- ✅ A well-modularized monolith is a valid solution
- ✅ The server should never blindly trust client-provided data
- ✅ Documentation and reproducibility are part of professional work


## Class -2:
