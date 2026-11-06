# 🎭 Playwright Web + API Framework — OrangeHRM & Restful-Booker

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure_Report-FF5A5F)

A Playwright + TypeScript framework I built by hand, covering an HR web application and a booking REST API.

| Layer | Target | Coverage |
|---|---|---|
| **Web** | [OrangeHRM demo](https://opensource-demo.orangehrmlive.com) | Invalid login scenarios, creating an employee in the PIM module, visual regression of the logo and left navigation |
| **API** | [Restful-Booker](https://restful-booker.herokuapp.com) | Full booking CRUD: list IDs, get details, create (POST), update (PUT), partial update (PATCH), delete, with token authentication |

---

## ✨ Highlights

- **Global login setup:** a setup project logs in once and saves the session (`storageState`), so web tests start already logged in
- **Page Object Model + custom fixtures:** Login, Dashboard, Left navigation, PIM and User pages
- **Visual regression testing** with `toHaveScreenshot` baselines
- **Encrypted credentials:** AES encryption and decryption utility (`crypto-js`)
- **Multi-environment config:** `env-files/.env.<env>` is chosen through `ENV_NAME` with `cross-env`
- **Reusable API utilities:** token generation and request helpers in `CommonApiUtils`
- **Separate Playwright projects** for setup, web (Chromium, Firefox, WebKit) and API
- **Tags:** `@UAT`, `@UI`, `@API`, `@PIM`, `@VISUAL`
- **Reports:** Playwright HTML, a custom HTML reporter and Allure

---

## 📁 Project Structure

```
├── pages/                  # Page objects
├── fixtures/               # POM fixtures and hooks fixtures
├── tests/
│   ├── Global.Setup.ts     # Logs in once and saves the auth state
│   ├── web/                # Login, PIM and visual tests (+ screenshot baselines)
│   └── api/                # Restful-Booker CRUD tests
├── testdata/               # JSON test data per module
├── utils/                  # Common utils (encryption), API utils, custom reporter
├── env-files/              # Environment configs (public demo-site logins)
└── playwright.config.ts
```

---

## ⚙️ Setup & Run

```bash
git clone https://github.com/PrashantChhikara11/playwright-orangehrm-restfulbooker-framework.git
cd playwright-orangehrm-restfulbooker-framework
npm ci
npx playwright install
```

| Command | Runs |
|---|---|
| `npm run test_DEV` | All tests against the dev environment |
| `npm run test_Headed` | Chromium, with a visible browser |
| `npm run test_UAT` | `@UAT` tests |
| `npm run test_PIM` | PIM module tests |
| `npm run test_Visual` | Visual regression tests |
| `npm run test_api` | API tests only |
| `npm run test_Last_Failed` | Re-run only the tests that failed last time |
| `npm run test_mode_Ui` | Playwright UI mode |

---

**Author:** [Prashant Chhikara](https://github.com/PrashantChhikara11)
