"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRef, useState } from "react";
import { ContactForm } from "@/components/ContactForm/contact-form";
import { set } from "zod";

export default function Home() {
  const scrollRef: any = useRef({});
  const [open, setOpen] = useState(false);

  const scrollToElement = (e: any, id: string) => {
    e.preventDefault();
    if (scrollRef.current[id]) {
      scrollRef.current[id].scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <nav className="position-sticky animate-nav stroke flex items-center justify-between bg-[#008896]  px-[48px] py-[16px] ">
          <Image
            className="text-black"
            src="/images/logo/logo.svg"
            alt="logo"
            width={134}
            height={39}
          />
          <div className="flex items-center text-white ">
            <Link href="/dashboard" onClick={(e) => scrollToElement(e, "invoiceElectronic")}>
              <span className="link-7 mx-2">Service</span>
            </Link>

            <span className="link-7 mx-2" onClick={(e) => scrollToElement(e, "planes")}>PYMES</span>
            <span className="link-7 mx-2" onClick={(e) => scrollToElement(e, "clients")}>LEMP PRO</span>
          </div>
          <div>
            <Link href="/dashboard">
              <Button variant={"white"} className="text-black">
                Iniciar sesion
              </Button>
            </Link>
          </div>
        </nav>
      <div className="w-screen">
        <div className="grid h-[837px] grid-cols-2 items-center bg-[#008896]">
          <div>
            <div className="px-[48px]">
              <h1 className="pe-[114px] text-[66px] font-bold leading-[67px] text-white">
                ¿Buscas un software que haga todo por ti?
              </h1>
              <p className="mt-7 text-[26px] text-white">
                Todo lo que necesitas para tomar el control de tu negocio en un
                solo lugar.
              </p>
            </div>
            <Button
              variant={"white"}
              className="mt-8 w-full justify-start rounded-none px-[48px] py-[32px] text-[33px] font-bold text-[#008896]"
            >
              Fácil de usar. Regístrate gratis
            </Button>
            <div className="px-[48px]">
              <p className="mt-7 text-[26px] text-white">
                Software Contable, de Facturación y Nómina Electrónica para
                Pymes
              </p>
            </div>
          </div>
          <Image
            src="/images/home/hero-setion.png"
            className="justify-self-center"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
        <div
          className="pt-19 grid grid-cols-2"
          id="invoiceElectronic"
          ref={(el: any) => (scrollRef.current["invoiceElectronic"] = el)}
        >
          <Image
            src="/images/home/section2-svg1.svg"
            className="justify-self-center"
            alt="hero"
            width={596}
            height={367}
          />
          <div className="flex flex-col justify-center  px-[48px]">
            <h2 className="subtitle-text font-bold text-black">
              Facturación electrónica
            </h2>
            <p className="fontsize-23 mt-7 pe-[168px]">
              {" "}
              Crea facturas electrónicas estándar, de exportación o con AIU
              válidas ante la DIAN.
            </p>
          </div>
        </div>
        <div className="mt-19 grid grid-cols-2">
          <div className="flex flex-col justify-center px-[48px]">
            <h2 className="subtitle-text text-end font-bold text-black">
              Nómina Electrónica
            </h2>
            <p className="fontsize-23 mt-7 ps-[168px] text-end">
              {" "}
              Liquida, consulta y descarga tus documentos de pago de nómina
              desde el portal o el APP móvil de forma fácil.
            </p>
          </div>
          <Image
            src="/images/home/section3-svg2.svg"
            className="justify-self-center"
            alt="hero"
            width={596}
            height={367}
          />
        </div>
        <div className="mt-19 grid grid-cols-2">
          <Image
            src="/images/home/section3-svg3.svg"
            className="justify-self-center"
            alt="hero"
            width={596}
            height={367}
          />
          <div className="flex flex-col justify-center px-[48px]" >
            <h2 className="subtitle-text font-bold text-black">
              Software Contable
            </h2>
            <p className="fontsize-23 mt-7 pe-[168px]">
              {" "}
              Simplifica el proceso contable de tu empresa con la generación
              automática de tus asientos contables.
            </p>
          </div>
        </div>

        <div className="pt-22"  ref={(el: any) => (scrollRef.current["planes"] = el)}>
          <h3 className="fontsize-48 text-center font-bold text-black">
            Planes
          </h3>
          <p className=" fontsize-30 mt-7 px-[518px] text-center text-black">
            Todos los planes incluyen Facturación Electrónica gratis si tienes
            menos de 2 empleados.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-19">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* PYMES Plan */}
          <Card className="flex flex-col bg-white">
            <CardHeader>
              <CardTitle className="fontsize-40 text-center font-bold text-black">
                PYMES
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col items-center">
              <div className="text-center">
                <p className="fontsize-30 font-semibold text-black">
                  $80.000 / Pago mensual
                </p>
                <p className="fontsize-30 mt-6 font-semibold text-black">
                  $59.000 / Mes (Pago anual)
                </p>
              </div>
              <Button className="fontsize-32 mt-7 w-full bg-[#00454D] py-[26px] text-white hover:bg-[#004D4D]/90" onClick={() => setOpen(true)}>
                ¡Empieza GRATIS!
              </Button>
              <ul className="fontsize-23 mt-6 space-y-2 text-center text-black">
                <li>Facturas ilimitadas al mes</li>
                <li>1 Usuario con acceso</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col bg-white">
            <CardHeader>
              <CardTitle className="fontsize-40 text-center font-bold text-black">
                LEMP PRO
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col items-center" >
              <div className="text-center">
                <p className="fontsize-30 font-semibold text-black">
                  $120.000 / Pago mensual
                </p>
                <p className="fontsize-30 mt-6 font-semibold text-black">
                  $90.000 / Mes (Pago anual)
                </p>
              </div>
              <Button className="fontsize-32 mt-7 w-full bg-[#00454D] py-[26px] text-white hover:bg-[#004D4D]/90" onClick={() => setOpen(true)}>
                ¡Empieza GRATIS!
              </Button>
              <ul className="fontsize-23 mt-6 space-y-2 text-center text-black">
                <li>Facturas ilimitadas al mes</li>
                <li>3 Usuario con acceso</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="pt-19" ref={(el: any) => (scrollRef.current["clients"] = el)}>
        <h3 className="fontsize-40 text-center font-bold text-black">
          ¿Qué dicen nuestros clientes?
        </h3>
      </div>

      <div className="mt-10 grid gap-6 bg-black px-[48px] py-[60px] md:grid-cols-3 md:gap-7">
        <Card className="flex flex-col bg-white">
          <CardContent className="flex flex-1 flex-col pt-7">
            <div>
              <p className="fontsize-18 font-italic text-black">
                “Me gusta porque no debes ser un contador para manejarlo, es
                intuitivo.”
              </p>
            </div>
            <div className="mt-4 space-y-0 ps-3">
              <p className="text-[18px] font-semibold text-black">
                Jaime Zambrano
              </p>
              <p className="text-[14px] text-black">Gerente Simbiotica</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-white">
          <CardContent className="flex flex-1 flex-col pt-7">
            <div>
              <p className="fontsize-18 font-italic text-black">
                “Todos los módulos son similares, cuando aprendes un módulo los
                otros se vuelven predecibles.”
              </p>
            </div>
            <div className="mt-4 space-y-0 ps-3">
              <p className="text-[18px] font-semibold text-black">
                Isabel Sánchez
              </p>
              <p className="text-[14px] text-black">CEO Nightlife</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-white">
          <CardContent className="flex flex-1 flex-col pt-7">
            <div>
              <p className="fontsize-18 font-italic text-black">
                “Me gusta porque puedo gestionar contablemente mi empresa desde
                cualquier lado del mundo.”
              </p>
            </div>
            <div className="mt-4 space-y-0 ps-3">
              <p className="text-[18px] font-semibold text-black">
                Andrés Manrique
              </p>
              <p className="text-[14px] text-black">Gerente General Motors</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-19 grid gap-6 bg-black px-[68px] py-[70px] md:grid-cols-2 ">
        <div className="grid grid-cols-2">
          <div className="space-y-4">
            <h4 className=" font-bold text-white">Enlaces</h4>
            <p className="text-white">Política de Privacidad</p>
            <p className="text-white">Términos de Uso Lempsoft</p>
            <p className="text-white">Peticiones, quejas y reclamos</p>
          </div>
          <div className="space-y-4">
            <h4 className=" font-bold text-white">Contacto</h4>
            <p className="text-white">notificaciones@lempsoft.co</p>
          </div>

          <div className="mt-10 space-y-4">
            <h4 className=" font-bold text-white">Dirección</h4>
            <p className="text-white">Calle 45 No 11-28 Medellín – Colombia</p>
          </div>
          <div className="mt-10 space-y-4">
            <h4 className=" font-bold text-white">Conéctate</h4>
            <div className="flex w-44 justify-between">
              <Link href="#" className="link-102">
                <Image
                  src="/images/icon/facebook-icon.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="link-102">
                <Image
                  src="/images/icon/instagram-icon.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="link-102">
                <Image
                  src="/images/icon/youtube-icon.svg"
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/icon/icon-secundary.svg"
            alt="logo"
            width={276}
            height={232}
          />
        </div>
      </div>
      <ContactForm open={open} setOpen={() => setOpen(!open)} />
    </>
  );
}
