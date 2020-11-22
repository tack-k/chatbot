import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import UserIcon from '../assets/img/user-icon.png';
import AdminIcon from '../assets/img/admin-icon.png';

const Chat = (props) => {

  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}>
    <ListItemAvatar>
      {isQuestion ? (
        <Avatar alt="admin-icon" src={AdminIcon} />
        ) : (
          <Avatar alt="user-icon" src={UserIcon} />
      )}

    </ListItemAvatar>
    <div className="p-chat__bubble">
          {props.text}
    </div>
  </ListItem>
  )
}

export default Chat