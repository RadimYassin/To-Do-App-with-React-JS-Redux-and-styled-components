import React from 'react'
import { Box,ButtonV } from '../GlobalStyle'
import{ Vis } from '../Visiblty'

const VisibltyFiltter = () => {
  return (
    <Box mt="20px">
     {Object.keys(Vis).map((Vis,index)=>
      {
        return(
         
          <ButtonV bg={Vis} key={index}>{Vis}</ButtonV>
        )
      }
      
      
      )}
    </Box>
  )
}

export default VisibltyFiltter
