import Image from "next/image";

const TeamCompany = () => {
  return (
    <>
      <div className="py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-8">
          <div className="mb-6 space-y-4 text-center">
            <h2 className="text-4xl font-bold md-text-5xl">
              DigiHealth Blocks Leadership
            </h2>
            <p className="lg:w-8/12 lg:mx-auto">
              Situs ini dipersembahkan oleh tim yang dipimpin oleh:
            </p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap justify-evenly items-center">
        <li>
          <Image
            className="rounded-full"
            src="/team1.png"
            alt="team1"
            width={200}
            height={80}
          ></Image>
          <div className="text-center">
            <h5>John Doe</h5>
            <p> CEO Founder</p>
          </div>
        </li>
        <li>
          <Image
            className="rounded-full"
            src="/team2.png"
            alt="team2"
            width={200}
            height={80}
          ></Image>
          <div className="text-center">
            <h5>Janet</h5>
            <p>Chief operators officer</p>
          </div>
        </li>
        <li>
          <Image
            className="rounded-full"
            src="/team3.png"
            alt="team1"
            width={200}
            height={80}
          ></Image>
          <div className="text-center">
            <h5>Jean</h5>
            <p>Chief Technical Officer</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TeamCompany;
