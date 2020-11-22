import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Chat = () => {

  return (
    <ListItem>
    <ListItemAvatar>
   
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />

    </ListItemAvatar>
    <div className="p-chat__bubble">

    </div>
  </ListItem>
  )
}

export default Chat