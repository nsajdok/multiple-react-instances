import { useSharedQuery } from "shared-package";

export default function Home() {
  const { context, lazyQuery } = useSharedQuery();

  console.log({ context, lazyQuery });

  return (
    <main>
      <h1>Test (Pages Router)</h1>
      <p>
        If you see an error about <code>useContext</code> being null, Turbopack is resolving React from{" "}
        <code>shared-package/node_modules</code> instead of <code>app/node_modules</code>
      </p>
      <div style={{ marginTop: "2rem", padding: "1rem", background: "#f0f0f0", borderRadius: "4px" }}>
        <h2>What to check:</h2>
        <ul>
          <li>✅ If this page loads without errors, Turbopack resolved React/Apollo correctly</li>
          <li>
            ❌ If you see "Cannot read properties of null (reading 'useContext')", check <code>next.config.js</code>{" "}
            resolveAlias
          </li>
          <li>🔍 Check browser console for any module resolution warnings</li>
        </ul>
      </div>
      <div style={{ marginTop: "2rem", padding: "1rem", background: "#e8f4f8", borderRadius: "4px" }}>
        <h3>Router Comparison</h3>
        <p>
          <a href="/app-router">Go to App Router version</a>
        </p>
        <p>
          This is the Pages Router version at <code>/pages/index.tsx</code>
        </p>
      </div>
    </main>
  );
}
