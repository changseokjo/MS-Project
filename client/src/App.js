import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    id: 1,
    image: 'https://images.chosun.com/resizer/7fXeUbYGUI9_MWDKxDvD3PBUM3c=/210x210/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/TLAG2JUEF5DVJEQFYXCDAFW4FA.png',
    name: '홍길동',
    birthday: '980125',
    gender: '남자',
    job: '대학생'
  },
  {
    'id': 2,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8Ns3iMoIoHJG6mzRszlrkjupaqbVvNL6SQ&usqp=CAU',
    'name': '답정너',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oV8F7Ha2ZhCyCxHwgji3GFSjigb6ZacvFw&usqp=CAU',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c => {
                return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
