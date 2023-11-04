import HomeCrousel from '../components/HomeCrousel';
import MotionHoc from './MotionHoc';

const HomeComponent = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            color: 'red',
          }}
        >
          I
        </span>
        <span
          style={{
            color: 'red',
          }}
        >
          N
        </span>
        <span
          style={{
            color: 'red',
          }}
        >
          N
        </span>
        <span
          style={{
            color: 'red',
          }}
        >
          O
        </span>
        <span
          style={{
            color: 'red',
          }}
        >
          V
        </span>
        <span
          style={{
            color: 'white',
            border: '1px solid gray',
            padding: '2px',
            marginLeft: '5px',
            backgroundColor: 'red',
          }}
        >
          <span>X</span>
          <span>U</span>
          <span>S</span>
        </span>
      </h2>

      <HomeCrousel />

      <h3
        style={{
          textAlign: 'center',
          padding: '20px',
        }}
      >
        About Us
      </h3>

      <p
        style={{
          textAlign: 'center',
          padding: '20px',
          wordBreak: 'break-word',
          wordWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5',
          fontSize: '16px',
          color: 'black',
          fontWeight: '400',
          fontStyle: 'italic',
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        nesciunt fugiat delectus, id maiores ea ipsum! Odit officiis illo,
        blanditiis quasi repellendus similique dolorem voluptas dolores soluta
        nesciunt maiores, obcaecati, error labore quod nihil culpa. Nisi
        distinctio quos possimus consectetur sequi? Aperiam quasi obcaecati
        pariatur facilis earum fugit ratione qui harum molestiae neque sit
        accusantium sint illo accusamus dolorem nam reiciendis incidunt
        blanditiis tenetur, ipsa dolor! Distinctio impedit sequi quas ipsam
        minus omnis magnam repudiandae nihil expedita ratione quisquam itaque
        iste, dicta commodi. Corporis porro minima maxime itaque nemo aliquid
        cupiditate laborum iusto, qui tempora eveniet perferendis quaerat
        laudantium dolor repudiandae autem laboriosam repellendus, quasi
        provident repellat vitae odio! Facere blanditiis minima dolore corporis
        consequuntur reiciendis eos quas recusandae magnam dolorum ipsam
        deserunt inventore, a ad. Adipisci, officiis consequuntur provident iste
        cum illo incidunt id ipsum asperiores voluptatem nemo laudantium tenetur
        odio, repellat maxime. Labore dolores, omnis ipsam quam totam tempora
        eum amet impedit eos excepturi eius molestiae iste tenetur perspiciatis
        commodi sed nobis quidem. Aliquam totam quam ad, fugit impedit ea non?
      </p>
    </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
