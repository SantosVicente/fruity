import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-32 py-4 select-none">
      <a className="cursor-pointer pointer-events-none" href="/">
        <img src="/Fruity.svg" alt="Logo" />
      </a>

      <div className="ml-20 z-50">
        <Button
          variant="ghost"
          className="hover:bg-zinc-100 hover:bg-opacity-30 uppercase"
        >
          Comprar
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-zinc-100 hover:bg-opacity-30 uppercase"
        >
          Sobre Nós
        </Button>

        <Button
          variant="ghost"
          className="hover:bg-zinc-100 hover:bg-opacity-30 uppercase"
        >
          Contato
        </Button>
      </div>

      <div className="flex items-center gap-1 justify-center">
        <Button variant="ghost" className="hover:bg-transparent uppercase">
          Carrinho
        </Button>
        <p className="-mt-1 font-bold">|</p>
        <Button variant="ghost" className="hover:bg-transparent uppercase">
          Cadastro
        </Button>
      </div>
    </header>
  );
};
