import logo from "/logo.png";
const footerData = [
  {
    id: 1,
    title: "Company",
    links: [
      {
        id: 1,
        name: "About ",
      },
      {
        id: 2,
        name: "Blog",
      },
      {
        id: 3,
        name: "Jobs",
      },
      {
        id: 4,
        name: "Press",
      },
      {
        id: 5,
        name: "Partners",
      },
    ],
  },
  {
    id: 2,
    title: "Solutions",
    links: [
      {
        id: 1,
        name: "Marketing ",
      },
      {
        id: 2,
        name: "Analytics",
      },
      {
        id: 3,
        name: "Commerce",
      },
      {
        id: 4,
        name: "Insight",
      },
      {
        id: 5,
        name: "Support",
      },
    ],
  },
  {
    id: 3,
    title: "Documentation",
    links: [
      {
        id: 1,
        name: "Guides ",
      },
      {
        id: 2,
        name: "API Status",
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    links: [
      {
        id: 1,
        name: "Claim ",
      },
      {
        id: 2,
        name: "Privacy",
      },
      {
        id: 3,
        name: "Terms",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-teal-50 body-font bg-[#111827]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              {footerData[0].links.map((el) => (
                <li key={el.id}>
                  <a className="text-teal-50 hover:text-white">{el.name}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              {footerData[1].title}
            </h2>
            <nav className="list-none mb-10">
              {footerData[1].links.map((el) => (
                <li key={el.id}>
                  <a className="text-teal-50 hover:text-white">{el.name}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              {footerData[2].title}
            </h2>
            <nav className="list-none mb-10">
              {footerData[2].links.map((el) => (
                <li key={el.id}>
                  <a className="text-teal-50 hover:text-white">{el.name}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-teal-50"
                >
                  Enter Your Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full  bg-transparent rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-[#111827] rounded">
                Submit
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            <span className="ml-3 text-xl">Ecommerce Store</span>
          </a>
          <p className="text-sm text-teal-50 sm:ml-6 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Syed Moazam Ali.
            <a
              href="https://syedmoazamali.netlify.app/"
              rel="noopener noreferrer"
              className="text-teal-50 ml-1 hover:decoration-style"
              target="_blank"
            >
              @SyedMoazamAli
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
