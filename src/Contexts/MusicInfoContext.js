import { createContext } from "react";

export const MusicInfoContext = createContext();

export const MusicInfoProvider = (props) => {
  const music = [
    {
      id: "1",
      image: "https://c.tenor.com/kuue1kTkjysAAAAC/rain-sailor.gif",
      imageCredit: "https://tenor.com/view/rain-sailor-moon-gif-20481725",
      title: "rain",
      youtube:
        "https://www.youtube.com/watch?v=q76bMs-NwRk",
    },
    {
      id: "2",
      image: "https://media0.giphy.com/media/SWhsTrEYSrGd4CAhNC/giphy.gif?cid=ecf05e47p52d27fgwnp1fvyy4czk8c3qmldmekdm1mhs1j8k&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/animatr-anime-aesthetics-anime90s-waves-SWhsTrEYSrGd4CAhNC",
      title: "ocean",
      youtube:
        "https://www.youtube.com/watch?v=HCx_L2QwxX4",
    },
    {
      id: "3",
      image: "https://c.tenor.com/2FIMeyZLsD8AAAAC/anime-1980s.gif",
      imageCredit: "https://tenor.com/view/anime-1980s-80s-city-night-gif-16335334",
      title: "traffic",
      youtube:
        "https://youtu.be/iA0Tgng9v9U",
    },
    {
      id: "4",
      image: "https://c.tenor.com/L0-NTy43YZIAAAAC/anime-forest.gif",
      imageCredit: "https://tenor.com/view/anime-forest-scenery-sunrays-gif-5261536",
      title: "forest",
      youtube: "https://youtu.be/o-9ayXhpbyM",
    },
    {
      id: "5",
      image: "https://media2.giphy.com/media/3o7WTQaaMsNunSUImY/giphy.gif?cid=ecf05e47drzybb2zf07xm2wd7kgn0zte2xqh57669hdjj394&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/animated-illustration-starry-night-3o7WTQaaMsNunSUImY",
      title: "silence",
      youtube: "",
    },
    {
      id: "6",
      image: "https://c.tenor.com/9b3VtLqXRAYAAAAC/another-anime.gif",
      imageCredit: "https://tenor.com/view/another-anime-kouichi-sakakibara-blink-relaxing-gif-18544197",
      title: "white noise",
      youtube:
        "https://youtu.be/FdN1pnEaJs0",
    },
    {
      id: "7",
      image: "https://c.tenor.com/HQHhPkADoWoAAAAC/medabots-metabee.gif",
      imageCredit: "https://tenor.com/view/medabots-metabee-calor-ventilador-hot-gif-18300475",
      title: "running fan",
      youtube:
        "https://youtu.be/_D6Zi9OlUVM",
    },
    {
      id: "8",
      image: "https://media3.giphy.com/media/GQbAyoxyDzWQE/giphy.gif?cid=ecf05e47ojvbl3sf06xjs5a8wfwx9r6d7blquw01jzuvtd73&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/piano-anime-gif-GQbAyoxyDzWQE",
      title: "river flows in you - yiruma 이루마",
      youtube:
        "https://youtu.be/7maJOI3QMu0",
    },
    {
      id: "9",
      image: "https://media2.giphy.com/media/PQaRWf6SOtCAU/giphy.gif?cid=790b7611d9d84a262a48592ae01bd6b35a1182cd9db077dd&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/maudit-kikis-delivery-service-PQaRWf6SOtCAU",
      title: "[bt21] koya's sleep music",
      youtube: "https://youtu.be/dkCW7cfrgBs",
    },
    {
      id: "10",
      image: "https://media4.giphy.com/media/U43yQY2sEqdtgmWkIY/giphy.gif?cid=ecf05e47l1fkswff31pyr6g1sab7gccd441r7ribb5fni9oa&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/fireflies-larapaulussen-lara-paulussen-U43yQY2sEqdtgmWkIY",
      title: "different silence",
      youtube: "",
    },
    {
      id: "11",
      image: "https://media1.giphy.com/media/DoIquD1MhDGMw/giphy.gif?cid=ecf05e479yii17y46b92bpnkkgc59ahqbo1caaihcpjfubt9&rid=giphy.gif&ct=g",
      imageCredit: "https://giphy.com/gifs/cat-kitten-DoIquD1MhDGMw",
      title: "cat purring",
      youtube:
        "https://youtu.be/DeTbhbu-1D8",
    },
    {
      id: "12",
      image: "https://c.tenor.com/JzgronqM0nsAAAAd/dancing-steve.gif",
      title: "minecraft soundtrack",
      imageCredit: "https://tenor.com/view/dancing-steve-minecraft-moves-gif-16034488",
      youtube:
        "https://youtu.be/Dg0IjOzopYU",
    },
    {
      id: "13",
      image: "https://c.tenor.com/04l8AnfK5ckAAAAC/charizard-pokemon-charizard.gif",
      imageCredit: "https://tenor.com/view/charizard-pokemon-charizard-flamethrower-angry-mad-gif-23766460",
      title: "dinosaur",
      youtube:
        "https://youtu.be/1vBsBa9KS2c",
    },
    
   
  ];

  return (
    <MusicInfoContext.Provider value={music}>
      {props.children}
    </MusicInfoContext.Provider>
  );
};
