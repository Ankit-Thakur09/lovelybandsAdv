
import Slider from '../../components/Slider/Slider'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import Homepara from '../../components/HomePara/Homepara'
import FAQ from '../../components/FAQs/Faq'
import '../Home/home.css'


function Home() {
    return (
      <div>
          <Slider />
        <PopularProducts />
        <Homepara />
        <FAQ />
      </div>
    );
}

export default Home