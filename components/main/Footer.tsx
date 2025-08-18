// import React from "react";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
//   RxInstagramLogo,
//   RxTwitterLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";

// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
//         <div className="w-full flex flex-col items-center justify-center m-auto">
//             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Community</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <FaYoutube />
//                         <span className="text-[15px] ml-[6px]">Youtube</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <span className="text-[15px] ml-[6px]">Github</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxDiscordLogo />
//                         <span className="text-[15px] ml-[6px]">Discord</span>    
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Social Media</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <FaYoutube />
//                         <span className="text-[15px] ml-[6px]">Instagram</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <span className="text-[15px] ml-[6px]">Twitter</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxDiscordLogo />
//                         <span className="text-[15px] ml-[6px]">Linkedin</span>    
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">About</div>
//                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
//                         <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
//                         <span className="text-[15px] ml-[6px]">Learning about me</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
//                         <span className="text-[15px] ml-[6px]">kunal1234.bamane@gmail.com</span>    
//                     </p>
//                 </div>
//             </div>

//             <div className="mb-[20px] text-[15px] text-center">
//                 &copy; WebChain Dev 2023 Inc. All rights reserved
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer




import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-50 pointer-events-auto">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>

            <a
              href="https://github.com/KunalBamane57"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://www.instagram.com/_kunal_57_?igsh=MWdvbTFwb2wwYmE0MA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-bamane-862511273/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a
              href="#"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>

            <a
              href="#"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>

            <a
              href="mailto:kunal1234.bamane@gmail.com"
              className="flex flex-row items-center my-[15px] hover:text-white pointer-events-auto z-50"
            >
              <span className="text-[15px] ml-[6px]">
                kunal1234.bamane@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
