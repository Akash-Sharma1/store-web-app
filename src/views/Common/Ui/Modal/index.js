import React, {useState, useEffect} from "react";

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

function Modal({
  open, setOpen, buttonList, title,
  defaultText, onCloseAction,
}) {
  const classes = useStyles();
  const loadingText = <span>Loading.. please wait</span>;

  const [isLoading, setIsLoading] = useState(null);
  const [text, setText] = useState(defaultText);
  const [buttons, setButtons] = useState(null);

  const closeModal = () => {
    if (isLoading) {
      return;
    }
    if (onCloseAction) {
      onCloseAction();
    }
    setText(defaultText);
    setOpen(false);
  }

  useEffect(() => {
    if (buttonList) {
      setButtons(
        buttonList.map(button => {
          let btnFunction = () => {
            button.onClick();
          }
          if(button.async) {
            btnFunction = async() => {
              if (button.triggerLoading) {
                setIsLoading(true);
                setText(loadingText);
              }
              await button.onClick();
              if (button.triggerLoading) {
                setText(defaultText);
                setIsLoading(false);
              }
              closeModal();
            } 
          }
          return <div key={button.text}>
            <Button
              onClick={btnFunction}
              color={button.color ? button.color : 'transparent'}
              simple
            >
              {button.text}
            </Button>
          </div>
        })
      );
    }
  },[]);

  let titleText = title ? title : 'Submit?';
  if (isLoading) {
    titleText = '';
  }

  return (
    <>
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={open}
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
        <h4 className={classes.modalTitle}>{titleText}</h4>
      </DialogTitle>
      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        <span>
          {text}
        </span>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        {
          !isLoading && <>
            {buttons}
          </>
        }
      </DialogActions>
    </Dialog>
    </>
  );
}

export default Modal;
