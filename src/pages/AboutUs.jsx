import React from "react";
import doc from '../assets/Doctors-pana.svg'

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Nikhil Mishra",
      imageSrc:
        "https://img.freepik.com/free-vector/playful-cat-concept-illustration_114360-5268.jpg?t=st=1688554756~exp=1688555356~hmac=28b8b384b895cb21c1ac12fa345e9641759fe46e554c4f6bbbc02576a8a993d9",
      linkedInUrl: "https://www.linkedin.com/in/nikhil-mishra-8a6710244",
      twitterUrl: "https://twitter.com/nikkttws",
      githubUrl: "https://github.com/mnik7044",
    },
    {
      name: "Ekam Bitt",
      imageSrc:
        "https://img.freepik.com/free-vector/playful-cat-concept-illustration_114360-5268.jpg?t=st=1688554756~exp=1688555356~hmac=28b8b384b895cb21c1ac12fa345e9641759fe46e554c4f6bbbc02576a8a993d9",
      linkedInUrl: "https://www.linkedin.com/in/ekam-bitt/",
      twitterUrl: "https://twitter.com/BittEkam",
      githubUrl: "https://github.com/Ekam-Bitt",
    },
    {
      name: "Soumi Guria",
      imageSrc:
        "https://img.freepik.com/free-vector/playful-cat-concept-illustration_114360-5268.jpg?t=st=1688554756~exp=1688555356~hmac=28b8b384b895cb21c1ac12fa345e9641759fe46e554c4f6bbbc02576a8a993d9",
      linkedInUrl: "https://www.linkedin.com/in/soumi-guria-8882b224a/",
      twitterUrl: "https://twitter.com/guria_soumi",
      githubUrl: "https://github.com/soumiguria",
      
    },
    {
      name: "Rajdip Sinha",
      imageSrc:
        "https://img.freepik.com/free-vector/playful-cat-concept-illustration_114360-5268.jpg?t=st=1688554756~exp=1688555356~hmac=28b8b384b895cb21c1ac12fa345e9641759fe46e554c4f6bbbc02576a8a993d9",
      linkedInUrl: "https://www.linkedin.com/in/rajdip-sinha-23789a220/",
      twitterUrl: "https://twitter.com/rajdips834",
      githubUrl: "https://github.com/rajdips834",
    },
  ];

  return (
    <div>
      <div className="h-[460px] flex flex-col justify-center shrink bg-[#ffe6e2]">
        <h1 className="text-black text-5xl font-normal leading-normal pl-6 font-family: Alatsi">
          Our Team
        </h1>
        <div className="mx-10 mt-6 flex flex-wrap justify-between">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-[216px] flex flex-col items-center justify-center">
              <div className="w-[212px] h-[212px] shrink-0 rounded-full bg-black">
                <img
                  src={member.imageSrc}
                  alt=""
                  className="w-[212px] h-[212px] shrink-0 rounded-full"
                />
              </div>
              <p className="text-black py-[19px] text-2xl font-normal leading-normal font-family: Itim">
                {member.name}
              </p>
              <div className="w-[111px] h-[20px] flex items-center justify-between shrink-0">
                <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                    alt="LinkedIn"
                    className="h-[20px]"
                  />
                </a>
                <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
                    alt="Twitter"
                    className="h-[20px]"
                  />
                </a>
                <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                    alt="Github"
                    className="h-[19px]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[510px] flex flex-col justify-between bg-[#CFB9FF]">
        <h1 className="text-black flex justify-end pt-4 pr-6 text-5xl font-normal leading-normal font-family: Alatsi">
          Our Motto
        </h1>
        <div className="h-[85%] bg-[#CFB9FF] flex justify-between">
          <div className="w-[40%]">
            <img
              src={doc}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-around p-12">
            <p className="flex flex-col justify-center w-[689px] font-semibold text-2xl text-right text-[#59239D] not-italic tracking-[0.8px]">
              "In the realm of healthcare, the bridges we build through
              connection become the lifelines that lead to saving lives."
            </p>
            <p className="flex flex-col justify-center w-[689px] text-xl text-black not-italic font-normal leading-[151.5%] tracking-[0.9px]">
              Our website unifies care, empowering lives by providing seamless
              access to healthcare services. Connect with nearby hospitals in
              emergencies and find generic medicines based on composition. Trust
              us to bridge the gap and deliver lifesaving solutions for a
              healthier, more connected world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
