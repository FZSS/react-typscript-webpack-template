import * as React from 'react';
import { FunctionComponent } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Link,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { RootState } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Repo } from 'store/repos/state';
import EmptyTable from 'components/ReposTable/EmptyTable';
import 'components/ReposTable/styles.css';
import { shortenUrl } from 'utils/urlUtils';
import {
  fetchRepoDetails,
  toggleRepoDetailsModal,
} from 'store/repoDetails/slice';

const ReposTable: FunctionComponent = () => {
  const loading = useSelector((state: RootState) => state.repos.loading);
  const repos = useSelector((state: RootState) => state.repos.repos);
  const error = useSelector((state: RootState) => state.repos.error);
  const dispatch = useDispatch();

  const handleDetailsClick = (shortName: string) => () => {
    dispatch(fetchRepoDetails(shortName));
    dispatch(toggleRepoDetailsModal(true));
  };

  // handle error
  if (error) {
    return (
      <div className="repos-table">
        {<Alert severity="error">{error}</Alert>}
      </div>
    );
  }

  // check if zero matching
  const isEmpty = repos.length === 0;

  if (!loading && isEmpty) {
    return <div className="repos-table">{<EmptyTable />}</div>;
  }

  const table = (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Stars</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map((repo: Repo) => (
            <TableRow key={repo.url}>
              <TableCell>{repo.name}</TableCell>
              <TableCell>{repo.owner}</TableCell>
              <TableCell>{repo.stars}</TableCell>
              <TableCell>
                <Link href={repo.url}>{shortenUrl(repo.url)}</Link>
              </TableCell>
              <TableCell>
                <Link
                  href="#"
                  onClick={handleDetailsClick(shortenUrl(repo.url))}
                >
                  Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className="repos-table">{loading ? <CircularProgress /> : table}</div>
  );
};

export default ReposTable;
