---
name: Button
---

import { Playground, PropsTable } from 'docz';
import { Button } from '../dist'

## Type

<Playground>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button>
  <Button type="info">Info</Button>
  <Button type="link">Link</Button>
</Playground>

## Size

<Playground>
  <Button size="small" type="primary">
    Small
  </Button>
  <Button type="primary">Default</Button>
  <Button size="large" type="primary">
    Large
  </Button>
</Playground>

## Loaidng

<Playground>
  <Button type="primary" loading>
    Loading
  </Button>
</Playground>

## Disabled

<Playground>
  <Button type="primary" disabled>
    Disabled
  </Button>
</Playground>

## Block

<Playground>
  <Button type="primary" block>
    Primary
  </Button>
</Playground>

## Icon

<Playground>
  <Button type="primary" icon="alipay">
    alipay
  </Button>
  <Button type="primary" icon="weixin">
    weixin
  </Button>
</Playground>

## Link

<Playground>
  <Button type="primary" href="http://www.baidu.com">
    Baidu
  </Button>
</Playground>

## props

<PropsTable of={Button} />
