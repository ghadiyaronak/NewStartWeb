import React from 'react';
import { config } from '../config/config';
import { Link } from '@ui5/webcomponents-react';



const Footer = () => {
    return (
        <div className="sticky-footer" >
        <Link href="https://newstarinfotech.com" target='_blank' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"15px", fontSize:"18px" }}>{config.footertext}</Link>
      </div>
    );
}

export default Footer;


// import React from 'react';
// import { config } from '../config/config';
// import { Link } from '@ui5/webcomponents-react';
// import { Box, Link } from '@chakra-ui/react';



// const Footer = () => {
//   return (
//     <div >
//       <Box className='sticky-footer' borderTop={1} mt={10} w={"full"} borderStyle={"solid"} bg={"#ffffff"} >
//         <Link href="https://newstarinfotech.com" target='_blank' position={"sticky-footer "} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"15px", fontSize:"18px" }}>{config.footertext}</Link>
//       </Box>
//     </div>
//   );
// }

// export default Footer;