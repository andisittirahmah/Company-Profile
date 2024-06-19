import Image from "next/image";

const Page = () => {
  return (
    <>
      <>
        <section className="py-16 h-[100vh]">
          <h2 className=" text-3xl font-bold mb-5 ml-10">About Us</h2>
          <div className="flex flex-wrap justify-center items-center">
            <Image src="/aboutUs.png" alt="about" width={400} height={300} />
            <div className="w-1/2 flex-col flex-wrap px-6 justify-center items-center text-justify">
              <h3 className="font-bold text-xl mb-1">History</h3>
              <p>
                Penyedia layanan kesehatan terkemuka yang berbasis di Jakarta
                Utara kini juga menyediakan layanan secara digital. Kami
                berfokus memberikan perawatan berkualitas tinggi kepada pasien
                dengan harga yang terjangkau. Dengan didirikannya sejak 2010,
                DigiHealth telah menjadi pilihan terpercaya masyarakat sekitar.
                Karena berobat tidak perlu ribet dan mahal!.
              </p>
              <h3 className="font-bold text-xl mt-3">Culture</h3>
              <ul className="max-h-[300px]">
                <li>
                  <h4 className="font-semibold">Focus on Impact</h4>
                  <p>
                    Memprioritaskan serta memfokuskan terhadap masalah yang
                    paling penting menjadi kunci untuk bekerja secara efisien
                    dan lebih produktif.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Be Open</h4>
                  <p>
                    {" "}
                    Memberikan informasi yang sangat transparan mengenai
                    perusahaan.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Build Social Value</h4>
                  <p>
                    Dampak sebuah perusahaan pada kehidupan sosial yang terjadi.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
