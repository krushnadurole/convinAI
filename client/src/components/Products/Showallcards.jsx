import React from 'react'
import { CreateBucket, clearErrors } from '../../actions/productAction';

const Showallcards = () => {

    useEffect(() => {
        getbuckets();
    }, [third])
    

  return (
    <div>Showallcards</div>
  )
}

export default Showallcards