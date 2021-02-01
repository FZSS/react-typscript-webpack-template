import * as React from 'react';
import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

const EmptyTable: FunctionComponent = () => {
  return (
    <Typography color="textSecondary" variant="body1">
      No repositories
    </Typography>
  );
};

export default EmptyTable;
