import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Button from "components/common/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function ConfirmModal({ classicModal, setClassicModal, submitAction }) {
  const classes = useStyles();
  const defaultText = `
    Are you sure you want to submit the request,
    click on Recheck again for confirming again,
    click on Submit to submit request.
  `;
  const loadingText = `
    Loading.. please wait
  `;

  const [isLoading, setIsLoading] = useState(null);
  const [text, setText] = useState(defaultText);

  const submitButton = async() => {
    setIsLoading(true);
    setText(loadingText);
    await submitAction();
    setIsLoading(false);
    closeModal();
  }

  const closeModal = () => {
    if(isLoading) {
      return;
    }
    setText(defaultText);
    setClassicModal(false);
  }

  return (
    <>
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeModal}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={closeModal}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>Submit Request?</h4>
      </DialogTitle>
      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        <p>
          {text}
        </p>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        {
          !isLoading &&
          <>
            <Button 
              color="transparent"
              simple
              onClick={closeModal}
            >
              Recheck
            </Button>
            <Button
              onClick={submitButton}
              color="warning"
              simple
            >
              Submit
            </Button>
          </>
        }
      </DialogActions>
    </Dialog>
    </>
  );
}

export default ConfirmModal;
