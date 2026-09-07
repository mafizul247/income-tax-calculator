import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            contact: "Contact",
            welcome: "Bangladesh Income Tax Calculator (FY 2025-2026 & 2026-2027)",
            tax: "Tax",
            homeTitle: "Income Tax Calculator Bangladesh (FY 2025-2026 & 2026-2027) | Tax Calculator BD",

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

            // ---------------- SEO / on-page content ----------------
            seo_subtitle: "Free online income tax calculator for Bangladesh — supports both FY 2025-2026 and FY 2026-2027 NBR tax slabs, investment rebate, and city-based minimum tax. Available in Bangla and English.",

            benefits_title: "Why use this tax calculator?",
            benefit_1: "Covers both FY 2025-2026 and FY 2026-2027 NBR tax rules — pick the year and get the exact figure.",
            benefit_2: "Automatically applies the tax-free threshold for General, Female/Senior Citizen, Disabled, and Gazetted Freedom Fighter categories.",
            benefit_3: "Calculates investment rebate and city-based minimum tax (Dhaka/Chattagram, other city, or rural area) automatically.",
            benefit_4: "100% free, no signup, and works in both বাংলা and English.",

            slabs_title: "Bangladesh Income Tax Slabs",
            slabs_2025_26_title: "NBR Tax Slab — FY 2025-2026",
            slabs_2026_27_title: "NBR Tax Slab — FY 2026-2027",
            slab_col_category: "Category",
            slab_col_limit: "Tax-Free Income Limit",
            slab_col_rate: "Tax Rate (on income above the limit)",
            slab_rate_desc_2025: "5% → 10% → 15% → 20% → 25% → 30% (step-by-step slabs)",
            slab_rate_desc_2026: "10% → 15% → 20% → 25% → 30% (step-by-step slabs)",

            faq_title: "Frequently Asked Questions (FAQ)",
            faq_q1: "What is the tax-free income limit for an individual taxpayer in Bangladesh?",
            faq_a1: "For FY 2026-2027, the tax-free limit is ৳3,75,000 for a general taxpayer, ৳4,25,000 for a woman or a citizen aged 65+, ৳5,00,000 for a person with a disability, and ৳5,25,000 for a gazetted war-wounded freedom fighter. For FY 2025-2026, the limits were ৳3,50,000, ৳4,00,000, ৳4,75,000, and ৳5,00,000 respectively.",
            faq_q2: "How does this calculator compute income tax?",
            faq_a2: "It applies the NBR's step-by-step tax slabs (0%, then 5% or 10%, 15%, 20%, 25%, 30%) to your taxable income after exemption, then deducts your investment rebate and applies the city-based minimum tax to get your final net tax.",
            faq_q3: "How is the investment rebate calculated?",
            faq_a3: "The rebate equals whichever is lower: 15% of your actual investment, or 3% of your taxable income.",
            faq_q4: "What is the minimum tax by city corporation area?",
            faq_a4: "Minimum tax is ৳5,000 in Dhaka and Chattagram City Corporation, ৳4,000 in other city corporations, and ৳3,000 outside city corporation areas.",
            faq_q5: "Is this tax calculator free to use?",
            faq_a5: "Yes, this income tax calculator is completely free with no registration required.",
        }
    },
    bn: {
        translation: {
            home: "হোম",
            about: "আমাদের সম্পর্কে",
            contact: "যোগাযোগ",
            welcome: "বাংলাদেশ আয়কর ক্যালকুলেটর (অর্থবছর ২০২৫-২৬ ও ২০২৬-২৭)",
            tax: "ট্যাক্স",
            homeTitle: "আয়কর ক্যালকুলেটর বাংলাদেশ (অর্থবছর ২০২৫-২৬ ও ২০২৬-২৭) | Tax Calculator BD",

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

            // ---------------- SEO / on-page content ----------------
            seo_subtitle: "বাংলাদেশের সবচেয়ে সহজ ও বিনামূল্যে অনলাইন আয়কর ক্যালকুলেটর — FY 2025-2026 ও FY 2026-2027 উভয় অর্থবছরের NBR কর স্ল্যাব, বিনিয়োগ রেয়াত এবং সিটি ভিত্তিক ন্যূনতম কর হিসাব সমর্থন করে। বাংলা ও ইংরেজি উভয় ভাষায় ব্যবহারযোগ্য।",

            benefits_title: "কেন এই আয়কর ক্যালকুলেটর ব্যবহার করবেন?",
            benefit_1: "FY 2025-2026 ও FY 2026-2027 — উভয় অর্থবছরের NBR নিয়ম অনুযায়ী হিসাব করে, সঠিক অর্থবছর বেছে নিলেই নির্ভুল ফলাফল পাবেন।",
            benefit_2: "সাধারণ, নারী/প্রবীণ নাগরিক, প্রতিবন্ধী ও গেজেটেড মুক্তিযোদ্ধা — প্রতিটি শ্রেণীর করমুক্ত আয়ের সীমা স্বয়ংক্রিয়ভাবে প্রয়োগ করে।",
            benefit_3: "বিনিয়োগ রেয়াত ও সিটি কর্পোরেশন অনুযায়ী (ঢাকা/চট্টগ্রাম, অন্যান্য শহর বা গ্রামাঞ্চল) ন্যূনতম কর স্বয়ংক্রিয়ভাবে হিসাব করে।",
            benefit_4: "সম্পূর্ণ বিনামূল্যে, কোনো রেজিস্ট্রেশনের প্রয়োজন নেই, এবং বাংলা ও ইংরেজি উভয় ভাষায় ব্যবহার করা যায়।",

            slabs_title: "বাংলাদেশের আয়কর স্ল্যাব",
            slabs_2025_26_title: "NBR কর স্ল্যাব — অর্থবছর ২০২৫-২০২৬",
            slabs_2026_27_title: "NBR কর স্ল্যাব — অর্থবছর ২০২৬-২০২৭",
            slab_col_category: "শ্রেণী",
            slab_col_limit: "করমুক্ত আয়ের সীমা",
            slab_col_rate: "কর হার (সীমার অতিরিক্ত আয়ের উপর)",
            slab_rate_desc_2025: "৫% → ১০% → ১৫% → ২০% → ২৫% → ৩০% (ধাপে ধাপে স্ল্যাব)",
            slab_rate_desc_2026: "১০% → ১৫% → ২০% → ২৫% → ৩০% (ধাপে ধাপে স্ল্যাব)",

            faq_title: "সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)",
            faq_q1: "বাংলাদেশে ব্যক্তি করদাতার করমুক্ত আয়ের সীমা কত?",
            faq_a1: "FY ২০২৬-২০২৭ অর্থবছরে সাধারণ করদাতার জন্য করমুক্ত আয়ের সীমা ৳৩,৭৫,০০০, নারী/৬৫+ বয়সী ব্যক্তির জন্য ৳৪,২৫,০০০, প্রতিবন্ধী ব্যক্তির জন্য ৳৫,০০,০০০ এবং গেজেটেড মুক্তিযোদ্ধার জন্য ৳৫,২৫,০০০। FY ২০২৫-২০২৬ অর্থবছরে এই সীমা ছিল যথাক্রমে ৳৩,৫০,০০০, ৳৪,০০,০০০, ৳৪,৭৫,০০০ ও ৳৫,০০,০০০।",
            faq_q2: "এই ক্যালকুলেটর কীভাবে আয়কর হিসাব করে?",
            faq_a2: "বার্ষিক মোট বেতন থেকে NBR-এর নির্ধারিত স্ল্যাব অনুযায়ী ধাপে ধাপে (০%, ৫% বা ১০%, ১৫%, ২০%, ২৫%, ৩০%) কর হিসাব করে, তারপর বিনিয়োগ রেয়াত বাদ দিয়ে এবং শহরভিত্তিক ন্যূনতম কর প্রয়োগ করে চূড়ান্ত নেট কর নির্ণয় করা হয়।",
            faq_q3: "বিনিয়োগ রেয়াত কীভাবে হিসাব করা হয়?",
            faq_a3: "প্রকৃত বিনিয়োগের ১৫% অথবা করযোগ্য আয়ের ৩% — এই দুইটির মধ্যে যেটি কম, সেটিই বিনিয়োগ রেয়াত হিসেবে গণ্য হয়।",
            faq_q4: "সিটি কর্পোরেশন এলাকাভেদে ন্যূনতম কর কত?",
            faq_a4: "ঢাকা ও চট্টগ্রাম সিটি কর্পোরেশনে ন্যূনতম কর ৳৫,০০০, অন্যান্য সিটি কর্পোরেশনে ৳৪,০০০ এবং সিটি কর্পোরেশনের বাইরের এলাকায় ৳৩,০০০।",
            faq_q5: "এই ক্যালকুলেটর ব্যবহার করতে কোনো টাকা লাগে কি?",
            faq_a5: "না, এই আয়কর ক্যালকুলেটরটি সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায় এবং কোনো রেজিস্ট্রেশনের প্রয়োজন নেই।",
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "bn", // default language — primary audience is Bangladesh
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;