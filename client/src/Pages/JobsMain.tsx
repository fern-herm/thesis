import React from 'react';
import Create from '../Components/JobListings/Create';
import List from '../Components/JobListings/List';
import Search from '../Components/JobListings/Search';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { changeView, } from '../state/features/jobs/jobSlice';

const JobsMain = () => {

  const dispatch = useAppDispatch();

  const view = useAppSelector((state)=>state.job.view);

  const handleClick = () => {
    if (view !== 'create') {
      dispatch(changeView('create'));
      return;
    }
    dispatch(changeView('list'));
  };

  return (
    <Container fluid>
      {
        view === 'create' ?
          <Create /> :
          <div>
            <Search />
            <List />
          </div>
      }
      <Button onClick={()=>{ handleClick(); }}>{view === 'create' ? 'Return to Job List' : 'Create New Job'}</Button>
    </Container>
  );
};

export default JobsMain;
