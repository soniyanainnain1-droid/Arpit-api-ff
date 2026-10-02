# FREE ARPIT API HUB

Mobile-friendly API dashboard with access-code gate, browser-local key generator, and a Vercel serverless demo endpoint.

## Deploy on GitHub + Vercel (phone-friendly)

1. Create a GitHub repository named `free-arpit-api-hub`.
2. Upload all files/folders from this project. Keep `index.html`, `package.json`, `.gitignore`, and the `api` folder at the repository root.
3. Sign in to Vercel using GitHub and choose **Add New → Project**.
4. Import `free-arpit-api-hub`. Framework preset: **Other**. Build command and output directory can remain blank.
5. In Project Settings → Environment Variables, add `HUB_ACCESS_CODE` with a private code of your choice. Apply to Production (and Preview if desired).
6. Deploy. Open the Vercel URL and enter the access code.

## How to test

- In the dashboard, create a key.
- Click **Try demo**. The `/api/demo` endpoint should return JSON with `ok: true`.
- To test manually, send `GET /api/demo` with header `x-api-key: fah_<32 lowercase hex chars>`.

## Important security and scope notes

- The access-code endpoint is a simple gate, not a full user session system. It verifies the code but does not issue a session token; the page UI gate is client-side. Protect actual sensitive data and admin operations with proper server-side authentication before production use.
- Generated demo keys are stored in the browser's localStorage and are format-checked by the sample endpoint. They are not centrally registered, revocable, or suitable for protecting valuable services.
- Do not put third-party provider secrets in `index.html` or any client-side JavaScript. Store them as Vercel Environment Variables and call providers only from serverless functions you control.
- Third-party APIs may require permission, billing, authentication, and may block browser requests with CORS. Use only APIs you are authorized to access.
