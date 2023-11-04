import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Ayur Minds Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify"
      >
        In the fast-paced world of modern living, daily routines often lack
        balance, leading to unhealthy dietary habits, insufficient exercise,
        excessive work-related stress, and overall dissatisfaction. This can
        result in poor health. While Ayurveda offers alternative solutions to
        many ailments, it can be challenging for individuals to identify the
        right herbs and treatments and consult with healthcare professionals
        cost-effectively and promptly. Additionally, the high cost of Western
        medicine can be a barrier, and not all illnesses can be effectively
        treated through conventional means.
        <br /> <br />
        Our proposed solution aims to help users discover interactive
        Ayurvedic-based treatments for various symptoms, providing a valuable
        alternative to mainstream medicine. The identification of Ayurvedic
        medicinal herbs plays a crucial role in treating various conditions.
        Traditional identification methods, relying on physical examination and
        experience, can be time-consuming and prone to errors. To address this
        challenge, our study introduces an innovative approach that harnesses
        image processing and machine learning techniques for the accurate
        identification of Ayurvedic medical herbs
        <br /> <br />
        Our research involved the collection and processing of extensive image
        data from various geographical regions to create a comprehensive map of
        herbal plant distribution. Subsequently, we implemented this model in a
        user-friendly software application for practical use. As a unique
        improvement, our study incorporated continual learning and transfer
        learning to enhance accuracy and auto-machine learning to simplify the
        addition of new plants. This innovative approach holds the potential to
        significantly enhance the precision and efficiency of Ayurvedic medical
        herb identification and treatment, making it a valuable tool for the
        healthcare industry.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
