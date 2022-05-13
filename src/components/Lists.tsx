import React from 'react'
import { text } from 'stream/consumers';
import List from './List'

const Lists = () => {
    const items: string[] = ["Kongkon", "Klinton"];
    const onClick = (text: string): void => alert(text);
  return (
    <div>
        <List items={items} onClick ={onClick} />
    </div>
  )
}

export default Lists;