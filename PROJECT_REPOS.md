# Portfolio Repository Audit

Last audited: 2026-09-06

This catalog records which portfolio claims can be verified from Abdulkareem's GitHub account, which deployments were checked, and which local projects still need repositories.

## Verified Portfolio Repositories

| Portfolio project | Matching repository | Visibility | Verification result |
| --- | --- | --- | --- |
| Portfolio | <https://github.com/abdulkareem424/portfolio> | Public | React/Vite/Tailwind portfolio with Express contact API and Docker support |
| Tabeley | <https://github.com/abdulkareem424/tabeley-mvp> | Private | Flutter/Riverpod client, Laravel 12/Sanctum API, PostgreSQL, Docker, and reservation workflows verified from source |
| ALC Orientation Registration | <https://github.com/abdulkareem424/alc-orientation-registration> | Private | Node.js registration, PostgreSQL plus JSON fallback, Telegram, QR, PDF, admin, and attendance workflows verified from source |
| Physio Center Management | <https://github.com/abdulkareem424/clinic> | Private | Flutter desktop UI and Laravel 13 development API foundation verified; persistence and deployment remain planned work |
| Alhallak Store Prices | <https://github.com/abdulkareem424/alhallak-prices-live> | Public | Static HTML/CSS/JS price board with owner-only edit and exchange-rate GitHub Actions verified |
| Geneva International University | <https://github.com/abdulkareem424/geneeua-university> | Public | Responsive multi-page HTML/CSS/JS university portal verified |
| WISC Assessment Workflow | <https://github.com/abdulkareem424/wisc4test> | Public | Flutter prototype with participant, subtest, timer, answer, JSON asset, and SQLite session workflows verified |

Private repository links work only for collaborators who have access. The portfolio labels them as private instead of presenting them as publicly reviewable source.

## Verified Live Deployments

| Project | URL | Result |
| --- | --- | --- |
| Alhallak Store Prices | <https://abdulkareem424.github.io/alhallak-prices-live/> | Working and matches the repository |
| Geneva International University | <https://abdulkareem424.github.io/geneeua-university/> | Working and matches the repository |

`https://alc-architecture.com/` is a working ALC-branded website, but it does not currently expose the orientation registration application found in the repository. It is therefore not labeled as that project's live demo.

## Repository Gaps

No matching repository was found for these portfolio entries after reviewing repository names, descriptions, languages, file trees, and account-wide code search results:

- Acadia E-commerce Website
- Image Editor Desktop App
- Physio Center Node API
- Simple HTTP Web Server
- Data Mining Notebook

These entries remain in the portfolio with `Repository Pending` labels and internal project details only. Publish each source tree only after checking it for credentials, personal data, generated dependencies, and large binary files.

## Reviewed But Not Added

- `alhallak-prices`: older/duplicate price-board repository; the live repository is already featured.
- `registration_page`: small standalone front-end form with limited portfolio value.
- `flutter`: small Flutter/BLoC exercise rather than a complete product.
- `mostaejl`: forked repository, so it is not presented as original portfolio work.
- `WP2_PROJECT_AIU`: README-only repository without enough implementation evidence.

## Recommended Evidence Improvements

1. Add concise READMEs, setup instructions, test commands, architecture notes, and real screenshots to the strongest repositories.
2. Review private repositories for secrets and personal data before considering public visibility.
3. Remove development fallback credentials from the ALC app before any public release.
4. Finish database persistence in the clinic API before describing it as a complete management system.
5. Publish the five local-source projects in focused repositories only when their code and documentation are ready for employer review.
