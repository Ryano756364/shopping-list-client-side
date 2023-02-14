import { useEffect, useRef } from "react";
import api from '../../api/mainConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReaviewForm from "../reviewForm/reaviewForm";


const reviews = ({getItemData,item,reviews,setReviews}) => {

  const revText = useRef();
  let params = useParams();
  const sku = params.sku;

  useEffect(() => {  //want to call method that is passed in as method to our component for recipe that user wishes to review
    getItemData(sku);
  },[])

  //adding review to database
  const addReview = async (event) => {
    event.preventDefault();

    const rev = revText.current;

    try{
      const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,sku:sku});

      const updatedReviews = [...reviews,{body:rev.value}];  //instead of pulling original data again, we just update the state to include the new review

      rev.value = "";  //clears text area once user has submitted a reivew

      setReviews(updatedReviews);  
    } catch(e){
      console.log(e);
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Reviews</h3>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <img src={item?.picture} alt="baking-item" />
          </Col>
          <Col>
            {
              <>
                <Row>
                    <Col>
                      <ReaviewForm 
                        handleSubmit={addReview} 
                        revText={revText} 
                        labelText= "Write a review of the recipe!"></ReaviewForm>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            }
            {
              reviews?.map((review) => {
                return (
                  <>
                    <Row>
                      <Col>
                        {review.body}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <hr />
                      </Col>
                    </Row>
                  </>
                )
              })
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default reviews
