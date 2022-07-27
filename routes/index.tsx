/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`mx-auto w-full h-screen bg-zinc-900 bg-cover bg-center relative`}
          style={`background: url("/img/home-img.webp")`}>
      <div class={tw`flex flex-col justify-center items-center w-full h-screen bg-transparent`}>
        <a href="/" class={tw`w-auto h-auto cursor-pointer`}>
          <div class={tw`w-auto h-auto rounded-lg bg-white hover:bg-gray-100 p-8 border border-black shadow-xl`}>
            <img
              src="/site/logo-m1.webp"
              class={tw`w-12 h-auto`}
              alt="Musclefirst Logo"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
