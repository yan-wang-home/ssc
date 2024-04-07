import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Img } from 'app/modules/components';

const langMap = new Map<string, string>([
  ['en', 'content/images/flag-uk.svg'],
  ['zh-cn', 'content/images/flag-china.svg'],
  ['fr', 'content/images/flag-france.svg'],
]);

export const NavDropdown = props => (
  <UncontrolledDropdown /*nav inNavbar*/ id={props.id} data-cy={props['data-cy']}>
    <DropdownToggle nav caret className="d-flex align-items-center">
      {/* <FontAwesomeIcon icon={props.icon} /> */}
      {/* <Img */}
      {/*   className="w-[30px] h-[30px] mr-1" */}
      {/*   // src="content/images/edit-file-svgrepo-com.svg" */}
      {/*   src="content/images/flag-china.svg" */}
      {/*   alt="call" */}
      {/* /> */}
      <Img className="w-[30px] h-[30px] mr-2" src={langMap.get(props.id)} alt="call" />
      <span>{props.name}</span>
    </DropdownToggle>
    <DropdownMenu style={props.style}>{props.children}</DropdownMenu>
  </UncontrolledDropdown>
);
