import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/AllApi'
import { Col, Row } from 'react-bootstrap'

export default function View({uploadVideoStatus}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setdeleteVideoStatus]=useState(false)
  const getVideos = async () => {
    const response = await getAllVideos()
    console.log(response);
    const { data } = response;
    setAllVideos(data);
  }
  useEffect(() => {
    getVideos()
    setdeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos?.map((videos) => (
              <Col sm={12} md={3} lg={3} xl={5} className='m-2' >
                <Videocard displayVideo={videos} setdeleteVideoStatus={setdeleteVideoStatus}/>
              </Col>
            )) :
            <p className='textStyle'>Nothing to Display</p>
        }
        
      </Row>

    </>
  )
}
