import React from 'react';
import { useAppDispatch } from '../../state/hooks';
import moment from 'moment';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteApplication } from '../../state/features/jobs/jobSlice';

const AppliedJobsBoard = ({
  job,
  startDate,
  petPlants,
  location,
  id,
  status,
}) => {
  //console.log(location);
  const dispatch = useAppDispatch();
  //console.log('job in board', job);
  //console.log(id, 'id'); //job id
  // console.log('startDate', startDate);
  console.log('petPlants', petPlants);
  const cancelApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  // console.log('petPlants', petPlants);
  //'bootstrap-card job-application-container'
  return (
    <Card className='landing-applications-card'>
      <Card.Body>
        <Card.Title className='landing-application-card-title'>
          Application For{' '}
          {petPlants.map((pet) => {
            return `${pet.pet_plant.name} | `;
          })}{' '}
        </Card.Title>
        <p className='landing-application-date'>
          {moment(startDate).format('dddd MMMM Do, YYYY')}
        </p>
        <p className='landing-application-status'>
          Status for Job ID # {job.id}:{' '}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
        <img
          className='landing-application-status-card-image'
          src={petPlants.map((pet) => {
            return pet.pet_plant.image;
          })}
          alt=''
        />

        <Card.Text className='landing-application-job-description'>
          Species:{' '}
          {petPlants.map((pet) => {
            return pet.pet_plant.species;
          })}
          <p className='huh'>
            About:{' '}
            {petPlants.map((pet) => {
              return pet.pet_plant.bio;
            })}
          </p>
        </Card.Text>
        <Button
          className='application-status-card-btn'
          // variant='primary'
          onClick={() => cancelApplication(id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AppliedJobsBoard;
