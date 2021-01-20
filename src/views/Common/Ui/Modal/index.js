import React, {useState, useEffect} from "react";
import { mobxify } from 'utils/hoc';

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

function Modal({ AppStore : store }) {
  const classes = useStyles();
  const loadingText = <span>Loading.. please wait</span>;

  const [isLoading, setIsLoading] = useState(null);
  const [text, setText] = useState('');
  const [buttons, setButtons] = useState(null);

  const closeModal = () => {
    if (isLoading) {
      return;
    }
    if (store.modal.onCloseAction) {
      store.modal.onCloseAction();
    }
    setText(store.modal.defaultText);
    store.setModalItem('open', false);
  }

  useEffect(() => {
    setText(store.modal.defaultText);

    if (store.modal.buttonList) {
      setButtons(
        store.modal.buttonList.map(button => {
          let btnFunction = () => {
            if(button.onClick) {
              button.onClick();
            }
            if(button.redirect) {
              window.location.replace(button.redirect);
            } else {
              if (!button.noClose) {
                closeModal();
              }
            }
          }
          if(button.async) {
            btnFunction = async() => {
              if (button.triggerLoading) {
                setIsLoading(true);
                setText(loadingText);
              }
              if(button.onClick) {
                await button.onClick();
              }
              if(button.redirect) {
                window.location.replace(button.redirect);
              } else {
                if (!button.noClose) {
                  closeModal();
                }
                if (button.triggerLoading) {
                  setText(store.modal.defaultText);
                  setIsLoading(false);
                }
              }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store.modal]);

  let titleText = store.modal.title ? store.modal.title : 'Submit?';
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
      open={store.modal.open}
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

export default mobxify('AppStore')(Modal);
