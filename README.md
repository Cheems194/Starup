<h1>Starup</h1>

<p><strong>Starup</strong> is a modern web application built with 
<a href="https://nextjs.org/">Next.js</a>, integrating 
<a href="https://www.sanity.io/">Sanity.io</a> as a headless CMS and 
<a href="https://sentry.io/">Sentry</a> for error tracking. 
The project is styled using 
<a href="https://tailwindcss.com/">Tailwind CSS</a> and written in 
<a href="https://www.typescriptlang.org/">TypeScript</a>.</p>

<hr>

<h2>Features</h2>
<ul>
  <li>Server-side rendering and static site generation with Next.js</li>
  <li>Content management via Sanity.io</li>
  <li>Error monitoring with Sentry</li>
  <li>Utility-first styling with Tailwind CSS</li>
  <li>Type safety with TypeScript</li>
</ul>

<hr>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v14 or later)</li>
  <li>npm or yarn</li>
</ul>

<h3>Installation</h3>
<ol>
  <li><strong>Clone the repository:</strong><br><br>
    <pre><code>git clone https://github.com/Cheems194/Starup.git
cd Starup
    </code></pre>
  </li>

  <li><strong>Install dependencies:</strong><br><br>
    <pre><code>npm install
# or
yarn install
    </code></pre>
  </li>

  <li>Create a new file named .env.local in the root of your project and add the following content:
<br><br>

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=
AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.
</li>
  <li><strong>Run the development server:</strong><br><br>
    <pre><code>npm run dev
# or
yarn dev
    </code></pre>
  </li>

  <li><strong>Visit the application:</strong>
    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>
  </li>
</ol>

<hr>

<h2>Project Structure</h2>

<pre><code>Starup/
├── app/             # Application pages and routing
├── components/      # Reusable UI components
├── lib/             # Utility functions and libraries
├── public/          # Static assets
├── sanity/          # Sanity.io configuration and schemas
├── styles/          # Global styles and Tailwind CSS configuration
├── next.config.ts   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
└── README.md        # Project documentation
</code></pre>

<hr>

<h2>Acknowledgements</h2>
<ul>
  <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
  <li><a href="https://www.sanity.io/docs">Sanity.io Documentation</a></li>
  <li><a href="https://docs.sentry.io/">Sentry Documentation</a></li>
  <li><a href="https://tailwindcss.com/docs">Tailwind CSS Documentation</a></li>
</ul>
