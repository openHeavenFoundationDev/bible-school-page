import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const linkRegisration =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1qTplup4L1mh8Mlv8Edrtmb6WsfKv3qpgs-_oO-sQAngx_Q/viewform";

const waPsKevin = "https://api.whatsapp.com/send/?phone=6285156326343";
const waPsDaniel = "https://api.whatsapp.com/send/?phone=6282218075558";

const mapCabangBali =
  "https://www.google.com/maps/@-8.684978,115.191756,3a,75y,135.64h,82.39t/data=!3m7!1e1!3m5!1stshoeXzlFXy9Y7ZocBveTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtshoeXzlFXy9Y7ZocBveTg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D135.636870919836%26pitch%3D7.613171239176609%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu";
const mapCabangPapua =
  "https://www.google.com/maps/@-0.9016933,131.3164105,52m/data=!3m1!1e3?entry=ttu";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen cursor-pointer">
      <Head>
        <title>OPEN HEAVEN LEARNING CENTRE</title>
        <meta name="description" content="Theological School Program" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*-----NAVBAR-XL-LG-MD-----*/}
      <div className="hidden md:block bg-black text-white font-bold py-4 px-6 w-full fixed">
        <div className="flex justify-start items-center">
          <Image
            src="/logo.png"
            alt="Open Heaven Foundation Logo"
            width={75}
            height={100}
            className="mr-6"
          />
          <h1 className="text-3xl xl:text-4xl">OPEN HEAVEN LEARNING CENTRE</h1>
        </div>
        <div className="flex justify-end gap-8">
          <Link href="#about" className="hover:text-yellow-500">
            ABOUT
          </Link>
          <Link href="#program" className="hover:text-yellow-500">
            PROGRAM
          </Link>
          <Link href="#contact" className="hover:text-yellow-500">
            CONTACT
          </Link>
        </div>
      </div>

      {/*-----NAVBAR-SM-----*/}
      <div className="block md:hidden bg-black text-white font-bold py-4 px-6 w-full fixed">
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Open Heaven Foundation Logo"
            width={60}
            height={80}
            className="mb-2"
          />
        </div>
        <h1 className="text-lg text-center mb-8">
          OPEN HEAVEN LEARNING CENTRE
        </h1>
        <div className="flex justify-center text-xs gap-8">
          <Link href="#about" className="hover:text-yellow-500">
            ABOUT
          </Link>
          <Link href="#program" className="hover:text-yellow-500">
            PROGRAM
          </Link>
          <Link href="#contact" className="hover:text-yellow-500">
            CONTACT
          </Link>
        </div>
      </div>

      {/*-----CONTENTS-----*/}
      <div className="pt-52 md:pt-44 p-2 md:p-6">
        {/* -----ABOUT-XL-LG-MD----- */}
        <div className="hidden md:block bg-indigo-950 rounded-3xl text-white">
          <div className="grid grid-cols-2">
            <div className="p-6">
              {/* TITLE */}
              <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">
                <h1 className="text-yellow-500">THEOLOGICAL</h1>
                <h1>
                  SCHOOL
                  <span className="text-yellow-500 text-lg lg:text-2xl font-bold ml-4">
                    ONLINE CLASS
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-xl">
                {/* INTRODUCTION */}
                <p className="mb-2 lg:mb-4">
                  Yayasan Open Heaven membuka program kelas{" "}
                  <span className="font-bold">Teologi </span>dan{" "}
                  <span className="font-bold">Pendidikan Agama Kristen </span>
                  yang dapat di konversikan ke jenjang S1 dan S2.
                </p>
                {/* BENEFIT */}
                <h1 className="font-bold text-yellow-500 text-lg lg:text-2xl">
                  BENEFIT :
                </h1>
                <ul className="list-disc ml-5">
                  <li>
                    Kelulusan disertai ijazah Nasional Pendidikan Tinggi
                    terakreditasi.
                  </li>
                  <li>Kelas dilaksanakan secara full online.</li>
                  <li>
                    Kuliah metode block teaching dua minggu dalam satu bulan.
                  </li>
                  <li>Biaya pendidikan terjangkau.</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/theological-class.jpg"
                alt="Theological Class"
                width={1280}
                height={720}
                className="rounded-r-3xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* -----ABOUT-SM----- */}
        <div className="block md:hidden bg-indigo-950 rounded-3xl text-white text-sm p-4">
          {/* TITLE */}
          <div className="text-white font-bold text-2xl mb-2">
            <h1 className="text-yellow-500">THEOLOGICAL</h1>
            <h1 className="text-white">
              SCHOOL
              <span className="text-yellow-500 text-sm ml-4">ONLINE CLASS</span>
            </h1>
          </div>
          {/* INTRODUCTION */}
          <p className="mb-2">
            Yayasan Open Heaven membuka program kelas{" "}
            <span className="font-bold">Teologi </span>dan{" "}
            <span className="font-bold">Pendidikan Agama Kristen </span>
            yang dapat di konversikan ke jenjang S1 dan S2.
          </p>
          <div className="flex mb-2">
            <Image
              src="/theological-class.jpg"
              alt="Theological Class"
              width={1280}
              height={720}
              className="rounded-3xl w-full h-auto"
            />
          </div>
          {/* BENEFIT */}
          <h1 className="font-bold text-yellow-500 mb-1">
            BENEFIT :
          </h1>
          <ul className="list-disc ml-4">
            <li>
              Kelulusan disertai ijazah Nasional Pendidikan Tinggi
              terakreditasi.
            </li>
            <li>Kelas dilaksanakan secara full online.</li>
            <li>Kuliah metode block teaching dua minggu dalam satu bulan.</li>
            <li>Biaya pendidikan terjangkau.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
