import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

function App() {
  const links = [
    {
      title: "Twitter Link",
      id: "twitter",
      link: "https://training.zuri.team/",
    },
    {
      title: "Zuri Team",
      id: "btn__zuri",
      link: "https://training.zuri.team/",
    },
    { title: "ZuriBooks", id: "books", link: "http://books.zuri.team" },
    {
      title: "python Books",
      id: "books_python",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>",
    },
    {
      title: "Background Check For Coders",
      id: "pitch",
      link: " https://background.zuri.team",
    },
    {
      title: "Design Books",
      id: "book__design",
      link: "https://books.zuri.team/design-rules ",
    },
  ];
  return (
    <div className="App">
      <header>
        <img
          id="profile__img"
          src="https://images.pexels.com/photos/3280901/pexels-photo-3280901.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-3280901.jpg&fm=jpg&_gl=1*12ka6bq*_ga*MTQ4MjI2Mjc4Ni4xNjY2MjQ3MDc2*_ga_8JE65Q40S6*MTY2NjgwNzUxMi4yLjEuMTY2NjgwNzU1OS4wLjAuMA.."
          alt="img"
        />
        <h1 id="twitter">Nachukwu</h1>
        {/* <p id="slack">jemienachukwu</p> */}
      </header>
      <div className="container">
        {links.map((item) => (
          <div key={item.id} className="btn-container">
            <a href={item.link}>
              <button>{item.title}</button>
            </a>
          </div>
        ))}
      </div>
      <div className="icons">
        <FaSlack className="icon" />
        <FaGithub className="icon" />
      </div>
      <footer>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABoCAMAAAAKAtgrAAAAUVBMVEX///8AAAB/f3+/v78/Pz/Pz8/v7+8QEBDf398gICCfn5+vr69vb28wMDCPj49fX19QUFDnMyv85eT0paHzmZX72NfoPzjucmz5y8nwf3r+8vEo50vQAAAB20lEQVRoge2V63KkIBBGae6geMlms7t5/wdNtzqjESaTSaryY+s7VWMJDXhsWkYpAAAAAAAAAAAAAAAAAAD8BGajDgyHhjPx0YWzza2VGtBGFQh0mGlJH+10bVyhr1OIPnawAlGoAoW6Wwr6XeuuQgn3jQeiO4O+pfAJHFHPV9vLs6z8usmq3rr3Co77CxWncqIkg3WiqZOJ1hR9jao4URijKOgURq+WlbId+pR6f0OBZ/LVED9dSVHwtvC9PWZGFMxaNIEXZ6yalmYn/YH0NcpjS+JuvXZMallpa5W2QU/BnRW0aypoyZhZc+xkWqYk/WWIe5TIqU42guODrLcqcMvQsb52zFawR4WsVFNBXdbTyyOWQvbcH9Uhyn2TkfiolN8VZJvHZn34JLm6KMRVwewKv55/f6RgrVv796gfg2RkLcddQS8Jbylw7fhNgW/0WeF5nl8aCvyC3TIxXx6+R6MsYyuF5FUMlGsDdz2afKBU6KzwZ57np7NClt3nKg42cH5PCj6k0XJmzwrL6NT4JMx+OuZAIZ8V/r7M/6osyHaPnHAp+FhlQfM+2FgpjPx+x++8TeurfX26N+tTiNCtQ+GHeOis/G8V4uP/9gAAAAAAAAAAAAAAAAC+wBsB6QuYYUZ5TQAAAABJRU5ErkJggg=="
          alt="img"
          className="zuri"
        />
        <p>HNG Internship 9 Frontend Task</p>

        <img
          src="data:image/png;base64,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"
          alt="img"
          className="ifg"
        />
      </footer>
    </div>
  );
}

export default App;
