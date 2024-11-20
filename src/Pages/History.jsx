import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../services/allAPI'
import { deleteHistory } from '../services/allAPI'




function History() {


  const [savehis, setsavehis] = useState([])


  useEffect(() => {

    GetHistory()

  }, [])


  const GetHistory = async () => {

    try {
      const result = await getHistory()
      console.log(result);
      setsavehis(result.data)
      console.log(savehis);
    }
    catch (err) {
      console.log(err);

    }
  }


  const delhistory = async (videoId) => {

    try {
      await deleteHistory(videoId)
      GetHistory()

      console.log(videoId);
      
      


    }
    catch (err) {
      console.log(err);

    }
  }







  return (
    <>

      <div className='d-flex justify-content-between container-fluid p-5 mt-3'>
        <h4>Watch Histroy</h4>
        <h4><Link to={'/home'} style={{ textDecoration: "none" }}>Home</Link></h4>
      </div>


      <div class="table-responsive container-fluid p-5 my-5">
        <table className='table table border table-striped table-hover text-center'>
          <thead class="table-light">
            <tr>
              <th>ID</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              savehis.length > 0 ?

                savehis?.map((item, index) => (

                  <tr key={item?.id}>
                    <td>{index + 1}</td>
                    <td>{item.caption}</td>
                    <td><Link target='_blank'>{item.utubeURL}</Link></td>
                    <td>{item.formatteddate}</td>
                    <td><button className='btn' onClick={() => delhistory(item?.id)}><i className="fa-solid fa-trash fs-5" style={{ color: "#f10909", }} /></button></td>
                  </tr>


                ))


                :
                <div className='text-danger'>Nothing to Disply</div>

            }



          </tbody>
        </table>
      </div>

    </>
  )
}

export default History