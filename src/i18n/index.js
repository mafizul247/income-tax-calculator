import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            contact: "Contact",
            welcome: "Welcome to Tax Calculator",
            tax: "Tax",
            homeTitle: "Tax Calculator - Home",

            footer_desc: "Simple tax calculator for everyone.",
            quick_links: "Quick Links",
            settings: "Settings",
            rights: "All rights reserved",
            author_name: "By Mafizul Islam John",

            annual_salary: "Annual Salary",
            tax_exemption: "Tax Exemption",
            taxable_income: "Taxable Income",
            total_tax: "Total Tax",
            monthly_tax: "Monthly Tax",
            min_tax_final: "Minimum Tax",
            min_tax: "Minimum Tax (City Based)",
            tax_result: "Your Tax Calculator Result",
            tax_rebat: "Tax Rebate",
            net_tax: "Net Tax",
            after_rebat: "Tax After Rebate",
            investment_amount: "Investment Amount",
            gross_salary: "Gross Salary",

            tax_title: "Tax Calculator",
            tax_category: "Tax Payer Category",
            year_2025_26: "2025-2026",
            year_2026_27: "2026-2027",
            disability_child: "Disabled Child",
            yes: "Yes",
            no: "No",
            child_count: "Number of Disabled Children",
            financial_year: "Financial Year",
            select_category: "Select Category",
            general: "General Person",
            female: "Female / Senior Citizen (65+ age)",
            disabled: "Disable Person / Thired Gender",
            freedom: "Gazetted Freedom Fighter",

            city: "City Corporation",
            select_city: "Select City",
            dhaka: "Dhaka / Chattagram City Corporation",
            other: "Other City Corporation",
            rural: "Area Outside City Corporation",

            investment_entry: "Entry Actual Investment",
            salary: "Annual Gross Income",
            salary_placeholder: "Enter Gross Income",

            submit: "Calculate Tax",
        }
    },
    bn: {
        translation: {
            home: "হোম",
            about: "আমাদের সম্পর্কে",
            contact: "যোগাযোগ",
            welcome: "ট্যাক্স ক্যালকুলেটরে স্বাগতম",
            tax: "ট্যাক্স",
            homeTitle: "ট্যাক্স ক্যালকুলেট - হোম",

            footer_desc: "সবার জন্য সহজ ট্যাক্স ক্যালকুলেটর।",
            quick_links: "দ্রুত লিংক",
            settings: "সেটিংস",
            rights: "সর্বস্বত্ব সংরক্ষিত",
            author_name: "মফিজুল ইসলাম জন কর্তৃক",

            annual_salary: "বার্ষিক মোট বেতন",
            tax_exemption: "কর অব্যাহতি",
            taxable_income: "করযোগ্য আয়",
            total_tax: "মোট কর",
            monthly_tax: "মাসিক কর",
            min_tax: "ন্যূনতম কর (এলাকা অনুযায়ী)",
            min_tax_final: "ন্যূনতম কর",
            tax_result: "আপনার ট্যাক্স ক্যালকুলেটরের ফলাফল",
            tax_rebat: "কর রেয়াত",
            net_tax: "নেট কর",
            after_rebat: "কর রেয়াত দেওয়ার পর কর",
            investment_amount: "বিনিয়োগের পরিমাণ",
            gross_salary: "মোট বেতন",

            tax_title: "ট্যাক্স ক্যালকুলেটর",
            tax_category: "কর প্রদানকারী শ্রেণী",
            year_2025_26: "২০২৫-২০২৬",
            year_2026_27: "২০২৬-২০২৭",
            disability_child: "প্রতিবন্ধী সন্তান",
            yes: "হ্যাঁ",
            no: "না",
            child_count: "প্রতিবন্ধী সন্তানের সংখ্যা",
            financial_year: "অর্থবছর",
            select_category: "শ্রেণী নির্বাচন করুন",
            general: "সাধারণ ব্যক্তি",
            female: "মহিলা / প্রবীণ নাগরিক (৬৫+ বয়স)",
            disabled: "প্রতিবন্ধী ব্যক্তি / তৃতীয় লিঙ্গ",
            freedom: "গেজেটেড মুক্তিযোদ্ধা",

            city: "সিটি কর্পোরেশন",
            select_city: "শহর নির্বাচন করুন",
            dhaka: "ঢাকা / চট্টগ্রাম সিটি কর্পোরেশন",
            other: "অন্যান্য শহর কর্পোরেশন",
            rural: "সিটি কর্পোরেশনের বাইরের এলাকা",

            investment_entry: "এন্ট্রি প্রকৃত বিনিয়োগ",
            salary: "বার্ষিক মোট আয়",
            salary_placeholder: "আপনার বার্ষিক মোট আয় লিখুন",

            submit: "ট্যাক্স হিসাব করুন",


        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;