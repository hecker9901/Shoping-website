import MainCorousel from "../components/MainCorousel/MainCorousel";
import { mensKurta } from "../Data/mensKurta";
import { menShoes } from "../Data/menShoes";
import { womenSaree } from "../Data/womenSaree";

import CardCorousel from "../components/CardCorousel/CardCorousel";

const HomePage = () => {
  return (
    <>
      <section className="w-[100vw] overflow-hidden">
        {" "}
        <MainCorousel />
      </section>
      <section className=" my-10 flex flex-col gap-y-4 space-y-4">
        <CardCorousel data={mensKurta} section="Men's Kurta" />
        <CardCorousel data={menShoes} section="Men's Shoes" />
        <CardCorousel data={womenSaree} section="Woman's Saree" />
      </section>
    </>
  );
};

export default HomePage;
