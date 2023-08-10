import anime from "animejs/lib/anime.es.js";

const Animation = () => {


  return (
    <div>
      anime({
       targets: '.duration-demo .el',
        translateX: 250,
        duration: 3000
});
    </div>
  )
}

export default Animation;
