import React from 'react'
import { getallcards, clearErrors } from '../../actions/productAction';

const Showallcards = () => {

    useEffect(() => {
        getallcards();
    }, [])
    

  return (
    <div>
      showalllcards
    </div>
  )
}

export default Showallcards