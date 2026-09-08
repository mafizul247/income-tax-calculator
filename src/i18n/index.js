import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            contact: "Contact",
            welcome: "Bangladesh Income Tax Calculator (FY 2025-2026 to 2030-2031)",
            tax: "Tax",
            homeTitle: "Income Tax Calculator Bangladesh (FY 2025-26 to 2030-31) | Tax Calculator BD",

            footer_desc: "Simple tax calculator for everyone.",
            quick_links: "Quick Links",
            settings: "Settings",
            resources: "Resources",
            nbr_circular_link: "NBR Income Tax Circular 2026-2027 (PDF)",
            rights: "All rights reserved",
            author_name: "By Mafizul Islam John",

            annual_salary: "Annual Salary",
            tax_exemption: "Tax Exemption",
            taxable_income: "Taxable Income",
            total_tax: "Total Tax",
            monthly_tax: "Monthly Tax",
            min_tax_final: "Minimum Tax",
            tax_result: "Your Tax Calculator Result",
            tax_rebat: "Tax Rebate",
            net_tax: "Net Tax",
            after_rebat: "Tax After Rebate",
            investment_amount: "Investment Amount",
            gross_salary: "Gross Salary",

            tax_title: "Tax Calculator",
            tax_category: "Tax Payer Category",

            // ---- Financial year dropdown labels (shown newest first) ----
            year_2030_31: "2030-2031",
            year_2028_29_29_30: "2028-2029 & 2029-2030",
            year_2026_27_27_28: "2026-2027 & 2027-2028",
            year_2025_26: "2025-2026",

            disability_child: "Disabled Dependent",
            yes: "Yes",
            no: "No",
            child_count: "Number of Disabled Dependents",
            new_taxpayer_label: "New Taxpayer (first-ever return)?",
            financial_year: "Financial Year",
            select_category: "Select Category",

            // Category labels used in the dropdown (current/merged wording, per
            // the NBR circular effective FY 2026-2027 onward)
            general: "General Taxpayer",
            female: "Female Taxpayer / Senior Citizen (65+)",
            disabled: "Person with Disability / Third-Gender Taxpayer",
            freedom: "Gazetted War-Wounded Freedom Fighter / July Fighter",

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
            seo_subtitle: "Free online income tax calculator for Bangladesh — covers every NBR tax slab from FY 2025-2026 through FY 2030-2031, investment rebate, and minimum tax. Available in Bangla and English.",

            benefits_title: "Why use this tax calculator?",
            benefit_1: "Covers all five NBR rule-sets in effect from FY 2025-2026 through FY 2030-2031 — pick the year and get the exact figure.",
            benefit_2: "Automatically applies the correct tax-free threshold for General, Female/Senior Citizen, Disabled/Third-Gender, and Freedom Fighter/July Fighter categories for the selected year.",
            benefit_3: "Calculates investment rebate (10% of investment or 3% of income, capped at ৳7,50,000 from FY 2026-2027 onward) and minimum tax automatically.",
            benefit_4: "100% free, no signup, and works in both বাংলা and English.",

            slabs_title: "Bangladesh Income Tax Slabs (FY 2025-2026 to 2030-2031)",
            slabs_2025_26_title: "NBR Tax Slab — FY 2025-2026",
            slabs_2026_27_title: "NBR Tax Slab — FY 2026-2027 & FY 2027-2028",
            slabs_2028_29_title: "NBR Tax Slab — FY 2028-2029 & FY 2029-2030",
            slabs_2030_31_title: "NBR Tax Slab — FY 2030-2031",

            col_total_income: "Total Income",
            col_tax_rate: "Tax Rate",
            slab_first: "First ৳{{amount}}",
            slab_next: "Next ৳{{amount}}",
            slab_remaining: "On the remaining amount",

            category_exemptions_title: "Tax-free income limit by category",
            category_point_general: "General taxpayer: ৳{{amount}}",
            category_point_female: "Female taxpayer, and a taxpayer aged 65 or above: ৳{{amount}}",
            category_point_disabled: "Third-gender taxpayer, and a taxpayer with a disability: ৳{{amount}}",
            category_point_freedom: "Gazetted war-wounded freedom fighter, and a gazetted \"July Fighter\" wounded in the July 2024 uprising: ৳{{amount}}",

            // Older, simpler category wording used only for the FY 2025-2026 reference table
            category_female_plain: "Female taxpayer / senior citizen (65+ age): ৳{{amount}}",
            category_disabled_plain: "Person with disability: ৳{{amount}}",
            category_freedom_plain: "Gazetted freedom fighter: ৳{{amount}}",

            disabled_dependent_note: "The tax-free limit increases by a further ৳50,000 for each disabled child/dependent (if both parents are taxpayers, only one of them can claim this benefit).",
            min_tax_note_flat: "Minimum tax: ৳5,000 (৳1,000 for a first-time/new taxpayer) — the same amount applies regardless of city.",
            min_tax_note_legacy: "Minimum tax by area: ৳5,000 in Dhaka/Chattagram City Corporation, ৳4,000 in other city corporations, ৳3,000 outside city corporation areas.",
            invest_rebate_note_current: "Investment rebate: lowest of 10% of eligible investment, 3% of total income, or ৳7,50,000.",
            invest_rebate_note_legacy: "Investment rebate: lowest of 15% of eligible investment, 3% of total income, or ৳10,00,000.",

            surcharge_title: "Wealth Surcharge — Not Included in This Calculator",
            surcharge_note: "Separately from income tax, an individual with net wealth above ৳4 crore — or who owns more than one motor vehicle, or a house property over 8,000 sq. ft. — must pay an additional surcharge of 10% to 35% on their calculated income tax (see table below), based on the net-wealth statement filed with their return. This calculator does NOT collect net-wealth data and does NOT include this surcharge in its result.",
            surcharge_col_wealth: "Net Wealth",
            surcharge_col_rate: "Surcharge Rate",
            surcharge_row_1: "Up to ৳4 crore",
            surcharge_row_2: "Above ৳4 crore, up to ৳10 crore (or more than 1 vehicle, or house >8,000 sq. ft.)",
            surcharge_row_3: "Above ৳10 crore, up to ৳20 crore",
            surcharge_row_4: "Above ৳20 crore, up to ৳50 crore",
            surcharge_row_5: "Above ৳50 crore",

            faq_title: "Frequently Asked Questions (FAQ)",
            faq_q1: "What is the tax-free income limit for an individual taxpayer in Bangladesh?",
            faq_a1: "From FY 2026-2027 through FY 2027-2028, the tax-free limit is ৳4,00,000 for a general taxpayer, ৳4,50,000 for a woman or a citizen aged 65+, ৳5,25,000 for a person with a disability or a third-gender taxpayer, and ৳5,50,000 for a gazetted freedom fighter/July Fighter. The limit rises again for FY 2028-2029 & 2029-2030, and again for FY 2030-2031 — see the tables above for exact figures. FY 2025-2026 used older, lower limits (৳3,50,000 general).",
            faq_q2: "How does this calculator compute income tax?",
            faq_a2: "It applies the NBR's step-by-step tax slabs for the selected financial year to your taxable income after exemption, then deducts your investment rebate and applies the minimum tax to arrive at your final net tax.",
            faq_q3: "How is the investment rebate calculated?",
            faq_a3: "From FY 2026-2027 onward it's whichever is lowest: 10% of your actual eligible investment, 3% of your total income, or a ৳7,50,000 ceiling. For FY 2025-2026, the rate was 15% and the ceiling was ৳10,00,000 (this was reduced by the FY 2026-2027 Finance Act amendment to section 78 of the Income Tax Act, 2023).",
            faq_q4: "What is the minimum tax from FY 2026-2027 onward?",
            faq_a4: "From FY 2026-2027 through FY 2030-2031, minimum tax is a flat ৳5,000 regardless of city — or ৳1,000 if you are a first-time/new taxpayer. FY 2025-2026 instead used an area-based minimum tax: ৳5,000 in Dhaka/Chattagram, ৳4,000 in other city corporations, and ৳3,000 elsewhere.",
            faq_q5: "Is this tax calculator free to use?",
            faq_a5: "Yes, this income tax calculator is completely free with no registration required.",
            faq_q6: "Where can I read the official NBR circular for FY 2026-2027?",
            faq_a6: "You can download the official NBR circular (আয়কর পরিপত্র ২০২৬-২০২৭) as a PDF from the link in the footer of this page.",
            faq_q7: "Does this calculator include the wealth surcharge for high-net-worth individuals?",
            faq_a7: "No. Separately from income tax, individuals with net wealth above ৳4 crore (or who own more than one motor vehicle, or a house property over 8,000 sq. ft.) must pay a surcharge of 10-35% on their calculated income tax, based on a net-wealth statement filed with the return. This calculator does not collect net-wealth data, so it does not include this surcharge — if it may apply to you, please consult a tax professional or the NBR circular.",
        }
    },
    bn: {
        translation: {
            home: "হোম",
            about: "আমাদের সম্পর্কে",
            contact: "যোগাযোগ",
            welcome: "বাংলাদেশ আয়কর ক্যালকুলেটর (অর্থবছর ২০২৫-২৬ থেকে ২০৩০-৩১)",
            tax: "ট্যাক্স",
            homeTitle: "আয়কর ক্যালকুলেটর বাংলাদেশ (অর্থবছর ২০২৫-২৬ থেকে ২০৩০-৩১) | Tax Calculator BD",

            footer_desc: "সবার জন্য সহজ ট্যাক্স ক্যালকুলেটর।",
            quick_links: "দ্রুত লিংক",
            settings: "সেটিংস",
            resources: "রিসোর্স",
            nbr_circular_link: "NBR আয়কর পরিপত্র ২০২৬-২০২৭ (PDF)",
            rights: "সর্বস্বত্ব সংরক্ষিত",
            author_name: "মফিজুল ইসলাম জন কর্তৃক",

            annual_salary: "বার্ষিক মোট বেতন",
            tax_exemption: "কর অব্যাহতি",
            taxable_income: "করযোগ্য আয়",
            total_tax: "মোট কর",
            monthly_tax: "মাসিক কর",
            min_tax_final: "ন্যূনতম কর",
            tax_result: "আপনার ট্যাক্স ক্যালকুলেটরের ফলাফল",
            tax_rebat: "কর রেয়াত",
            net_tax: "নেট কর",
            after_rebat: "কর রেয়াত দেওয়ার পর কর",
            investment_amount: "বিনিয়োগের পরিমাণ",
            gross_salary: "মোট বেতন",

            tax_title: "ট্যাক্স ক্যালকুলেটর",
            tax_category: "কর প্রদানকারী শ্রেণী",

            // ---- অর্থবছর ড্রপডাউন (নতুনটি সবার আগে) ----
            year_2030_31: "২০৩০-২০৩১",
            year_2028_29_29_30: "২০২৮-২০২৯ ও ২০২৯-২০৩০",
            year_2026_27_27_28: "২০২৬-২০২৭ ও ২০২৭-২০২৮",
            year_2025_26: "২০২৫-২০২৬",

            disability_child: "প্রতিবন্ধী সন্তান/পোষ্য",
            yes: "হ্যাঁ",
            no: "না",
            child_count: "প্রতিবন্ধী সন্তান/পোষ্যের সংখ্যা",
            new_taxpayer_label: "নতুন করদাতা (এই প্রথম রিটার্ন)?",
            financial_year: "অর্থবছর",
            select_category: "শ্রেণী নির্বাচন করুন",

            // ড্রপডাউনের শ্রেণী লেবেল (FY ২০২৬-২৭ থেকে কার্যকর নতুন/একীভূত বিবরণ)
            general: "সাধারণ করদাতা",
            female: "মহিলা করদাতা / ৬৫+ বছর বয়সের করদাতা",
            disabled: "প্রতিবন্ধী ব্যক্তি / তৃতীয় লিঙ্গের করদাতা",
            freedom: "গেজেটভুক্ত যুদ্ধাহত মুক্তিযোদ্ধা / জুলাই যোদ্ধা",

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
            seo_subtitle: "বাংলাদেশের সবচেয়ে সহজ ও বিনামূল্যে অনলাইন আয়কর ক্যালকুলেটর — FY ২০২৫-২৬ থেকে FY ২০৩০-৩১ পর্যন্ত প্রতিটি NBR কর স্ল্যাব, বিনিয়োগ রেয়াত ও ন্যূনতম কর হিসাব সমর্থন করে। বাংলা ও ইংরেজি উভয় ভাষায় ব্যবহারযোগ্য।",

            benefits_title: "কেন এই আয়কর ক্যালকুলেটর ব্যবহার করবেন?",
            benefit_1: "FY ২০২৫-২৬ থেকে FY ২০৩০-৩১ পর্যন্ত পাঁচটি অর্থবছরের সবকয়টি NBR নিয়ম কভার করে — সঠিক অর্থবছর বেছে নিলেই নির্ভুল ফলাফল পাবেন।",
            benefit_2: "সাধারণ, নারী/প্রবীণ নাগরিক, প্রতিবন্ধী/তৃতীয় লিঙ্গ ও মুক্তিযোদ্ধা/জুলাই যোদ্ধা — প্রতিটি শ্রেণীর সঠিক করমুক্ত আয়ের সীমা নির্বাচিত বছর অনুযায়ী স্বয়ংক্রিয়ভাবে প্রয়োগ করে।",
            benefit_3: "বিনিয়োগ রেয়াত (FY ২০২৬-২৭ থেকে বিনিয়োগের ১০% বা আয়ের ৩%, সর্বোচ্চ ৳৭,৫০,০০০) ও ন্যূনতম কর স্বয়ংক্রিয়ভাবে হিসাব করে।",
            benefit_4: "সম্পূর্ণ বিনামূল্যে, কোনো রেজিস্ট্রেশনের প্রয়োজন নেই, এবং বাংলা ও ইংরেজি উভয় ভাষায় ব্যবহার করা যায়।",

            slabs_title: "বাংলাদেশের আয়কর স্ল্যাব (অর্থবছর ২০২৫-২৬ থেকে ২০৩০-৩১)",
            slabs_2025_26_title: "NBR কর স্ল্যাব — অর্থবছর ২০২৫-২০২৬",
            slabs_2026_27_title: "NBR কর স্ল্যাব — অর্থবছর ২০২৬-২০২৭ ও ২০২৭-২০২৮",
            slabs_2028_29_title: "NBR কর স্ল্যাব — অর্থবছর ২০২৮-২০২৯ ও ২০২৯-২০৩০",
            slabs_2030_31_title: "NBR কর স্ল্যাব — অর্থবছর ২০৩০-২০৩১",

            col_total_income: "মোট আয়",
            col_tax_rate: "করহার",
            slab_first: "প্রথম ৳{{amount}} টাকা পর্যন্ত",
            slab_next: "পরবর্তী ৳{{amount}} টাকা পর্যন্ত",
            slab_remaining: "অবশিষ্ট টাকার উপর",

            category_exemptions_title: "শ্রেণীভিত্তিক করমুক্ত আয়ের সীমা",
            category_point_general: "সাধারণ করদাতা: ৳{{amount}} টাকা",
            category_point_female: "মহিলা করদাতা এবং ৬৫ বছর বা তদূর্ধ্ব বয়সের করদাতার ক্ষেত্রে: ৳{{amount}} টাকা",
            category_point_disabled: "তৃতীয় লিঙ্গের করদাতা এবং প্রতিবন্ধী ব্যক্তি করদাতার ক্ষেত্রে: ৳{{amount}} টাকা",
            category_point_freedom: "গেজেটভুক্ত যুদ্ধাহত মুক্তিযোদ্ধা ও জুলাই গণঅভ্যুত্থান ২০২৪ এ আহত গেজেটভুক্ত \"জুলাই যোদ্ধা\" করদাতার ক্ষেত্রে: ৳{{amount}} টাকা",

            // FY ২০২৫-২০২৬ রেফারেন্স টেবিলের জন্য পুরনো, সহজ বিবরণ
            category_female_plain: "মহিলা করদাতা / প্রবীণ নাগরিক (৬৫+ বয়স): ৳{{amount}} টাকা",
            category_disabled_plain: "প্রতিবন্ধী ব্যক্তি: ৳{{amount}} টাকা",
            category_freedom_plain: "গেজেটেড মুক্তিযোদ্ধা: ৳{{amount}} টাকা",

            disabled_dependent_note: "কোনো প্রতিবন্ধী ব্যক্তির পিতামাতা বা আইনানুগ অভিভাবকের প্রত্যেক প্রতিবন্ধী সন্তান/পোষ্যের জন্য করমুক্ত আয়ের সীমা আরও ৳৫০,০০০ টাকা বেশি হবে (উভয়েই করদাতা হলে যেকোনো একজন এই সুবিধা পাবেন)।",
            min_tax_note_flat: "ন্যূনতম কর: ৳৫,০০০ (নতুন/প্রথমবার করদাতার ক্ষেত্রে ৳১,০০০) — শহর নির্বিশেষে একই হার প্রযোজ্য।",
            min_tax_note_legacy: "এলাকাভিত্তিক ন্যূনতম কর: ঢাকা/চট্টগ্রাম সিটি কর্পোরেশনে ৳৫,০০০, অন্যান্য সিটি কর্পোরেশনে ৳৪,০০০, সিটি কর্পোরেশনের বাইরে ৳৩,০০০।",
            invest_rebate_note_current: "বিনিয়োগ রেয়াত: অনুমোদনযোগ্য বিনিয়োগের ১০%, মোট আয়ের ৩%, অথবা ৳৭,৫০,০০০ — যেটি সর্বনিম্ন।",
            invest_rebate_note_legacy: "বিনিয়োগ রেয়াত: অনুমোদনযোগ্য বিনিয়োগের ১৫%, মোট আয়ের ৩%, অথবা ৳১০,০০,০০০ — যেটি সর্বনিম্ন।",

            surcharge_title: "সম্পদ সারচার্জ — এই ক্যালকুলেটরে অন্তর্ভুক্ত নয়",
            surcharge_note: "আয়করের বাইরে, যেসব ব্যক্তির নিট সম্পদের পরিমাণ ৪ কোটি টাকার বেশি — অথবা একাধিক মোটরগাড়ি আছে, অথবা ৮,০০০ বর্গফুটের বেশি আয়তনের গৃহসম্পত্তি আছে — তাদের হিসাবকৃত আয়করের উপর অতিরিক্ত ১০% থেকে ৩৫% পর্যন্ত সারচার্জ দিতে হয় (নিচের টেবিল দেখুন), যা রিটার্নের সাথে দাখিলকৃত সম্পদ ও দায় বিবরণীর ভিত্তিতে নির্ধারিত হয়। এই ক্যালকুলেটর নিট সম্পদের তথ্য সংগ্রহ করে না এবং ফলাফলে এই সারচার্জ যুক্ত করে না।",
            surcharge_col_wealth: "নিট সম্পদের পরিমাণ",
            surcharge_col_rate: "সারচার্জের হার",
            surcharge_row_1: "৪ কোটি টাকা পর্যন্ত",
            surcharge_row_2: "৪ কোটি টাকার বেশি, ১০ কোটি টাকা পর্যন্ত (অথবা ১টির বেশি গাড়ি, অথবা ৮,০০০ বর্গফুটের বেশি গৃহসম্পত্তি)",
            surcharge_row_3: "১০ কোটি টাকার বেশি, ২০ কোটি টাকা পর্যন্ত",
            surcharge_row_4: "২০ কোটি টাকার বেশি, ৫০ কোটি টাকা পর্যন্ত",
            surcharge_row_5: "৫০ কোটি টাকার বেশি",

            faq_title: "সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)",
            faq_q1: "বাংলাদেশে ব্যক্তি করদাতার করমুক্ত আয়ের সীমা কত?",
            faq_a1: "FY ২০২৬-২০২৭ ও FY ২০২৭-২০২৮ অর্থবছরে সাধারণ করদাতার জন্য করমুক্ত আয়ের সীমা ৳৪,০০,০০০, নারী/৬৫+ বয়সী ব্যক্তির জন্য ৳৪,৫০,০০০, প্রতিবন্ধী/তৃতীয় লিঙ্গের করদাতার জন্য ৳৫,২৫,০০০ এবং মুক্তিযোদ্ধা/জুলাই যোদ্ধার জন্য ৳৫,৫০,০০০। FY ২০২৮-২৯ ও ২০২৯-৩০ এবং FY ২০৩০-৩১ অর্থবছরে এই সীমা আরও বৃদ্ধি পেয়েছে — সঠিক পরিমাণের জন্য উপরের টেবিলগুলো দেখুন। FY ২০২৫-২০২৬ অর্থবছরে পুরনো, তুলনামূলক কম সীমা প্রযোজ্য ছিল (সাধারণ করদাতার জন্য ৳৩,৫০,০০০)।",
            faq_q2: "এই ক্যালকুলেটর কীভাবে আয়কর হিসাব করে?",
            faq_a2: "নির্বাচিত অর্থবছরের NBR-এর নির্ধারিত স্ল্যাব অনুযায়ী ধাপে ধাপে করযোগ্য আয়ের উপর কর হিসাব করে, তারপর বিনিয়োগ রেয়াত বাদ দিয়ে এবং ন্যূনতম কর প্রয়োগ করে চূড়ান্ত নেট কর নির্ণয় করা হয়।",
            faq_q3: "বিনিয়োগ রেয়াত কীভাবে হিসাব করা হয়?",
            faq_a3: "FY ২০২৬-২০২৭ থেকে যেটি সর্বনিম্ন সেটিই প্রযোজ্য: প্রকৃত অনুমোদনযোগ্য বিনিয়োগের ১০%, মোট আয়ের ৩%, অথবা ৳৭,৫০,০০০ সর্বোচ্চ সীমা। FY ২০২৫-২০২৬ অর্থবছরে হার ছিল ১৫% এবং সর্বোচ্চ সীমা ছিল ৳১০,০০,০০০ (অর্থ আইন, ২০২৬ এর মাধ্যমে আয়কর আইন, ২০২৩ এর ধারা ৭৮ সংশোধন করে এই সীমা কমানো হয়েছে)।",
            faq_q4: "FY ২০২৬-২০২৭ থেকে ন্যূনতম কর কত?",
            faq_a4: "FY ২০২৬-২০২৭ থেকে FY ২০৩০-২০৩১ পর্যন্ত ন্যূনতম কর শহর নির্বিশেষে সমতল ৳৫,০০০ — নতুন/প্রথমবার করদাতার ক্ষেত্রে ৳১,০০০। FY ২০২৫-২০২৬ অর্থবছরে এলাকাভিত্তিক ন্যূনতম কর প্রযোজ্য ছিল: ঢাকা/চট্টগ্রামে ৳৫,০০০, অন্যান্য সিটি কর্পোরেশনে ৳৪,০০০, এবং অন্যত্র ৳৩,০০০।",
            faq_q5: "এই ক্যালকুলেটর ব্যবহার করতে কোনো টাকা লাগে কি?",
            faq_a5: "না, এই আয়কর ক্যালকুলেটরটি সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায় এবং কোনো রেজিস্ট্রেশনের প্রয়োজন নেই।",
            faq_q6: "FY ২০২৬-২০২৭ এর সরকারি NBR পরিপত্র কোথায় পাব?",
            faq_a6: "এই পেজের ফুটারে দেওয়া লিংক থেকে সরকারি আয়কর পরিপত্র ২০২৬-২০২৭ (PDF) ডাউনলোড করতে পারবেন।",
            faq_q7: "উচ্চ সম্পদশালী ব্যক্তির সারচার্জ কি এই ক্যালকুলেটরে অন্তর্ভুক্ত?",
            faq_a7: "না। আয়করের বাইরে, যাদের নিট সম্পদের পরিমাণ ৪ কোটি টাকার বেশি (অথবা একাধিক মোটরগাড়ি আছে, অথবা ৮,০০০ বর্গফুটের বেশি আয়তনের গৃহসম্পত্তি আছে), তাদের হিসাবকৃত আয়করের উপর অতিরিক্ত ১০%-৩৫% সারচার্জ দিতে হয়, যা রিটার্নের সাথে দাখিলকৃত সম্পদ বিবরণীর ভিত্তিতে নির্ধারিত হয়। এই ক্যালকুলেটর নিট সম্পদের তথ্য সংগ্রহ করে না, তাই এই সারচার্জ হিসাবের মধ্যে নেই — যদি আপনার ক্ষেত্রে এটি প্রযোজ্য হতে পারে, দয়া করে একজন কর পরামর্শকের সাথে বা NBR পরিপত্র দেখে নিশ্চিত হোন।",
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
