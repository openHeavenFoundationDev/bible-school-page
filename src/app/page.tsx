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
        <title>Open Heaven Bible Education Centre</title>
        <meta name="description" content="Theological School Program" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <div className="bg-black text-white font-bold px-6 py-4 fixed top-0 w-full z-10">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Image
              src="/logo.png"
              alt="Open Heaven Foundation Logo"
              width={75}
              height={100}
              className="mr-6"
              layout="intrinsic"
            />

            <h1 className="text-3xl ">OPEN HEAVEN BIBLE EDUCATION CENTRE</h1>
          </div>

          <div className="bg-black text-white flex text-md justify-end gap-8 pt-16">
            <Link
              href={linkRegisration}
              target="_blank"
              className="hover:text-yellow-500"
            >
              REGISTRATION
            </Link>
            <Link href="#studyProgram" className="hover:text-yellow-500">
              PROGRAM
            </Link>
            <Link href="#contact" className="hover:text-yellow-500">
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-36">
        {/* Introduction */}
        <div className="bg-indigo-950 rounded-3xl grid grid-cols-2 mb-3">
          <div className="flex flex-col justify-between">
            <div className="px-8 pt-8 pb-4 rounded-tl-3xl">
              <h1 className="font-bold text-yellow-500 text-6xl">
                THEOLOGICAL
              </h1>
              <h1 className="font-bold text-white text-6xl mb-2">SCHOOL</h1>
              <h1 className="font-bold text-yellow-500 text-2xl">
                ONLINE CLASS
              </h1>
            </div>

            <div className="flex justify-center items-center gap-8 pb-8 rounded-bl-3xl">
              <div className="bg-black border-4 border-yellow-500 rounded-3xl flex flex-col justify-between items-center font-semibold text-white w-64 px-6 py-4">
                <div className="text-center mb-4">
                  <p className="mb-4">Gelombang I</p>
                  <p>1 Juni 2024 s/d</p>
                  <p>18 Juni 2024</p>
                </div>

                <Link
                  href={linkRegisration}
                  target="_blank"
                  className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                >
                  Daftar Sekarang
                </Link>
              </div>

              <div className="bg-black border-4 border-yellow-500 rounded-3xl flex flex-col justify-between items-center font-semibold text-white w-64 px-6 py-4">
                <div className="text-center mb-4">
                  <p className="mb-4">Gelombang II</p>
                  <p>1 September 2024 s/d</p>
                  <p>20 September 2024</p>
                </div>

                <Link
                  href={linkRegisration}
                  target="_blank"
                  className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center rounded-r-3xl">
            <Image
              src="/theological-class.jpg"
              alt="Theological Class"
              width={1280}
              height={720}
              className="rounded-r-3xl border-8 border-indigo-950"
              layout="intrinsic"
            />
          </div>
        </div>

        {/* BENEFIT */}
        <div className="bg-indigo-950 rounded-3xl grid grid-cols-2 mb-3">
          <div className="flex justify-start items-center rounded-l-3xl">
            <Image
              src="/graduation.jpg"
              alt="Graduation"
              width={1280}
              height={720}
              className="rounded-l-3xl border-8 border-indigo-950"
              layout="intrinsic"
            />
          </div>

          <div>
            <div className="p-8 rounded-tl-3xl">
              <h1 className="font-bold text-yellow-500 text-6xl mb-8">
                BENEFIT
              </h1>
              <ul className="list-disc text-white font-semibold text-lg">
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
        </div>

        {/* STUDY PROGRAM */}
        <div id="studyProgram" className="bg-indigo-950 rounded-3xl p-8 mb-3">
          <h1 className="font-bold text-yellow-500 text-center text-6xl mb-8">
            STUDY PROGRAM
          </h1>
          <div className="grid grid-cols-4 text-white">
            {/* PROGRAM STUDI TEOLOGI S1 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-64 h-80">
                <h2 className="font-bold text-center mb-4">
                  Sarjana Teologi (S. Th)
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={linkRegisration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI TEOLOGI S2 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-64 h-80">
                <h2 className="font-bold text-center mb-4">
                  Magister Teologi (M. Th)
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={linkRegisration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI PENDIDIKAN AGAMA KRISTEN S1 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-64 h-80">
                <h2 className="font-bold text-center mb-4">
                  Sarjana Pendidikan Agama Kristen (S. Pd)
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={linkRegisration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI PENDIDIKAN AGAMA KRISTEN S2 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-64 h-80">
                <h2 className="font-bold text-center mb-4">
                  Magister Pendidikan Agama Kristen (M. Pd)
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={linkRegisration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT PERSON */}
        <div id="contact" className="bg-indigo-950 rounded-3xl p-8 mb-3">
          <h1 className="font-bold text-yellow-500 text-center text-6xl mb-8">
            CONTACT PERSON
          </h1>
          <div className="grid grid-cols-2 gap-8 text-white">
            {/* PS. KEVIN */}
            <div className="flex justify-end items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-80 h-80">
                <h2 className="font-bold text-center text-xl mb-4">
                  Ps. Kevin Zefanya M.Th.
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/ps-kevin.png"
                    alt="Ps. Kevin"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={waPsKevin}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Hubungi Via WA
                  </Link>
                </div>
              </div>
            </div>

            {/* PS. DANIEL */}
            <div className="flex justify-start items-center">
              <div className="bg-black border-4 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-80 h-80">
                <h2 className="font-bold text-center text-xl mb-4">
                  Ps. Daniel M.Th.
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/ps-daniel.png"
                    alt="Ps. Daniel"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                    layout="intrinsic"
                  />
                  <Link
                    href={waPsDaniel}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Hubungi Via WA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black font-semibold text-white text-center p-8">
        <p className="mb-6">&copy; 2024 Open Heaven Bible Education Centre</p>

        <Link
          href={mapCabangBali}
          target="_blank"
          className="flex justify-center items-center hover:text-yellow-500 mb-6"
        >
          <Image
            src="/map.png"
            alt="Map"
            width={24}
            height={24}
            className="mr-2"
            layout="intrinsic"
          />
          <p>
            Kantor Cabang Bali: Jl.Kertapura Gg.Segina No.25 Pemecutan
            Klod Denpasar
          </p>
        </Link>

        <Link
          href={mapCabangPapua}
          target="_blank"
          className="flex justify-center items-center hover:text-yellow-500"
        >
          <Image
            src="/map.png"
            alt="Map"
            width={24}
            height={24}
            className="mr-2"
            layout="intrinsic"
          />
          <p>
            Kantor Cabang Papua: Jl. Malibela KM 11 Kota Sorong Papua
            Barat Daya
          </p>
        </Link>
      </footer>
    </main>
  );
}
