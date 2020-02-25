
import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = (props) => {
    let path = '/dialogs/'+ props.id;
return (
    <div className={s.dialog + ' '+ s.active}>
    <NavLink to={path}>{props.name}</NavLink> 
 </div>
)
}

const Message =(props) =>{
   return (<div className={s.dialog}> {props.message} </div>)

}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>
                <DialogsItems name='Freya' id='1'/>
                <DialogsItems name='Anna' id='2'/>
                <DialogsItems name='Knut' id='3'/>
                <DialogsItems name='Bjørn' id='4'/>
                <DialogsItems name='Irene' id='5'/>
                <DialogsItems name='Andreas' id='6'/>
                <DialogsItems name='Glenn' id='7'/>
                
            </div>

            <div className={s.messages}>
              <Message message='Hi'/>
              <Message message='How are you?'/>
              <Message message="I'm fine. Thanks."/>
              <Message message="It's my first post. Hi everybody!"/>
              <Message message='Hi. Can you help me, please?'/>
              <Message message='Please check my post'/>
              <Message message='Yo'/>
            </div>
        </div>

    )
}

export default Dialogs;