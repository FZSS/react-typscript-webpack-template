import * as React from 'react';
import ReposTable from 'components/ReposTable/ReposTable';
import ReposHeader from 'components/ReposHeader/ReposHeader';
import RepoDetailsModal from 'components/RepoDetailsModal/RepoDetailsModal';
import { Typography } from '@material-ui/core';
import 'components/styles.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="app-view">
      <Typography variant="h4" gutterBottom>
        Github Repository List
      </Typography>
      <ReposHeader />
      <ReposTable />
      <RepoDetailsModal />
    </div>
  );
};

export default App;
