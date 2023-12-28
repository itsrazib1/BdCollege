

const Company = () => {
  return (
    <section>
      <div className="py-20">
        <div className="grid sm:grid-cols-6 grid-cols-3 gap-10 px-10 py-10  sm:text-4xl  justify-center" >
          <div  >
            <h3 className="flex align-items-center gap-1">
              <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/008/385/863/non_2x/vimeo-social-media-icon-logo-design-symbol-illustration-free-vector.jpg" alt="" /> Vimeo
            </h3>
          </div>

          <div >
            <h3 className=" flex align-items-center gap-1">
              <img className="h-8" src="https://static-00.iconduck.com/assets.00/pinterest-icon-2048x2048-d7p0u7c5.png" alt="" /> Pinterest
            </h3>
          </div>

          <div >
            <h3 className=" flex align-items-center gap-1">
              <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/023/986/870/original/dribbble-logo-dribbble-logo-transparent-dribbble-icon-transparent-free-free-png.png" alt="" /> Dribble
            </h3>
          </div>

          <div >
            <h3 className=" flex align-items-center gap-1">
              {" "}
              <img className="h-8" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202311162056" alt="" /> Apple
            </h3>
          </div>

          <div >
            <h3 className=" flex align-items-center gap-1">
              {" "}
              <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" alt="" /> Finder
            </h3>
          </div>

          <div >
            <h2 className=" flex align-items-center gap-1">
              {" "}
              <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" /> Google
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
