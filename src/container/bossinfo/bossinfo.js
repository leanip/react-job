import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NavBar, List, InputItem, TextareaItem, WhiteSpace, Button } from 'antd-mobile'

import AvatarSelecter from '../../component/avatar-selecter/avatar-selecter'
import { update } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
  state => state.user,
  { update }
)
@imoocForm
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate() {
    this.props.update(this.props.state)
  }

  render() {
    const redirectTo = this.props.redirectTo
    const { pathname } = this.props.location
    return (
      <div>
        {redirectTo && redirectTo !== pathname ? <Redirect to={redirectTo} /> : null}
        <NavBar>Boss完善信息页</NavBar>
        <AvatarSelecter selectAvatar={v => this.props.handleChange('avatar', v)} />
        <WhiteSpace />
        <List>
          <InputItem
            onChange={v => this.props.handleChange('title', v)}
          >职位名称</InputItem>
          <InputItem
            onChange={v => this.props.handleChange('company', v)}
          >公司名称</InputItem>
          <InputItem
            onChange={v => this.props.handleChange('money', v)}
          >薪资范围</InputItem>
          <TextareaItem
            title='岗位要求'
            rows={3}
            onChange={v => this.props.handleChange('desc', v)}
            autoHeight />
        </List>
        <WhiteSpace />
        <Button type='primary' onClick={this.handleUpdate}>提交</Button>
      </div>
    )
  }
}

export default BossInfo