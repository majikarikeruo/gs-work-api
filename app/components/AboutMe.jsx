const AboutMe = () => {
  return (
    <div className="aboutme p-10">
      <h2 className=" text-[#4b96e9] font-bold text-lg border-0 text-center uppercase">
        About Me
      </h2>
      <div className="flex mb-5">
        <figure className="min-w-[100px] mr-5">
          <img src="/assets/images/stamp18.png" width="100" alt="" />
        </figure>
        <p className="m-0">
          埼玉県出身、1982年生まれ。30歳直前で異業種からの転職を目指して以降、紆余曲折を経ながら現在、ベンチャー企業での開発に従事。
          その他、個人的にも地域を問わず各種イベントへの登壇を行ったり、自らのブログ「Arrown」にて様々な情報を発信。
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text=[#E8AF4A] text-center font-bold">FOLLOW ME!!</h3>
        <div className="flex justify-center gap-4 my-8">
          <img src="/assets/images/twitter.svg" alt="" />
          <img src="/assets/images/instagram.svg" alt="" />
          <img src="/assets/images/youtube-logo.svg" alt="" />
          <img src="/assets/images/ticktock.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
