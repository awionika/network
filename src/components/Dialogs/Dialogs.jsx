
import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className= {s.dialogsItems}>
                <div className={s.dialog + ' '+ s.active}>
                    Freya
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Knut
                </div>
                <div className={s.dialog}>
                    David
                </div>
                <div className={s.dialog}>
                    Nick 
                </div>
                <div className={s.dialog}>
                    Bjørn 
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}> Hi </div>
                <div className={s.message}>How are you? </div>
                <div className={s.message}> I'm fine. Thanks</div>
                <div className={s.message}> It's my first post. Hi everybody! </div>
                <div className={s.message}> Hi. Can you help me, please?</div>
                <div className={s.message}> Please check my post</div>
            </div>
        </div>

    )
}

export default Dialogs;