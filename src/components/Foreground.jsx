import React, { useRef } from 'react'
import Card from './Card';

function Foreground() {

    // motion
    const ref = useRef(null)


    // data
    const data = [
      {
        desc: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
      },
    ];
  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
         
          {/* card jsx for dynamic render*/}
          {data.map((item, index) => (
              <Card data={item} reference={ref} />
          ))}
      </div>
  );
}

export default Foreground