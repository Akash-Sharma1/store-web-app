import React, {useState, useEffect} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/components/paginationStyle.js";

const useStyles = makeStyles(styles);

export default function Pagination(props) {
  const classes = useStyles();
  const {
    onClickAction,
    forceActivePage,
    setForceActivePage,
    color,
    maxx,
    scrollTo
  } = props;

  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [maxxPages, setMaxxPage] = useState(10000);

  useEffect(() =>{
    if (maxx) {
      setMaxxPage(maxx);
    }
  },[maxx]);

  useEffect(() => {
    if(forceActivePage && forceActivePage !== activePage) {
      setActivePage(forceActivePage);
    }
    if(activePage > maxxPages) {
      setActivePage(maxxPages)
    } else if(activePage < 1) {
      setActivePage(1)
    }
  }, [forceActivePage, activePage, maxxPages]);

  const handlePageChange = (value, offset = 0) => {
    var newPage = activePage;
    if (value == null) {
      newPage += offset;
    } else {
      newPage = value;
    }

    if (newPage < 1 || newPage > maxxPages || newPage === activePage) {
      return;
    }

    setActivePage(newPage);

    var scrollY = 100;
    if(scrollTo) {
      scrollY = scrollTo;
    }

    setTimeout(() => {
      window.scroll({
        top: scrollY,
        behavior: 'smooth'
      });
    }, 200); 

    if (setForceActivePage) {
      setForceActivePage(newPage);
    }
    
    if(onClickAction) {
      onClickAction(newPage);
    }
  }

  useEffect(() => {
    const minn = Math.max(1, activePage - 2);
    const maxx = Math.min(maxxPages, activePage + 2);
    var p = [];

    p.push({
      text: "Prev",
      disabled: (activePage === 1),
      onClick: handlePageChange
    });

    for(var i=minn;i<=maxx;i++){
      p.push({
        text: i.toString(),
        active: (i === activePage),
        disabled: false,
        onClick: handlePageChange
      });
    }

    p.push({
      text: "Next",
      disabled: (activePage === maxxPages),
      onClick: handlePageChange
    });

    setPages(p);

  }, [activePage, maxxPages]);

  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            <Button onClick={() => {
              if (prop.text === "Prev") {
                prop.onClick(null, -1);
              } else if(prop.text === "Next") {
                prop.onClick(null, 1);  
              } else {
                prop.onClick(parseInt(prop.text));
              }
            }} className={paginationLink}>
              {prop.text}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
