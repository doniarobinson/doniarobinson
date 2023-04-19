const PhotoGallery: React.FunctionComponent = () => {
  return (
    <section className="container">
      <a className="anchor" id="about" aria-hidden="true"></a>
      <h2>
        <span>&#128105;&#127996;&#8205;&#128187;</span> About
      </h2>
      <p>
        People sometimes ask me what I mean by "full stack developer before it
        was cool." I've been developing on the web since before there were even
        distinctions been frontend, backend, and full stack developers. If you
        wanted to build a website back then, you were going to have to know your
        way around an Apache server and quite a bit of PHP. 🤫
      </p>

      <p>
        A lot has changed, and I like the idea that you don't have to do
        frontend <em>and</em> backend work if you don't want to.
      </p>

      <p>
        What else do I like? Travel, gardening, and seeing underrepresented
        people succeed in tech.
      </p>
    </section>
  );
};

export default PhotoGallery;
