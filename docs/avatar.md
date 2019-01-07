---
name: Avatar
---

import { Playground, PropsTable } from 'docz';
import Avatar from '../src/avatar'
import Icon from "../src/icon";

## Size

<Playground>
  <Avatar size='small' icon='weixin' bordered />
  <Avatar icon='weixin' bordered />
  <Avatar size='large' icon='weixin' bordered />
</Playground>

## Shape

<Playground>
  <Avatar shape='circle' icon='weixin' bordered />
  <Avatar shape='square' icon='weixin' bordered />
</Playground>


## Image

<Playground>
  <Avatar  src='https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png' />
</Playground>


## Text

<Playground>
  <Avatar bordered>35</Avatar>
</Playground>