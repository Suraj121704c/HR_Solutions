import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/utils/images";

const items = [
  { image: images.exp1, title: "IT & Technology" },
  { image: images.exp2, title: "Manufacturing" },
  { image: images.exp3, title: "Retail & E-Commerce" },
  { image: images.exp4, title: "Health Care" },
];

export function Industries() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Expertise Across Industries"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {items.map(({ image, title }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Image
                src={image}
                alt={title}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
              <h3 className="mt-5 font-display text-base font-semibold text-navy sm:text-lg">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
