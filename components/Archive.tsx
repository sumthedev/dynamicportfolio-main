import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          My Other Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Parantwave Dashboard-02"
          des="This project is my heart. I created with a my pressure of mids exams. Its my 
          first intership project. I created this project two times."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://github.com/sumthedev/project-04"
        />
        <ArchiveCard
          title="Parantwave Dashboard-01"
          des="This is the first paravantwave project dashboard. That was rejected.
          But I made it with love, the reason why I included this project. Because it reminds
          my rejection, struggle, and also I feel confident that I improve too much"
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://github.com/sumthedev/admin-panel"
        />
        <ArchiveCard
          title="Todo App"
          des="Decent todo app 
          manager that makes it simple to organize your tasks. 
          It keeps your data around. You can make, edit, read, and delete things. You can quickly recall your chores, so once you've finished them, erase them."
          listItem={["NodeJs", "MongoDb", "getform.io"]}
          link="https://github.com/sumthedev/todoApp"
        />
        <ArchiveCard
          title="React Artifical Intelligence App"
          des="This was my client project on upwork, I don't have live project link
          but I share you the video, It was react AI application. You can attract with an AI."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.loom.com/share/0d907d6ba3a84161855aa78c6068a1ac?sid=df4a271a-904b-4bc7-b6d1-c4d992271787"
        />
        <ArchiveCard
          title="Authentication Page"
          des=" Responsive modern authentication page, with background video"
          listItem={["JavaScript", "Tailwind CSS", "Framer Motion"]}
          link="https://github.com/sumthedev/Login"
        />
        <ArchiveCard
          title="Dynamic Responsive Portfolio"
          des="This is the portfolio that are showing on there"
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link=""
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Donation Website - Mayhas"
                des="This is the website that made on wordpress, a religioys website that
                collect donation"
                listItem={["Wordpress", "PHP", "GiveWP"]}
                link="https://mayhas.org/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="MERN Stack Development"
                des="This  project is the mern stack project, this was basically a AI application."
                listItem={["Reactjs", "NodeJs", "Express", "MongoDB"]}
                link="https://github.com/sumthedev/mern-stack"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="React Router contact"
                des="A react router contact, in which you can create, read, delete and update contact
                with the power of react router"
                listItem={["ReactJs", "Tailwind CSS", "redux", "react-router"]}
                link="https://github.com/sumthedev/react-router-contact"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="React Login Storm"
                des="In this project you can persist your email and passowrd in browser, 
                and the website can persist until your browser session is expired. Some browser tricks
                without backend"
                listItem={["ReactJS", "Redux", "localForge"]}
                link="https://github.com/sumthedev/ReactLoginStorm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des="A simple portfolio website, but responsive"
                listItem={["JavaScript", "Tailwind CSS", "github deploy"]}
                link="https://github.com/sumthedev/sumbal-hashmi.github.io"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://github.com/sumthedev/amazon-clone"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="NodeJS Instalation Guidline"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://medium.com/@sumbalhashmi14/unlocking-the-power-of-node-js-harnessing-native-and-external-modules-15db01736cdb"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Task Manager"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["NodeJS", "Tailwind CSS", "Heruko deploy"]}
                link="https://github.com/sumthedev/todoApp"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
