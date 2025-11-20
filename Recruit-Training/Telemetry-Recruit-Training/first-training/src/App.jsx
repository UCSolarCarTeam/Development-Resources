import "./App.css";

/**
 * Array containing snow leopard images including a title for the image 
 */

const snowLeopardGrid = [
  {
   title: "Image #1", 
   src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG",

  },
  {
   title: "Image #2", 
   src: "https://files.worldwildlife.org/wwfcmsprod/images/Snow_Leopard_hero_species_2021/hero_small/8hwbyi3z8p_species_snowleopard_hero.jpg",

  },
  {
   title: "Image #3", 
   src: "https://images.saymedia-content.com/.image/t_share/MTc2NDYyMTcxMDg4Mjk5OTk0/the-endangered-snow-leopard.jpg",

  },
  {
   title: "Image #4", 
   src: "https://cdn.hswstatic.com/gif/gettyimages-1789936680.jpg",

  },
  {
   title: "Image #5", 
   src: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2018/05/23/b70f3e2e-5d99-11e8-a4de-9f5e0e4dd719_1280x720_095446.JPG?itok=b7E9r0SX",

  },
  {
   title: "Image #6", 
   src: "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg",

  },
];

/**
 * Displays the snow leopards and gets a title and src through props
 */

function ImageBox({title, src}){
  return (
    <div className ="image-box">
      <h2 className="image-title">{title}</h2>
      <img className="image-card" src={src} alt={title}/>
    </div>
  );
}

/**
 * Maps over an array of images and renders an ImageBox for each item
 */

function Grid({images}) {
  return (
    <main className="grid">
      {images.map((image) => (
        <ImageBox key={image.title} title={image.title} src ={image.src}/>
      ))}
    </main>
  );
}
function App() {
  return (
    <div className ="app">
    <h1 className="page-title">Snow Leopard: Images</h1>
    <Grid images={snowLeopardGrid}/>
  </div>
  ); 
}

export default App;
