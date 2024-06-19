import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ product }) {
  const { title, slug, priceList, thumbnail } = product.fields;

  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <div className="h-80">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="thumbnail"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-bold text-xl text-center">{title}</h3>
        <p className="mb-3 mt-1">Harga mulai dari : {priceList}</p>
        <Link
          href={`/products/${slug}`}
          className="border-2 border-black px-4 py-1.5 items-center"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}
