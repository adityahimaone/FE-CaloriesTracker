import React, { useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);
  return (
    <div id="faq" className="my-10 mx-4">
      <div className="my-4" data-aos={"zoom-in"}>
        <h1 className="text-center text-2xl md:text-4xl font-bold">FAQ</h1>
      </div>
      <div
        className="w-full max-w-2xl p-2 mx-auto bg-white rounded-md shadow-lg"
        data-aos={"flip-down"}
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Bagaimana Cara Menggunakannya ?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Untuk guest anda bisa menggunakan fitur calculator pada halaman
                calculator, dan mencari makanan pada halaman makanan tanpa perlu
                login. untuk member/user yang sudah teregistasi dapat
                menggunakan fitur untuk mentrackking kebutuhan kalori.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Punya fitur apa saja?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Kami mempunyai fitur kalkulator kebutuhan kalori berdasarkan Harris-Bennedict Equation, Database makanan, dan fitur pencarian makanan. Untuk member dapat menggunakan fitur tracking kalori untuk mengetahui informasi kalori harian.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
