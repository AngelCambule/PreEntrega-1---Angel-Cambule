import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

const first_src = 'https://http2.mlstatic.com/D_NQ_NP_619060-MLA69336760154_052023-O.webp';
const second_src = 'https://d3ugyf2ht6aenh.cloudfront.net/stores/186/023/products/cobre-negro71-b7455f4253c47c1b6c16521331056434-640-0.jpg'
const third_src = 'https://d2r9epyceweg5n.cloudfront.net/stores/002/222/822/products/17f1cac3-998d-4022-99a7-c754185e0f981-9770b34372516b2d6516751313111757-640-0.jpeg'

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleControls'), 2000);
  }

  render() {
    return (
        <div style={{justifyContent:"center", display:"flex", marginTop:"70px"}}>
      <Carousel  w="30" id="carouselExampleCaptions" >
        <Carousel.Indicators>
          <Carousel.Indicator style={{backgroundColor:"black"}} target="#carouselExampleCaptions" to="0" active />
          <Carousel.Indicator style={{backgroundColor:"black"}} target="#carouselExampleCaptions" to="1" />
          <Carousel.Indicator style={{backgroundColor:"black"}} target="#carouselExampleCaptions" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item active >
            <BImg display="block" w="30" src={first_src} style={{height:"550px"}}/>
            <Carousel.Caption >
              <h5 style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px"}}>SILLON DOBLE ACAPULCO</h5>
              <Link to="/products"><p style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px", display:"inline-block", padding:"5px"}}>Ver Todo</p></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item><BImg display="block" src={second_src} style={{height:"550px"}} />
          <Carousel.Caption>
              <h5 style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px"}}>JUEGO DE SILLONES ACAPULCO</h5>
              <Link to="/products"><p style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px", display:"inline-block", padding:"5px"}}>Ver Todo</p></Link>
            </Carousel.Caption></Carousel.Item>
          <Carousel.Item><BImg display="block" src={third_src} style={{height:"550px"}}/>
          <Carousel.Caption >
              <h5 style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px"}}>JUEGO DE SILLONES ASUNCION</h5>
              <Link to="/products"><p style={{color:"beige", backgroundColor: 'rgba(0,0,0,.75)' ,borderRadius:"20px", display:"inline-block", padding:"5px"}}>Ver Todo</p></Link>
            </Carousel.Caption></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev style={{backgroundColor:"black", width:"30px"}} href="#carouselExampleCaptions">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next style={{backgroundColor:"black", width:"30px"}} href="#carouselExampleCaptions">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel></div>
    )
  }
}