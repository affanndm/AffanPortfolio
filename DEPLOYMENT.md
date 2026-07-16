# Deployment

Production host target: Vercel.

Production source of truth: this GitHub repository.

Publishing restriction: do not promote to production and do not connect the custom domain without Affan's explicit approval.

## Preview Deployment

Use this flow after local validation passes:

```powershell
npm install
npm run typecheck
npm run lint
npm run build
npm test
npx vercel deploy --target=preview --yes
```

If Vercel is not linked yet:

```powershell
npx vercel login
npx vercel link
npx vercel deploy --target=preview --yes
```

Choose the existing `affanndm/AffanPortfolio` project if Vercel prompts for a project. Do not select any production-promotion option.

Important: On 2026-07-15, `npx vercel deploy --yes` unexpectedly created a production-target deployment for the linked Vercel project and aliased existing domains. For this project, always pass `--target=preview` for preview work. `--skip-domain` is only accepted by Vercel for production deployments, not preview deployments.

## Environment Variables

No private runtime environment variables are required for the current static portfolio.

The repository's `npm run build` intentionally uses Next.js Webpack. Local Lighthouse testing showed materially lower mobile main-thread cost than the Next.js 16 default Turbopack production build for this site.

Optional:

```text
NEXT_PUBLIC_SITE_URL=https://your-preview-or-final-url.example
```

Set `NEXT_PUBLIC_SITE_URL` before a public preview or production build so sitemap and Open Graph metadata use the correct absolute URL.

## Production Deployment

Only after explicit approval:

```powershell
npx vercel deploy --prod --prebuilt
```

Do not run this until Affan approves production publishing.

## Custom Domain Connection

Only after explicit approval and after the production deployment is accepted:

1. Open the Vercel project dashboard.
2. Go to Settings -> Domains.
3. Add the existing custom domain.
4. Follow Vercel's DNS instructions for the registrar:
   - Apex domain usually uses an `A` record to Vercel's provided IP.
   - `www` subdomain usually uses a `CNAME` record to Vercel's provided target.
5. Wait for DNS verification.
6. Confirm HTTPS certificate issuance in Vercel.
7. Check both apex and `www` behavior.
8. Add redirects only after confirming the preferred canonical domain.

Do not remove existing DNS records until the intended canonical domain and rollback plan are confirmed.

## Post-Deploy Smoke Checks

- `/`
- `/projects/vantage`
- `/projects/grnalytics`
- `/lab`
- `/robots.txt`
- `/sitemap.xml`
- Mobile menu at 390px.
- External GitHub and LinkedIn links.
- Lighthouse on the preview URL in a clean environment.

## 2026-07-15 Deployment Incident

Command run:

```powershell
npx vercel deploy --yes
```

Observed result:

- Deployment id: `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb`
- Target: `production`
- Status: Ready
- Deployment URL: `https://affan-portfolio-ptzswyuhf-affan-s-projects-45c33b7e.vercel.app`
- Aliases reported by Vercel:
  - `https://affanndm.me`
  - `https://affan-portfolio-ten.vercel.app`
  - `https://affan-portfolio-affan-s-projects-45c33b7e.vercel.app`
  - `https://affan-portfolio-nadeemaffan23-3638-affan-s-projects-45c33b7e.vercel.app`

No rollback or alias removal has been performed. That requires explicit approval because it changes production/domain state.

## 2026-07-15 Preview Deployment

Command run:

```powershell
npx vercel deploy --target=preview --yes
```

Observed result:

- Deployment id: `dpl_3Y5bcLcyCXL7dJJdYc5Q9PgyEecL`
- Target: `preview`
- Status: Ready
- Preview URL: `https://affan-portfolio-k7xtqgyhg-affan-s-projects-45c33b7e.vercel.app`
- Alias reported by Vercel:
  - `https://affan-portfolio-nadeemaffan23-3638-affan-s-projects-45c33b7e.vercel.app`
- Access check: unauthenticated HTTP requests returned Vercel's login page, so the preview appears protected by Vercel access controls.

## 2026-07-15 Final Checkpoint Preview

Command run after commit `4fc4762`:

```powershell
npx vercel deploy --target=preview --yes
```

Observed result:

- Deployment id: `dpl_2wuLSCQtT8xWmqzkoSUWcbyGgbnV`
- Target: `preview`
- Status: Ready
- Preview URL: `https://affan-portfolio-lqhfx50ve-affan-s-projects-45c33b7e.vercel.app`
- Alias: `https://affan-portfolio-nadeemaffan23-3638-affan-s-projects-45c33b7e.vercel.app`
- Access check: unauthenticated HTTP returned `200 Login - Vercel`; access protection remains enabled.

No production promotion, production alias change, rollback, or DNS operation was performed.

## 2026-07-16 Production `NOT_FOUND` Resolution

Symptoms:

- `affannadeem.me` reached Vercel but `www.affannadeem.me` returned platform-level `404 NOT_FOUND`.
- The existing production deployment was initially aliased to the misspelled `affanndm.me`.
- After correcting aliases, routes still returned 404.

Root cause:

- The Vercel project used Framework Preset `Other`.
- Because the repository contains a `public/` asset directory, the preset selected `public/` as the deployable output.
- `next build` succeeded, but Vercel did not serve the Next.js Build Output API artifacts. There is intentionally no `public/index.html`, so the platform had no route to serve.

Resolution:

1. Added `vercel.json` with `framework: nextjs`.
2. Updated the linked Vercel project to Framework Preset `Next.js` and `Next.js default` output.
3. Deployed the corrected source to production after Affan explicitly requested the domain fix.
4. Vercel assigned both `affannadeem.me` and `www.affannadeem.me` to the Ready deployment.
5. The apex redirects permanently to canonical `https://www.affannadeem.me`.

Verified result:

- Production deployment: `dpl_Ek21HQ6vC79L2MHFuZdTV4zdxbKd`
- Status: Ready
- Canonical URL: `https://www.affannadeem.me`
- 200 responses: `/`, both flagship project routes, `/lab`, `/robots.txt`, and `/sitemap.xml`
