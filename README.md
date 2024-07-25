This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

```

# Branching Strategy

## 1. Main Branches

- **`main` (or `production`):** This is the branch that holds the stable, production-ready code. Only fully tested and approved features and fixes are merged here.
- **`staging`:** This branch is used to deploy the application in a staging environment for final testing before it goes to production. It mirrors the production environment as closely as possible.
- **`qa`:** This branch is used for testing purposes by the QA team. It includes features and fixes that need thorough testing.
- **`release-vN.M`:** This branch is used to group features into a single release.

## 2. Supporting Branches

- **`feature/*`:** These branches are used for developing new features. Each feature should have its own branch. For example, `feature/user-authentication`.
- **`bugfix/*`:** These branches are used for fixing bugs. Each bug fix should have its own branch. For example, `bugfix/login-error`.
- **`hotfix/*`:** These branches are used for urgent fixes that need to go directly into production. For example, `hotfix/security-patch`.

## Workflow

### Development Cycle:

1. Create a `release-vN.M` branch from `main`.
2. Create a `feature` branch from `release-vN.M` to develop a new feature.
3. Once the feature is complete, create a pull request (PR) to merge the `feature` branch into `qa`.
4. The feature is tested in the `qa` branch. If issues are found, fix them in the `feature` branch and update the PR.

### QA to Staging:

1. Once the changes are approved, merge the `release-vN.M` branch into the `staging` branch.
2. Deploy the `staging` branch to the staging environment for final testing.

### Staging to Production:

1. After the final tests in the staging environment, merge the `release-vN.M` branch into the `main` (or `production`) branch.
2. Deploy the `main` branch to the production environment.

### Hotfixes:

1. Create a `hotfix` branch from `main` for urgent fixes.
2. Merge the `hotfix` branch back into `main` after the fix is verified.
3. Optionally, merge the `hotfix` branch into `qa` and `staging` to keep these branches updated.

## Example Branch Naming

- `main`
- `staging`
- `qa`
- `release-v0.1`
- `feature/add-user-auth`
- `feature/update-dashboard`
- `bugfix/fix-login-error`
- `hotfix/patch-vulnerability`
