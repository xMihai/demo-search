declare module '@hocs/debounce-handler' {
  import * as React from 'react'

  type HOC<Props> = (component: React.ComponentType<Props>) => React.ComponentType<Props>

  const debounceHandler: <Props = {}>(method: string, timeout: number) => HOC<Props>
  export default debounceHandler
}
