import { createClient } from "contentful";
import ProductCard from "@/components/ProductCard";

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

export default async function Page() {
  const service = await getService();
  console.log(service);

  return (
    <>
      <div className="grid grid-cols-3 m-0">
        {service.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </>
  );
}
