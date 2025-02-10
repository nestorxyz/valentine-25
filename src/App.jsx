import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Di si por favor',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 1,
      description: 'Piénsalo de nuevo.',
      img: 'https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif',
    },
    {
      id: 2,
      description: 'Vamos, atrévete a decir que sí.',
      img: 'https://media.tenor.com/DTmYqda3ZokAAAAi/peachandgoma.gif',
    },
    {
      id: 3,
      description: 'No tengas miedo, será genial.',
      img: 'https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif',
    },
    {
      id: 4,
      description: 'Confía en mí, será divertido.',
      img: 'https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif',
    },
    {
      id: 5,
      description: 'No tengas dudas, te hará sonreír.',
      img: 'https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif',
    },
    {
      id: 6,
      description: 'Te prometo que será inolvidable.',
      img: 'https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif',
    },
    {
      id: 7,
      description: 'No dejes que el miedo te detenga.',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 8,
      description: 'Confía en el destino, nos está dando una señal.',
      img: 'https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif',
    },
    {
      id: 9,
      description: 'Confía en mí.',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 10,
      description: 'No te arrepentirás.',
      img: 'https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif',
    },
    {
      id: 11,
      description: 'Ya pon que siiii',
      img: 'https://media.tenor.com/_4KFcz84OGMAAAAj/cute.gif',
    },
    {
      id: 12,
      description: 'Dale, no seas mala',
      img: 'https://media.tenor.com/Az64YfoL7JcAAAAj/rawr.gif',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="font-bold text-5xl text-center">
            ¿Quieres ser mi San Valentin?
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif'
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto object-cover h-[200px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                mixpanel.track('Boton Si Clickeado');

                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 200,
                });
              }}
              className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}
            >
              Si
            </button>
            <button
              className="bg-red-500 text-white min-w-48 font-bold p-2 rounded-md text-xl"
              onMouseOver={randomResponse}
              style={{
                position: position,
                top: `${buttonPosition.top}%`,
                left: `${buttonPosition.left}%`,
              }}
            >
              {Object.keys(randomValor).length === 0
                ? 'No'
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? '¿Quieres ser mi San Valentin?'
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            Sabia que dirias que si ❤️!
          </h1>
          <img
            src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = 'Sabia que dirias que si ❤️!')}</span>
        </div>
      )}
    </main>
  );
}

export default App;
