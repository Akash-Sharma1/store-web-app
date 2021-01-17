import React, {useState}  from "react";

import "assets/scss/shop/shop.scss";
import { mobxify } from 'utils/hoc';
import { makeStyles } from "@material-ui/core/styles";
import Badge from "components/common/Badge/Badge.js";
import Checkbox from "@material-ui/core/Checkbox";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Check from "@material-ui/icons/Check";
import Radio from "@material-ui/core/Radio";
import { List, ListItem } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "components/common/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);

function FilterItemList({ ProductStore: store }) {
  const classes = useStyles();
  const [filtersOn, setFiltersOn] = useState(false);


  function RadioButton({ filteritem, value, set, parent}) {
    return (
      <FormControlLabel
        control={
          <Radio
            checked={value}
            onClick={() => set(parent, filteritem, !value)}
            icon={
              <FiberManualRecord className={classes.radioUnchecked} />
            }
            checkedIcon={
              <FiberManualRecord className={classes.radioChecked} />
            }
            classes={{
              checked: classes.radio,
              root: classes.radioRoot
            }}
          />
        }
        classes={{ label: classes.label, root: classes.labelRoot }}
        label={filteritem}
      />
    );
  }

  function CheckBoxes({ filteritem, value, set, parent}) {
    return (
      <FormControlLabel
        control={
          <Checkbox
            tabIndex={-1}
            checked={value}
            onClick={() => set(parent, filteritem, !value)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
              root: classes.checkRoot
            }}
          />
        }
        classes={{ label: classes.label, root: classes.labelRoot }}
        label={filteritem}
      />
    );
  }

  const checkOnly = (parent, item, value) => {
    let list = [];
    if (parent === 'CATEGORY') {
      list = Object.keys(store.filters_CATEGORY)
    } else if (parent === 'MATERIAL') {
      list = Object.keys(store.filters_MATERIAL)
    }
    for(var key in list) {
      let filter = list[key];
      if (filter === item) {
        store.setFilterItem(parent, item, value);
      } else {
        store.setFilterItem(parent, filter, false);
      }
    }
  }

  const material = Object.keys(store.filters_MATERIAL).map( key => {
    return <div key={`${key}`}>
      <RadioButton
        filteritem={key}
        value={store.filters_MATERIAL[key]}
        parent="MATERIAL"
        set={checkOnly}
      />
    </div>
  });

  const category = Object.keys(store.filters_CATEGORY).map( key => {
    return <div key={`${key}`}>
      <CheckBoxes
        filteritem={key}
        value={store.filters_CATEGORY[key]}
        parent="CATEGORY"
        set={store.setFilterItem}
      />
    </div>
  });

  return(
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            className="shop__full-wh"
            size="sm"
            onClick={() => setFiltersOn(!filtersOn)}
            color={!filtersOn ? "default" : "primary"}
          >
            Filters ({filtersOn ? 'ON' : 'OFF'})
          </Button>
        </ListItem>
        <br/>
        <br/>

        <ListItem className={classes.listItem}>
          <Badge color="info" className="shop_full-wh">Material</Badge>
        </ListItem>
        {material}

        <ListItem className={classes.listItem}>
          <Badge color="rose" className="shop_full-wh">Category</Badge>
        </ListItem>
        {category}

      </List>
    </div>
  );
}

export default mobxify('ProductStore')(FilterItemList);
