import React from 'react';
import ProductPageTemplate from "../templates/ProductPageTemplate"
import audi1 from "../../assets/Images/audi_1.jpg"
import audi2 from "../../assets/Images/audi_2.jpg"
import audi3 from "../../assets/Images/audi_3.jpg"
import audi4 from "../../assets/Images/audi_4.jpg"
import audi5 from "../../assets/Images/audi_5.jpg"
import imagenDesc1 from "../../assets/Images/imagenDesc1.png"
import imagenDesc2 from "../../assets/Images/imagenDesc2.png"
import imagenDesc3 from "../../assets/Images/imagenDesc3.png"
import imagenDesc4 from "../../assets/Images/imagenDesc4.png"

//  =================================
//  ANDRE
//  =================================

const productData = {
  images: [
    audi1,
    audi2,
    audi3,
    audi4,
    audi5,

  ],
  title: 'HyperX Cloud Stinger 2',
  features: [
    'Ligeros con auriculares giratorios de 90 grados',
    'Comodidad y durabilidad exclusivas de HyperX',
    'Micrófono con cancelación de ruido giratorio silenciar',
    'Compatibilidad multidispositivo'
  ],
  descriptions: [
    {
      title: 'Comodidad ligera. Sonido potente.',
      text: 'HyperX Cloud Stinger™ es el auricular ideal para gamers que buscan comodidad liviana, calidad de sonido superior y mayor conveniencia. Con solo 275 gramos, es cómodo para el cuello y sus auriculares giran en un ángulo de 90 grados para un mejor ajuste. Sus controladores direccionales de 50 mm colocan el sonido directamente en el oído para una precisión de audio y una calidad de sonido de calidad para juegos.',
      image: imagenDesc1
    },
    {
      title: 'AUDIO ESPACIAL DTS® HEADPHONE:X2',
      text: '¡Desbloquee la localización y espacialización precisas del audio 3D! El código de activación incluido proporciona 2 años de DTS® Headphone:X® Spatial Audio para una mejor percepción, conciencia e inmersión.',
      image: imagenDesc2
    },
    {
      title: 'MICRÓFONO CON CANCELACIÓN DE RUIDO GIRATORIO PARA SILENCIAR',
      text: 'Silencia cómodamente el micrófono girándolo verticalmente contra la cabeza. La cancelación de ruido pasiva integrada de HyperX Cloud Stinger reduce el ruido de fondo para una calidad de voz más clara. Los auriculares están certificados por TeamSpeak y Discord y son compatibles con otros programas de chat líderes.',
      image: imagenDesc3
    },
    {
      title: 'AURICULARES LIGEROS CON OREJERAS GIRATORIAS DE 90°',
      text: 'Con tan solo 275 gramos, los HyperX Cloud Stinger no te resultarán pesados, por lo que son ideales para largas sesiones de juego. Los auriculares giran 90 grados para que puedan descansar cómodamente alrededor de tu cuello durante los descansos.',
      image: imagenDesc4
    }
  ]
};

function ProductPage (){
  return (
    <div className="product-page">
      <ProductPageTemplate product={productData} />
    </div>
  );
};

//  =================================
//  ANDRE
//  =================================

export default ProductPage;