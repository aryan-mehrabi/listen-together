import React from "react";
import notesImgUrl from "../assets/music-notes.jpg";

const Chat = () => {
  return (
    <div className="overflow-hidden h-screen bg-primary text-secondary flex">
      <aside className="min-w-[250px] w-1/4 max-w-[400px] border-neutral-700 border-r flex flex-col">
        <div className="flex items-center px-4 py-3 border-b border-neutral-700">
          <img
            className="w-11"
            src="https://avatars.dicebear.com/api/human/seed.svg"
            alt="avatar"
          />
          <p className="ml-2 font-semibold">Aryan</p>
          <i
            title="settings"
            className="fa-solid fa-ellipsis ml-auto text-xl"
          ></i>
        </div>
        <div className="text-center border-b border-neutral-700">
          <button className=" font-semibold text-lg text-cta rounded-sm py-2 px-4 my-4 ">
            Create a Channel
          </button>
        </div>
        <div className="overflow-auto">
          <div className="flex items-center border-b border-neutral-700 py-5 px-4">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
        </div>
      </aside>
      <main
        // style={{ backgroundImage: `url("${notesImgUrl}")` }}
        className="bg-blend-multiply bg-repeat bg-primary flex-grow "
      >
        {/* <section className="flex items-center justify-center text-center h-full">
          <h1 className="text-4xl font-semibold leading-relaxed text-secondary">
            Select a channel <br /> or <br />
            Create one
          </h1>
        </section> */}
        <section className="h-full flex flex-col">
          <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
            <h2 className="text-3xl">chatroom 1</h2>
            <i class="fa-solid fa-users-gear ml-auto text-xl"></i>
          </nav>
          <div
            className="overflow-auto flex flex-col 
          items-start flex-grow p-6"
          >
            <div className="flex items-start my-1 max-w-[80%]">
              <img
                className="w-10 mt-2"
                src="https://avatars.dicebear.com/api/human/seasddasded.svg"
                alt=""
              />
              <div className="bg-neutral-700 rounded-sm p-2 ml-2">
                <h6 className="text-lg font-semibold text-cta">mamad</h6>
                <p>
                  mamad oono goft asda asdasd asdasd asdasd unu unu unu unun unu ak
                </p>
              </div>
            </div>
            <div className="ml-auto my-1 max-w-[80%]">
              <p className="bg-secondary text-primary rounded-sm p-2 ml-2">
                mamad oono goft asda asdasd asdasd asdasd kni kni kni kni asdasdsa asdasdsa
              </p>
            </div>
            <div className="flex items-start my-1 max-w-[80%]">
              <img
                className="w-10 mt-2"
                src="https://avatars.dicebear.com/api/human/sedasded.svg"
                alt=""
              />
              <div className="bg-neutral-700 rounded-sm p-2 ml-2">
                <h6 className="text-lg font-semibold text-cta">aryan</h6>
                <p>
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa
                  mamad oono goft asda asdasd asdkkkkkk ouhniunasd asdasd asdasdsa asdasdsa

                </p>
              </div>
            </div>
          </div>
          <div className="flex p-3 border-t border-neutral-700 ">
            <input className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2" type="text" />
            <button className="bg-cta text-primary rounded-sm ml-2 px-4">SEND</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Chat;
