import * as React from 'react';
import { FunctionComponent, Fragment } from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { toggleRepoDetailsModal } from 'store/repoDetails/slice';
import { Alert } from '@material-ui/lab';

const RepoDetailsModal: FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleRepoDetailsModal(false));
  const loading = useSelector((state: RootState) => state.repoDetails.loading);
  const error = useSelector((state: RootState) => state.repoDetails.error);
  const open = useSelector((state: RootState) => state.repoDetails.modalOpen);

  const committers = useSelector(
    (state: RootState) => state.repoDetails.lastCommitters
  );
  const forkOwner = useSelector(
    (state: RootState) => state.repoDetails.lastForkOwner
  );
  const bio = useSelector(
    (state: RootState) => state.repoDetails.lastForkOwnerBio
  );

  // last 1-3 commits can be from 1-3 people
  const textCommitter = `Last commits by: ${committers.join(', ')}.`;
  // do not show forker if none
  const textForker = forkOwner && `The last fork was created by: ${forkOwner}.`;
  // do not show bio if no bio
  const textBio = bio && `The owner has this in their biography: ${bio}`;

  const content = loading ? (
    <CircularProgress />
  ) : (
    <Fragment>
      <DialogContentText>{textCommitter}</DialogContentText>
      <DialogContentText>{textForker}</DialogContentText>
      <DialogContentText>{textBio}</DialogContentText>
    </Fragment>
  );

  return (
    <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        {error ? <Alert severity="error">{error}</Alert> : content}
      </DialogContent>
    </Dialog>
  );
};

export default RepoDetailsModal;
