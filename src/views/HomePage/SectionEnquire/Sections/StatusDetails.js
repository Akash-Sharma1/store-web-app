import React from "react";
import { mobxify } from 'utils/hoc';

function StatusDetails({ EnquireStore: store }) {
  return (
    <div>
    </div>
  );
}

export default mobxify('EnquireStore')(StatusDetails);
