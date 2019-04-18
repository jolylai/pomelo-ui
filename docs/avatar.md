---
name: Avatar
---

import { Playground, PropsTable } from 'docz';
import Avatar from '../src/avatar'
import Icon from "../src/icon";

## Size

<Playground>
  <Avatar size='small' icon='weixin' />
  <Avatar  />
  <Avatar size='large' icon='weixin' />
</Playground>

## Shape

<Playground>
  <Avatar shape='circle' icon='weixin' bordered />
  <Avatar shape='square' icon='weixin' bordered />
</Playground>


## Image

<Playground>
  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
</Playground>


## Text

<Playground>
  <Avatar bordered>35</Avatar>
</Playground>