import { useTranslation } from "react-i18next";
import TaxForm from "../TaxForm/TaxForm";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <title>{t("homeTitle")}</title>
            <h1 className="text-2xl text-center font-bold p-4"> {t("welcome")} </h1>
            <TaxForm />
        </div>
    );
};

export default Home;