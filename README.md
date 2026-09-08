# 🧮 Tax Calculator Bangladesh (FY 2025–2026 to 2030–2031)

A modern, responsive web application to calculate individual income tax in Bangladesh, covering every NBR financial-year rule-set from FY 2025–2026 through FY 2030–2031 — sourced directly from the official **আয়কর পরিপত্র ২০২৬-২০২৭** circular. Built with React, Tailwind CSS, and DaisyUI, with multi-language support (English & বাংলা) and SEO optimized for Bangladesh search.

---

## 🌐 Live Demo

👉 https://tax-calculator-bd.netlify.app/

---

## 💻 GitHub Repository

👉 https://github.com/mafizul247/income-tax-calculator.git

---

## ✨ Features

- 🇧🇩 Covers **five financial-year rule-sets**, selectable from one dropdown:
  - FY 2025–2026 (older, city-based minimum tax)
  - FY 2026–2027 & FY 2027–2028 (identical rules)
  - FY 2028–2029 & FY 2029–2030 (identical rules)
  - FY 2030–2031
- 🧾 Automatic **category-based tax-free threshold**: General, Female/Senior Citizen (65+), Disabled/Third-Gender, Gazetted Freedom Fighter/July Fighter — merged categories and updated limits per the FY 2026-2027 circular
- 👶 **Disabled dependent benefit**: +৳50,000 to the threshold per dependent (FY 2026-2027 onward)
- 🆕 **New taxpayer toggle**: minimum tax drops to ৳1,000 for a first-time return (FY 2026-2027 onward)
- 💰 **Investment rebate**, correct per year:
  - FY 2025-2026: lowest of 15% of investment, 3% of income, or ৳10,00,000
  - FY 2026-2027 onward: lowest of 10% of investment, 3% of income, or ৳7,50,000 (per the Finance Act 2026 amendment to section 78 of the Income Tax Act, 2023)
- 🏙️ **Minimum tax**:
  - FY 2025-2026: area-based (৳5,000 Dhaka/Chattagram, ৳4,000 other city, ৳3,000 rural)
  - FY 2026-2027 onward: flat ৳5,000 (or ৳1,000 for a new taxpayer), regardless of city
- ⚠️ **Wealth surcharge disclaimer**: clearly explains the separate 10%–35% net-wealth surcharge (FY 2026-2031) that this calculator does *not* compute, so high-net-worth users aren't misled by the result
- 🌐 Multi-language support (English & বাংলা), defaulting to বাংলা for the primary Bangladesh audience
- 🌙 Light & Dark Mode
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- ⚡ Fast performance with Vite
- 🎯 Clean UI using Tailwind CSS & DaisyUI
- 📄 Official **NBR circular (PDF)** bundled in-app and downloadable from the footer
- 🔍 SEO: Bangla-first meta tags, `WebApplication` + `FAQPage` structured data, on-page slab reference tables for all five periods, `robots.txt`/`sitemap.xml`
- 🧾 Tax breakdown shown per calculation:
  - Annual Salary
  - Tax Exemption
  - Taxable Income
  - Total Tax (before rebate)
  - Tax Rebate
  - Tax After Rebate
  - Minimum Tax
  - Net Tax
  - Monthly Tax

---

## 🛠️ Technologies Used

- React.js
- Vite
- Tailwind CSS
- DaisyUI
- React Router
- i18next (for multi-language)

---

## 📊 How It Works

1. Select your **Financial Year** (newest first: 2030–2031 → 2028–29 & 29–30 → 2026–27 & 27–28 → 2025–2026)
2. Select your **Tax Payer Category**
   - General Taxpayer
   - Female Taxpayer / Senior Citizen (65+)
   - Person with Disability / Third-Gender Taxpayer
   - Gazetted War-Wounded Freedom Fighter / July Fighter
3. For FY 2025–2026 only: select your **City Corporation** (Dhaka/Chattagram, Other City, or Rural)
4. For FY 2026–2027 onward: optionally toggle **Disabled Dependent(s)** and/or **New Taxpayer**
5. Enter your **Investment Amount** (optional) and **Annual Gross Salary**
6. Click **Calculate Tax**

👉 The app shows the full breakdown: exemption, taxable income, tax before rebate, rebate, tax after rebate, minimum tax, net tax, and monthly tax.

---

## 🧮 Calculation Engine

All tax logic lives in a single source of truth: `src/utilitis/taxEngine.js`. Every threshold, slab, rebate rate/ceiling, and minimum-tax rule is commented with the exact circular section and page it comes from, so future rule changes can be traced and updated confidently.

---

## 🌍 Multi-language Support

- Default: বাংলা (Bangla)
- Toggle: বাংলা ⇄ English

Powered by i18next

---

## 🎨 UI Features

- DaisyUI components
- Clean card-based design
- Responsive layout
- Smooth user experience

---

## 📌 Future Improvements

- 📄 PDF tax report download (of the *calculated result*, not just the circular)
- 💾 Save user data (localStorage)
- 📊 Graph/Chart visualization
- 🔐 User login system
- 📱 PWA (installable app)
- 🧮 Optional net-wealth surcharge calculator (would require collecting net-wealth statement inputs)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Developer

**Mafizul Islam John**
GitHub: https://github.com/mafizul247
Email: mafizul247@gmail.com
Phone: +8801711337820

---

⭐ If you like this project, give it a star on GitHub!