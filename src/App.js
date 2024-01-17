import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Paragraph from './components/paragraph/paragraph';

function App() {
  let links = ['Главная','Десерты','Отзывы', 'Заказать', 'Контакты'];
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
        <Header img="https://cdn-icons-png.flaticon.com/128/3429/3429963.png"  text="TastyBerryCake"/>
        <Nav  links={links}/>
        <button onClick={()=>{setIsShow(!isShow)}}>
        {isShow ? 'Скрыть' : 'Показать'}
        </button>
    {isShow && <Paragraph par="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nulla possimus adipisci ipsum quod aliquid, non sint sunt iusto vel doloribus harum? Corrupti voluptatum velit quaerat, asperiores laboriosam et facere."/>}
        <Footer copyright="@copyright все права защищены" date={(new Date()).getFullYear()}/>
    </div>
  );
}

export default App;
