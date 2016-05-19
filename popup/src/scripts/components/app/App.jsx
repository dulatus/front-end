import React, {Component} from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="Translato" />
        <TextField  hintText="find" />
        <List>
          <ListItem primaryText="Black"  />
          <ListItem primaryText="Черный" />
          <ListItem primaryText="White" />
          <ListItem primaryText="Apple" />
          <ListItem primaryText="Яблоко" />
        </List>
      </div>
    );
  }
}

export default App;
