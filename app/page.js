import { createClient } from "contentful";

import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import TeamCompany from "@/components/TeamCompany";

async function getService() {
  try {
    const client = createClient({
      space: "h5ncwbv187m9",
      accessToken: "1EnWrwVBp7UdPDwtvRBICrcQyoAc7UiJ0aRewX0cK6g",
    });
    const res = await client.getEntries({ content_type: "product" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const service = await getService();
  console.log(service);

  return (
    <>
      <Hero />
      <Company />
      <TeamCompany />
      <Testimonials />
      <div className="grid grid-cols-3 m-0">
        {service.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </>
  );
}
