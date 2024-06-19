import Link from "next/link";

const Company = () => {
  return (
    <section className="relative p-[30px] mr-[70px] ml-[70px] mt-2 rounded-xl">
      <div className="flex flex-wrap">
        <div className="flex-col flex-wrap">
          <h2 className="mb-[10px] font-bold text-xl ">History</h2>
          <p className="max-w-[500px] text-justify">
            Sejak didirikannya di tahun 2010, DigiHealth telah menjadi pilihan
            terpercaya masyarakat sekitar karena berobat tidak perlu ribet dan
            mahal!.
          </p>
          <h2 className="my-[10px] text-xl font-bold">Our Culture</h2>
          <p className="max-w-[500px] text-justify">
            di DigiHealth kami memiliki budaya yang unik dan luar biasa. Temukan
            gambaran bagaimana bekerja disini dan mempelajari lebih lanjut nilai
            dari perushaan kami.
            <Link className="text-cyan-900" href="/about">
              Selengkapnya
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;
