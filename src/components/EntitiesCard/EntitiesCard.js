import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AlarmIcon from '@mui/icons-material/Alarm'
import Tooltip from '@mui/material/Tooltip'

import './entitiesCard.css'

export default function EntitiesCard({ entity }) {
  const { NAME } = entity

  return (
    <Card className="entities_card">
      <CardContent>
        <Tooltip
          title={<span className="entities_card_header_tooltip">{NAME}</span>}
          arrow
          placement="top"
          className="entities_card_header_tooltip"
        >
          <Typography className="entities_card_header">
            { NAME }
          </Typography>
        </Tooltip>
        <Typography className="entities_card_action" >
          <AddIcon className="entities_card_action_icon"/> Новая заявка
        </Typography>
        <Typography className="entities_card_action" >
          <FormatListBulletedIcon className="entities_card_action_icon"/> Мои заявки
        </Typography>
        <Typography className="entities_card_action" >
          <AlarmIcon className="entities_card_action_icon"/> Ждут моей реакции
        </Typography>
      </CardContent>
    </Card>
  )
}
