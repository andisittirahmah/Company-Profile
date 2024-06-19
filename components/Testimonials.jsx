const Testimonials = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
        Apa Kata Mereka ?
      </h2>
      <div className="flex max-w-5x1 mx-auto gap-8 group">
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="/avatar1.png" alt="" />
          <h4 className="text-xl font-bold">John</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quae consequatur quasi nesciunt officiis? Laborum, ipsa sunt
            reprehenderit commodi assumenda maxime, totam earum optio omnis
            accusamus et sapiente, excepturi numquam.
          </p>
        </div>
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="/avatar2.png" alt="avatar2" />
          <h4 className="text-xl font-bold">Jack</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quae consequatur quasi nesciunt officiis? Laborum, ipsa sunt
            reprehenderit commodi assumenda maxime, totam earum optio omnis
            accusamus et sapiente, excepturi numquam.
          </p>
        </div>
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="/avatar3.png" alt="avatar3" />
          <h4 className="text-xl font-bold">Justin</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quae consequatur quasi nesciunt officiis? Laborum, ipsa sunt
            reprehenderit commodi assumenda maxime, totam earum optio omnis
            accusamus et sapiente, excepturi numquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
