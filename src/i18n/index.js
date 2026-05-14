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
            min_tax: "Minimum Tax (City Based)",
            tax_result: "Your Tax Calculator Result",

            tax_title: "Tax Calculator",
            tax_category: "Tax Category",
            select_category: "Select Category",
            general: "General Person",
            female: "Female / Senior Citizen",
            disabled: "Disable Person",
            freedom: "Gazetted Freedom Fighter",

            city: "City Corporation",
            select_city: "Select City",
            dhaka: "Dhaka / Chattagram City",
            other: "Other City",
            rural: "Thana City",

            salary: "Annual Gross Salary",
            salary_placeholder: "Enter your salary",

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
            tax_result: "আপনার ট্যাক্স ক্যালকুলেটরের ফলাফল",

            tax_title: "ট্যাক্স ক্যালকুলেটর",
            tax_category: "কর শ্রেণী",
            select_category: "শ্রেণী নির্বাচন করুন",
            general: "সাধারণ ব্যক্তি",
            female: "মহিলা / প্রবীণ নাগরিক",
            disabled: "প্রতিবন্ধী ব্যক্তি",
            freedom: "গেজেটেড মুক্তিযোদ্ধা",

            city: "সিটি কর্পোরেশন",
            select_city: "শহর নির্বাচন করুন",
            dhaka: "ঢাকা / চট্টগ্রাম সিটি",
            other: "অন্যান্য শহর",
            rural: "থানা শহর",

            salary: "বার্ষিক মোট বেতন",
            salary_placeholder: "আপনার বেতন লিখুন",

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