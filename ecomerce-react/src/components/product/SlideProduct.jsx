import Previcon from "@/components/icons/Previcon";
import Nexticon from "@/components/icons/Nexticon";

import imgProduct1 from "@/assets/images/image-product-1.jpg";

import imgProduct2 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProduct3 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProduct4 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProduct5 from "@/assets/images/image-product-4-thumbnail.jpg";

export default () => {
  return (
    <section className="grid md:grid-cols-4 gap-4">
      <div className="col-span-4">
        <img src={ imgProduct1 } alt="" className="aspect-[16/13]" />
        <div>
            <button>
                <Previcon />
            </button>
            <button>
                <Nexticon />
            </button>
        </div>
      </div>
      <img src={imgProduct2} alt="" className="hidden md:block" />
      <img src={imgProduct3} alt="" className="hidden md:block" />
      <img src={imgProduct4} alt="" className="hidden md:block" />
      <img src={imgProduct5} alt="" className="hidden md:block" />
    </section>
  );
};
