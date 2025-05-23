"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function SignUpMain() {
  const t = useTranslations("signup");
  return (
    <div className="relative flex items-center justify-center w-180 h-135 border-2 rounded-4xl mx-5">
      {/* Capa de fondo con opacidad */}
      <div className="absolute inset-0 bg-white opacity-50 rounded-4xl"></div>

      {/* Contenido que NO es afectado por la opacidad */}
      <div className="relative flex w-full p-4">
        <Image src="/buso.png" alt="Logo" width={100} height={100} className="flex w-1/2 hidden  md:block " />
        {/* Sección de formulario */}
        <div className="w-full md:w-1/2 p-6 text-white items-center justify-center">
          <h2 className=" text-3xl font-bold text-center">{t('create')}</h2>
          <p className="text-sm mt-1 text-center">{t('already')} <Link href="/login" className="text-blue-400">{t('login')}</Link></p>

          <div className="mt-8 space-y-3">
            <div className="flex gap-3">
              <input type="text" placeholder={t('firstName')} className="w-1/2 p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
              <input type="text" placeholder={t("lastName")} className="w-1/2 p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
            </div>
            <input type="email" placeholder={t('email')} className="w-full p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
            <input type="password" placeholder={t('password')} className="w-full p-2 bg-gray-700 rounded-md outline-none text-[14px]"/>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4"/>
              <label htmlFor="terms" className="text-xs">{t('agree')}<Link href="#" className="text-blue-400">{t('terms')}</Link></label>
            </div>

            <button className="w-full text-[13px] py-3 mt-5 bg-black rounded-md hover:bg-gray-900 transition">{t("create")}</button>
          </div>

            {/* Divider */}
            <div className="my-4 flex items-center">
              <hr className="w-full border-white"/>
              <span className="px-5 text-white text-sm whitespace-nowrap">{t("or")}</span>
              <hr className="w-full border-white"/>
            </div>

          {/* Botones de redes sociales */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 w-1/2 p-2 border rounded-md hover:bg-gray-700 transition">
              <Image width={100} height={100} src="/logo_google.png" alt="Google" className="w-8"/>
              Google
            </button>
            <button className="flex items-center gap-2 w-1/2 p-2 border rounded-md hover:bg-gray-700 transition">
              <Image width={100} height={100} src="/logo_apple.png" alt="Apple" className="w-8"/>
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
