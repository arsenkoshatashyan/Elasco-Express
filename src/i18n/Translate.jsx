import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Translate({id}) {
  return (
    <FormattedMessage id={id}></FormattedMessage>
  )
}
