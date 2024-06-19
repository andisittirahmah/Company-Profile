import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getService(slug) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({
      content_type: "product",
      "fields.slug": slug,
    });

    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  const [product] = await getService(params.slug);
  const { title, featuredImage, description, priceList } = product.fields;

  return (
    <section>
      <div>
        <Image
          alt="featured image"
          src={`https:${featuredImage.fields.file.url}`}
          width={1500}
          height={500}
        ></Image>
      </div>
      <h3 className="font-bold text-2xl mt-6 ml-3 ">{title}</h3>
      <div>
        <p className="m-4">Harga mulai dari : {priceList}</p>
        <div className="rich-text m-2">
          {documentToReactComponents(description)}
        </div>
      </div>
    </section>
  );
}
