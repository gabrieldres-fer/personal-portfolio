import { MouseEvent, ReactElement } from 'react';

interface Props {
   link: string;
   title: string;
   description: string;
   children?: ReactElement | ReactElement[];
   'client:visible': boolean;
}

export const Repository = ({ link, title, description, children }: Props) => {
   const activeFolder = (e: MouseEvent<HTMLElement>) => {
      const svg = e.currentTarget.querySelector('path');
      svg.classList.add('fill-[#8E1DFF]');

      e.currentTarget.addEventListener('mouseleave', () => {
         svg.classList.remove('fill-[#8E1DFF]');
      });
   };

   return (
      <li onMouseEnter={activeFolder}>
         <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="bg-gradient-to-b from-[#0000005b] p-6 relative rounded-lg hover:shadow-md hover:[box-shadow:_0_0_20px_#9428ffe9] hover:scale-105 transition ease duration-300">
               <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="absolute right-10 w-7 "
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M21.25 3.75003H13.4L13 2.50003C12.7407 1.76657 12.2597 1.13191 11.6236 0.683979C10.9876 0.236051 10.2279 -0.00297112 9.45 2.78795e-05H3.75C2.75544 2.78795e-05 1.80161 0.395116 1.09835 1.09838C0.395088 1.80164 0 2.75547 0 3.75003V20C0 20.9946 0.395088 21.9484 1.09835 22.6517C1.80161 23.3549 2.75544 23.75 3.75 23.75H21.25C22.2446 23.75 23.1984 23.3549 23.9017 22.6517C24.6049 21.9484 25 20.9946 25 20V7.50003C25 6.50547 24.6049 5.55164 23.9017 4.84838C23.1984 4.14512 22.2446 3.75003 21.25 3.75003ZM22.5 20C22.5 20.3315 22.3683 20.6495 22.1339 20.8839C21.8995 21.1183 21.5815 21.25 21.25 21.25H3.75C3.41848 21.25 3.10054 21.1183 2.86612 20.8839C2.6317 20.6495 2.5 20.3315 2.5 20V3.75003C2.5 3.41851 2.6317 3.10057 2.86612 2.86614C3.10054 2.63172 3.41848 2.50003 3.75 2.50003H9.45C9.71206 2.49935 9.96769 2.58105 10.1808 2.73358C10.3939 2.88611 10.5536 3.10175 10.6375 3.35003L11.3125 5.40003C11.3964 5.6483 11.5561 5.86395 11.7692 6.01648C11.9823 6.169 12.2379 6.2507 12.5 6.25003H21.25C21.5815 6.25003 21.8995 6.38172 22.1339 6.61614C22.3683 6.85057 22.5 7.16851 22.5 7.50003V20Z"
                     fill="#00FF85"
                  ></path>
               </svg>

               <div className="pt-2">
                  <h3 className="text-xl text-white font-extrabold">{title}</h3>
                  <p className="text-gray-400 text-sm w-5/6">{description}</p>
               </div>

               <div className="pt-4 text-sm">
                  <p className="text-white">Construido con:</p>
                  <ul className="grid grid-cols-3 gap-2 w-24 items-center pt-2">{children}</ul>
               </div>
            </div>
         </a>
      </li>
   );
};
