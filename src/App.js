import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

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
    return (
      <div>
        {customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>

    );
  }
}

export default App;
