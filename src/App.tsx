import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Header } from "./components/header/header";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function App() {
  const [page, setPage] = useState(1);

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber == 1 || pageNumber == 2 || pageNumber == 3) {
      setPage(pageNumber);
    }

    if (pageNumber == 0) {
      setPage(3);
    }

    if (pageNumber == 4) {
      setPage(1);
    }
  };

  const getBackgroundColor = () => {
    switch (page) {
      case 1:
        return "#F79C93";
      case 2:
        return "#CEE79B";
      case 3:
        return "#B5AAF7";
      default:
        return "#F79C93";
    }
  };

  const getTextColor = () => {
    switch (page) {
      case 1:
        return "#B83224";
      case 2:
        return "#077334";
      case 3:
        return "#433EB2";
      default:
        return "#B83224";
    }
  };

  const getImage = () => {
    switch (page) {
      case 1:
        return "/apple";
      case 2:
        return "/pear";
      case 3:
        return "/exotic";
      default:
        return "/apple";
    }
  };

  const getTitle = () => {
    switch (page) {
      case 1:
        return "Apple";
      case 2:
        return "Pear";
      case 3:
        return "Exotic";
      default:
        return "Apple";
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden select-none">
      <div
        className="background-transition transition-all"
        style={{ background: getBackgroundColor() }}
      />
      <Header />

      <div className="h-full flex-col flex items-center relative gap-52">
        <div className="w-full absolute z-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={page ? page : "empty"}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={getImage() + "-fruit.png"}
                alt="fruits"
                className="w-full pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute top-0 z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={page ? page : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/sheets.png"
                alt="sheets"
                className="pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute top-20 z-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={page ? page : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={getImage() + ".png"}
                alt="apple image"
                className="w-[19rem] pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <h1 className="text-[25rem] text-slate-100 font-bold antialiased -mt-20 select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={page ? page : "empty"}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {getTitle()}
            </motion.div>
          </AnimatePresence>
        </h1>
        <div className="flex gap-8 z-50">
          <Button
            size={"icon"}
            className="bg-transparent hover:bg-transparent cursor-pointer"
            onClick={() => {
              handleChangePage(page - 1);
            }}
          >
            <LucideChevronLeft size={40} style={{ color: getTextColor() }} />
          </Button>
          <Button
            className="bg-slate-200 hover:bg-slate-100 font-bold rounded-3xl uppercase shadow-2xl"
            style={{ color: getTextColor() }}
          >
            Comprar
          </Button>
          <Button
            size={"icon"}
            className="bg-transparent hover:bg-transparent cursor-pointer"
            onClick={() => {
              handleChangePage(page + 1);
            }}
          >
            <LucideChevronRight size={40} style={{ color: getTextColor() }} />
          </Button>
        </div>
      </div>
    </div>
  );
}
