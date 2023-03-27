import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Opinions = () => {
  const opinionsStyle =
    "mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2";

  return (
    <section id="opinions" className="pt-32 pb-16">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Opinions
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 ">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>
      {/* Opinions */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue  before:content-person1 ${opinionsStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl text-black">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow  before:content-person2 ${opinionsStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl text-black">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red  before:content-person3 ${opinionsStyle}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl text-black">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Opinions;
