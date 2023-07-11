/* THIS IS A DEMO APP */
import Keylime, {
  useState,
  element,
  text,
  useEffect,
  KeylimeNode,
} from "create-keylime";

const DOM = document.getElementById("my-app");
Keylime.setRoot(DOM);

import "./style.css";

function getRandomMovie(max: number) {
  return Math.floor(Math.random() * max);
}

const MovieCard = (src: string, title: string): KeylimeNode => {
  return element("div", { className: "movieCard" }, [
    element(
      "img",
      {
        className: "image",
        src,
      },
      []
    ),
    element("h2", { className: "title" }, [text(title)]),
  ]);
};

const myComponent = (): KeylimeNode => {
  const [movies, setMovies] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(async () => {
    const response = await fetch("https://ghibliapi.vercel.app/films/");
    const movies = await response.json();

    setMovies(movies);
    setIndex(getRandomMovie(movies.length));
  }, []);

  if (!movies) return null;

  return element("div", { className: "container" }, [
    element("h1", { className: "pageTitle" }, [text("Welcome to Keylime 👋")]),
    element("div", { className: "taglineContainer" }, [
      element("p", { className: "desc" }, [
        text("Get a Ghibli movie to watch :)"),
      ]),
      element(
        "u",
        {
          className: "linkButton",
          on: {
            click: () => setIndex(getRandomMovie(movies.length)),
          },
        },
        [text("Click me")]
      ),
            element(
        "u",
        {
          className: "linkButton",
          on: {
            click: () => setIndex(getRandomMovie(movies.length)),
          },
        },
        [text("Click me")]
      ),
    ]),
    MovieCard(movies[index].image, movies[index].title),
    element("a", {className: "link", href:"https://github.com/annxiesun/keylime"}, [text("built with love from scratch ♡")])
  ]);
};

Keylime.renderRoot(myComponent);
