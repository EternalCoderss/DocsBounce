import React from 'react'
import { FaFileAlt } from "react-icons/fa"; 
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
    return (
      // card
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        className="relative  w-60 h-80 flex-shrink-0 rounded-[30px] bg-zinc-900/50 text-white px-8  py-10 overflow-hidden"
      >
        {/* icon */}
        <FaFileAlt />
        {/* text */}
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        {/* footer */}
        <div className="footer absolute bottom-0 w-full left-0">
          {/* footer icon and text */}
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {/* size parameter and close value */}

              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            // idhar color random krna k liye backtik me use krenge jsx, and es6 k dynamic content calculation use krenge
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    );
}

export default Card